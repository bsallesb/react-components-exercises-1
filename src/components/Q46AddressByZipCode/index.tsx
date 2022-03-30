import { useCallback, useMemo, useState } from 'react';
import InputMask from 'react-input-mask';

import { ZipCodeType } from '../../@types/ZipCode';
import Api from '../../services/Api';

const Q46AddressByZipCode: React.FC = () => {
    const [zipCode, setZipCode] = useState('');
    const [address, setAddress] = useState<ZipCodeType | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const loading = useMemo(
        () => (
            <div className="d-flex mt-2">
                <div className="spinner-grow me-2" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow me-2" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        ),
        []
    );

    const getAddress = useCallback(() => {
        const cleanZipCode = zipCode.replace('-', '');

        if (cleanZipCode.length > 0) {
            Api.get(`https://viacep.com.br/ws/${cleanZipCode}/json/`)
                .then(response => setAddress(response.data ?? null))
                .catch()
                .finally(() => setIsLoading(false));
        }
    }, [zipCode]);

    return (
        <div>
            <div className="d-flex col-6 align-items-center mb-2">
                <p className="m-0 me-2">CEP:</p>
                <InputMask
                    mask="99999-999"
                    type="text"
                    placeholder="exemplo: 37400-000"
                    value={zipCode}
                    onChange={e => setZipCode(e.target.value)}
                    className="form-control me-2"
                />
                <button
                    type="button"
                    className="w-50 btn btn-primary"
                    onClick={() => {
                        setIsLoading(true);
                        getAddress();
                    }}
                >
                    Buscar endereço
                </button>
            </div>
            <div>
                {isLoading ? (
                    loading
                ) : (
                    <div className="d-flex flex-column">
                        {address?.logradouro && (
                            <span>Endereço: {address?.logradouro}</span>
                        )}
                        {address?.bairro && (
                            <span>Bairro: {address?.bairro}</span>
                        )}
                        {address?.complemento && (
                            <span>Complemento: {address?.complemento}</span>
                        )}
                        {address?.cep && <span>CEP: {address?.cep}</span>}
                        {address?.localidade && (
                            <span>
                                Cidade: {address?.localidade} - {address?.uf}
                            </span>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
export default Q46AddressByZipCode;
