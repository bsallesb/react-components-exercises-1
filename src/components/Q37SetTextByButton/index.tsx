import { useState } from 'react';

const Q37SetTextByButton: React.FC = () => {
    const [inputText, setInputText] = useState('');
    const [text, setText] = useState('');

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={inputText}
                    onChange={e => setInputText(e.target.value)}
                />
                <button type="button" onClick={() => setText(inputText)}>
                    Gravar
                </button>
            </div>
            <div>{text}</div>
        </div>
    );
    console.log(text);
};
export default Q37SetTextByButton;
