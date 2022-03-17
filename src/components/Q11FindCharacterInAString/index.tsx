interface IQ11FindCharacterInAStringProps {
    value: string;
    search: string;
}

const Q11FindCharacterInAString: React.FC<IQ11FindCharacterInAStringProps> = ({
    value,
    search,
}) => <span>{value.indexOf(search) > -1 ? 'Sim' : 'Não'}</span>;

export default Q11FindCharacterInAString;
