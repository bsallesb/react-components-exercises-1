interface IQ13ReplaceCharacterProps {
    text: string;
    search: string;
    replaceTo: string;
}

const Q13ReplaceCharacter: React.FC<IQ13ReplaceCharacterProps> = ({
    text,
    search,
    replaceTo,
}) => <span>{text.replaceAll(search, replaceTo)}</span>;

export default Q13ReplaceCharacter;
