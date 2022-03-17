interface IQ8RepitTextProps {
    text: string;
    factor: number;
}

const Q8RepitText: React.FC<IQ8RepitTextProps> = ({ text, factor }) => (
    <>{text.repeat(factor)}</>
);

export default Q8RepitText;
