import { useState } from 'react';

const Q43OneMore: React.FC = () => {
    const [number, setNumber] = useState(0);

    return (
        <div>
            <span className="me-4">{number}</span>
            <button
                className="btn btn-primary"
                type="button"
                onClick={() => setNumber(number + 1)}
            >
                + 1
            </button>
        </div>
    );
};
export default Q43OneMore;
