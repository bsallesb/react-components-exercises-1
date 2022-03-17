interface IQ15CapitilizeEachWordProps {
    firstText: string;
}

const Q15CapitilizeEachWord: React.FC<IQ15CapitilizeEachWordProps> = ({
    firstText,
}) => {
    const splitWords = firstText.split('');
    for (let i = 0; i < splitWords.length; i + 1) {
        splitWords[i] =
            splitWords[i].toUpperCase() + splitWords[i].substring(1);
    }
    return <span> {splitWords.join('')} </span>;
};
export default Q15CapitilizeEachWord;
