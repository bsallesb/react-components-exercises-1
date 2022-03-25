import { useCallback, useMemo, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { ImLocation2 } from 'react-icons/im';

interface IAnyReactComponentProps {
    lat: number;
    lng: number;
}

const Q41Map: React.FC = () => {
    const [numberOfLat, setNumberOfLat] = useState(0);
    const [numberOfLng, setNumberOfLng] = useState(0);
    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);

    const findLocation = useCallback(() => {
        setLat(numberOfLat);
        setLng(numberOfLng);
    }, [numberOfLat, numberOfLng]);

    const AnyReactComponent: React.FC<IAnyReactComponentProps> = useCallback(
        () => (
            <div style={{ transform: 'translateY(-20px)' }}>
                <ImLocation2 color="red" className="fs-2" />
            </div>
        ),
        []
    );

    const defaultProps = useMemo(
        () => ({
            center: {
                lat,
                lng,
            },
            zoom: 1,
        }),
        [lat, lng]
    );

    return (
        <div>
            <div className="d-flex col-4 mb-2 align-items-center">
                <p className="m-0 me-2">LAT:</p>
                <input
                    value={numberOfLat}
                    type="number"
                    className="form-control me-2"
                    onChange={e => setNumberOfLat(parseInt(e.target.value, 10))}
                />
                <p className="m-0 me-2">LNG:</p>
                <input
                    value={numberOfLng}
                    type="number"
                    className="form-control"
                    onChange={e => setNumberOfLng(parseInt(e.target.value, 10))}
                />
            </div>
            <div className="d-flex col-4 mb-2">
                <button
                    type="button"
                    className="btn btn-primary flex-grow-1"
                    onClick={() => findLocation()}
                >
                    Buscar
                </button>
            </div>
            <div className="d-flex col-4">
                <div style={{ height: '40vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{
                            key: 'AIzaSyDlLktdmmvSw3CLwdXVdTSV5cenoBMzu50',
                        }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    >
                        <AnyReactComponent lat={lat} lng={lng} />
                    </GoogleMapReact>
                </div>
            </div>
        </div>
    );
};

export default Q41Map;
