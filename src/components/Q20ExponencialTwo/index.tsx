interface IQ20ExponencialTwoProps {
    value: number;
}

const Q20ExponencialTwo: React.FC<IQ20ExponencialTwoProps> = ({ value }) => (
    <span>{value ** 2}</span>
);
export default Q20ExponencialTwo;
