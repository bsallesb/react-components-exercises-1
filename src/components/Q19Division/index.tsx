interface IQ19DivisionProps {
    quotient: number;
    dividend: number;
}

const Q19Division: React.FC<IQ19DivisionProps> = ({ quotient, dividend }) => {
    const division = quotient / dividend;
    if (dividend === 0) {
        return <span>Inválido</span>;
    }
    return <span>{division}</span>;
};
export default Q19Division;
