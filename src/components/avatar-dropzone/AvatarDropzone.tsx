import { FC, useCallback, useEffect, useState } from 'react';
import AvatarEditor from 'react-avatar-editor';
import Dropzone from 'react-dropzone';
import { Camera, X } from 'react-feather';

import { useTranslation } from 'react-i18next';
import { addToLoading, removeFromLoading } from '../../redux/reducers/loadingReducer';
import { store } from '../../redux/store';
import { Image } from '../image';

import './style.css';

const convertDataURIToBinary = (dataURI: any) => {
    var BASE64_MARKER = ';base64,';
    var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
    var base64 = dataURI.substring(base64Index);
    var raw = window.atob(base64);
    var rawLength = raw.length;
    var array = new Uint8Array(new ArrayBuffer(rawLength));
    for (let i = 0; i < rawLength; i++) {
        array[i] = raw.charCodeAt(i);
    }
    return array;
};

interface IProps {
    currentImage: any;
    onSaveImage: (image: any) => void;
}
const AvatarDropzone: FC<IProps> = ({ currentImage, onSaveImage }) => {
    const [t] = useTranslation();
    const [editor, setEditor] = useState<any>();
    const [editing, setEditing] = useState<boolean>(false);
    const [image, setImage] = useState<any>();
    const setEditorRef = useCallback((edit) => {
        if (edit) {
            setEditor(edit);
        }
    }, []);
    const onDrop = useCallback((acceptedFiles: any[]) => {
        setImage(acceptedFiles[0]);
    }, []);

    const saveImage = useCallback(
        (e: any) => {
            e.preventDefault();
            e.stopPropagation();
            if (!!image && !!editor) {
                const canvas = editor.getImage();
                const dataUrl = canvas.toDataURL();
                const binImage = convertDataURIToBinary(dataUrl);
                store.dispatch(addToLoading());
                onSaveImage(binImage);
            }
        },
        [editor, image, onSaveImage],
    );

    const cancelEditing = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setEditing(false);
        setImage(undefined);
    }, []);

    useEffect(() => {
        setEditing(false);
        setImage(undefined);
        store.dispatch(removeFromLoading());
    }, [currentImage]);

    return (
        <Dropzone onDrop={onDrop} noKeyboard>
            {({ getRootProps, getInputProps }) => (
                <div className='avatar-dropzone-wrapper'>
                    {editing ? (
                        <div {...getRootProps()} title={t('lblDropImageHere')}>
                            <>
                                <AvatarEditor
                                    ref={setEditorRef}
                                    image={image ?? currentImage}
                                    className='avatar-dropzone-editor'
                                    border={1}
                                    width={249}
                                    height={249}
                                />

                                <input {...getInputProps()} />
                                <button className='avatar-dropzone-save-button' onClick={saveImage}>
                                    {t('lblSave')}
                                </button>
                                <div
                                    className='avatar-dropzone-cancel'
                                    title={t('lblCancelEditing')}
                                    onClick={cancelEditing}
                                >
                                    <X size='26px' className='avatar-dropzone-icon' />
                                </div>
                            </>
                        </div>
                    ) : (
                        <>
                            <Image src={currentImage} />
                            <div
                                className='avatar-dropzone-edit'
                                title={t('lblEditPhoto')}
                                onClick={(e) => setEditing(true)}
                            >
                                <Camera size='26px' className='avatar-dropzone-icon' />
                            </div>
                        </>
                    )}
                </div>
            )}
        </Dropzone>
    );
};

export { AvatarDropzone };
