interface IQ10LargerStringProps {
    firstText: string;
    secondText: string;
}

const Q10LargerString: React.FC<IQ10LargerStringProps> = ({
    firstText,
    secondText,
}) => <span>{firstText > secondText ? firstText : secondText}</span>;
export default Q10LargerString;
