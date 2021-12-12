const renderTitle = (title: string) => (
    <span className="autocomplete__dropdown-title">
      {title}
    </span>
  );

interface IRenderItemProps {
    value: string;
    title: string;
    info?: string;
    index: string;
}
const renderItem = ({title, value, info, index}: IRenderItemProps) => ({
    value,
    label: (
      <div key={index} className="autocomplete__dropdown-item">
        {title}
        {info}
      </div>
    ),
});

export { renderItem, renderTitle };