interface IQ21ExponencialProps {
    exponent: number;
    base: number;
}

const Q21Exponencial: React.FC<IQ21ExponencialProps> = ({ exponent, base }) => (
    <span>{base ** exponent}</span>
);
export default Q21Exponencial;
