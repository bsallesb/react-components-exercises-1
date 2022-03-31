import { useCallback, useState } from 'react';
import Api from '../../services/Api';

const Q50Coffee: React.FC = () => {
    const [coffee, setCoffee] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const getCoffee = useCallback(() => {
        Api.get('https://coffee.alexflipnote.dev/random.json')
            .then(response => setCoffee(response.data.file))
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <div className="d-flex col-6 justify-content-center flex-column">
            <button
                type="button"
                className="btn btn-primary mb-2"
                onClick={() => {
                    setIsLoading(true);
                    getCoffee();
                }}
            >
                Clique aqui
            </button>
            {isLoading ? (
                <div className="spinner-grow me-2" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : (
                <div>
                    <div style={{ backgroundImage: `url('${coffee}')` }} />
                </div>
            )}
        </div>
    );
};
export default Q50Coffee;
