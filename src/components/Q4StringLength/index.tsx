interface IQ4StringLengthProps {
    value: string;
}

const Q4StringLength: React.FC<IQ4StringLengthProps> = ({ value }) => (
    <span>{value.length}</span>
);

export default Q4StringLength;
