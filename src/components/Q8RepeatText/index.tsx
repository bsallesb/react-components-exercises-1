interface IQ8RepeatTextProps {
    text: string;
    factor: number;
}

const Q8RepeatText: React.FC<IQ8RepeatTextProps> = ({ text, factor }) => (
    <>{text.repeat(factor)}</>
);

export default Q8RepeatText;
