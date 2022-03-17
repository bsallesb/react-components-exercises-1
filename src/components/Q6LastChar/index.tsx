interface IQ6LastCharProps {
    value: string;
}

const Q6LastChar: React.FC<IQ6LastCharProps> = ({ value }) => (
    <span>{value.charAt(value.length - 1)}</span>
);

export default Q6LastChar;
