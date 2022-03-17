interface IQ12DiscoverLetterProps {
    value: string;
    position: number;
}

const Q12DiscoverLetter: React.FC<IQ12DiscoverLetterProps> = ({
    value,
    position,
}) => (
    <span>{position < value.length ? value.charAt(position) : 'Inválido'}</span>
);

export default Q12DiscoverLetter;
