interface IQ19DivisionProps {
    divider: number;
    dividend: number;
}

const Q19Division: React.FC<IQ19DivisionProps> = ({ divider, dividend }) => {
    if (divider === 0) {
        return <span>Inválido</span>;
    }
    return <span>{dividend / divider}</span>;
};
export default Q19Division;
