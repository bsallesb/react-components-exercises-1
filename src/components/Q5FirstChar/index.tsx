interface IQ5FirstCharProps {
    value: string;
}

const Q5FirstChar: React.FC<IQ5FirstCharProps> = ({ value }) => (
    <>{value.charAt(0)}</>
);

export default Q5FirstChar;
