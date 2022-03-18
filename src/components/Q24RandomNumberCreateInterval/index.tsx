interface IQ24RandomNumberCreateIntervalProps {
    minValue: number;
    maxValue: number;
}

const Q24RandomNumberCreateInterval: React.FC<
    IQ24RandomNumberCreateIntervalProps
> = ({ minValue, maxValue }) => {
    const RandomNumber = Math.floor(
        Math.random() * (maxValue - minValue) + minValue
    );
    let Number;
    if (minValue > maxValue) {
        Number = 'Inválido';
    } else {
        Number = RandomNumber;
    }

    return <span>{Number}</span>;
};
export default Q24RandomNumberCreateInterval;
