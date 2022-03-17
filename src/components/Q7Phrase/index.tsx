interface IQ7PhraseProps {
    firstValue: string;
    secondValue: string;
}

const Q7Phrase: React.FC<IQ7PhraseProps> = ({ firstValue, secondValue }) => (
    <span>
        {firstValue} {secondValue}
    </span>
);

export default Q7Phrase;
