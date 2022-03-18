interface IQ19DivisionProps {
    quotient: number;
    dividend: number;
}

const Q19Division: React.FC<IQ19DivisionProps> = ({ quotient, dividend }) => {
    const division = quotient / dividend;
    let result;
    if (dividend === 0) {
        result = <span>Inválido</span>;
    } else {
        result = division;
    }

    return <span>{result}</span>;
};
export default Q19Division;
