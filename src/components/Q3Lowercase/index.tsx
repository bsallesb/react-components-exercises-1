interface IQ3LowercaseProps {
    value: string;
}

const Q3Lowercase: React.FC<IQ3LowercaseProps> = ({ value }) => (
    <>{value.toLocaleLowerCase()}</>
);

export default Q3Lowercase;
