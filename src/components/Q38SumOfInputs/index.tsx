import { useState } from 'react';

const Q38SumOfInputs: React.FC = () => {
    const [numberOne, setNumberOne] = useState(0);
    const [numberTwo, setNumberTwo] = useState(0);
    const [sumOfInputs, setSumOfInputs] = useState(0);

    return (
        <div className="d-flex flex-column">
            <div className="d-inline-flex col-3 align-items-center mb-2">
                <input
                    className="form-control flex-grow-1"
                    type="number"
                    value={numberOne}
                    onChange={e => setNumberOne(parseInt(e.target.value, 10))}
                />
                <p className="m-0 mx-2">+</p>
                <input
                    className="form-control flex-grow-1"
                    type="number"
                    value={numberTwo}
                    onChange={e => setNumberTwo(parseInt(e.target.value, 10))}
                />
                <p className="m-0 mx-2">=</p>
                <input
                    type="submit"
                    value={sumOfInputs}
                    className="bg-transparent form-control flex-grow-1"
                />
            </div>
            <button
                className=" btn border btn-primary col-3"
                type="button"
                onClick={() => {
                    setSumOfInputs(numberOne + numberTwo);
                }}
            >
                Somar
            </button>
        </div>
    );
};
export default Q38SumOfInputs;
