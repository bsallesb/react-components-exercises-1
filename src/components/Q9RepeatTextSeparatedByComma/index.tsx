import { useMemo } from 'react';

interface Q9RepeatTextSeparatedByCommaProps {
    text: string;
    factor: number;
}

const Q9RepeatTextSeparatedByComma: React.FC<
    Q9RepeatTextSeparatedByCommaProps
> = ({ text, factor }) => {
    const texts = [];
    const repeatText = useMemo(() => {
        for (let i = 0; i <= factor; i += 1) {
            texts.push(text);
        }
    }, []);

    return <div>({repeatText})</div>;
};

export default Q9RepeatTextSeparatedByComma;
