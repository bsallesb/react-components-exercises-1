interface IQ11FindCharacterInAStringProps {
    value: string;
    character: string;
}

const Q11FindCharacterInAString: React.FC<IQ11FindCharacterInAStringProps> = ({
    value,
    character,
}) => <span>{value.indexOf(character) > -1 ? 'Sim' : 'Não'}</span>;

export default Q11FindCharacterInAString;
