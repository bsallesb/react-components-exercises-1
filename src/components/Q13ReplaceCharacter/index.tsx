interface IQ13ReplaceCharacterProps {
    text: string;
    character: string;
    replaceTo: string;
}

const Q13ReplaceCharacter: React.FC<IQ13ReplaceCharacterProps> = ({
    text,
    character,
    replaceTo,
}) => <span>{text.replaceAll(character, replaceTo)}</span>;

export default Q13ReplaceCharacter;
