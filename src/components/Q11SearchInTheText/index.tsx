interface IQ11SearchInTheTextProps {
    value: string;
    search: string;
}

const Q11SearchInTheText: React.FC<IQ11SearchInTheTextProps> = ({
    value,
    search,
}) => <span>{value.indexOf(search) > -1 ? 'Sim' : 'Não'}</span>;

export default Q11SearchInTheText;
