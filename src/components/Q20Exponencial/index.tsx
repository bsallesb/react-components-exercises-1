interface IQ20ExponencialProps {
    value: number;
}

const Q20Exponencial: React.FC<IQ20ExponencialProps> = ({ value }) => (
    <span>{value ** 2}</span>
);
export default Q20Exponencial;
