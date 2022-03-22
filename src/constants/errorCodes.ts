type IErrorCodes = {
    [key: number]: string;
};

export const ERROR_CODES: IErrorCodes = {
    1001: 'lblUserAlreadyRegistered',
    1002: 'lblValidationFailed',
    1003: 'lblUserDoesntExist',
    1004: 'lblUserExistsInvalidStatus',
    1005: 'lblUserNotVerified',
    1006: 'lblConfirmationUrlError',
    1007: 'lblUserAlreadyExists',
    1008: 'lblConfirmationIdInvalid',
    1009: 'lblSocialAccountAlreadyRegistered',
    1010: 'lblItemDoesntExist',
    1011: 'lblLastSocialAccount',
    1012: 'lblEmailAlreadyUsed',
    1013: 'lblNewPasswordsDontMatch',
    1014: 'lblOldPasswordInvalid',
    1015: 'lblEmailDoesntExist',
    1016: 'lblMaximumNumberOfItemsError',
    1017: 'lblEmptyRequestBody',
    1018: 'lblInvalidContentType',
    1019: 'lblFileTypeNotSupported',
    1020: 'lblFileSizeTooLarge',
    1021: 'lblImageSizeError',
    1022: 'lblInvalidSpecifiedParameters',
    1023: 'lblCategoryNotAcceptingItems',
    1024: 'lblMessageSendingError',
    1025: 'lblExpiryDateTooHigh',
};
