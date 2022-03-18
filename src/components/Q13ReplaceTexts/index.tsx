interface IQ13ReplaceTextsProps {
    text: string;
    search: string;
    replaceTo: string;
}

const Q13ReplaceTexts: React.FC<IQ13ReplaceTextsProps> = ({
    text,
    search,
    replaceTo,
}) => <span>{text.replaceAll(search, replaceTo)}</span>;

export default Q13ReplaceTexts;
