import { useMemo } from 'react';

interface Q9RepeatTextSeparatedByCommaProps {
    text: string;
    factor: number;
}

const Q9RepeatTextSeparatedByComma: React.FC<
    Q9RepeatTextSeparatedByCommaProps
> = ({ text, factor }) => {
    const repeatText = useMemo(() => {
        const texts = [];
        for (let i = 0; i <= factor; i += 1) {
            texts.push(text);
        }
        return texts;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <div>{repeatText.join(', ')}</div>;
};

export default Q9RepeatTextSeparatedByComma;
