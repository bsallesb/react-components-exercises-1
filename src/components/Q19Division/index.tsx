interface IQ19DivisionProps {
    quotient: number;
    dividend: number;
}

const Q19Division: React.FC<IQ19DivisionProps> = ({ quotient, dividend }) => {
    if (quotient === 0) {
        return <span>Inválido</span>;
    }
    return <span>{dividend / quotient}</span>;
};
export default Q19Division;
