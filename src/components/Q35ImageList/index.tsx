import { ImageListType } from '../../@types/ImageList';

interface IQ35ImageListProps {
    images: ImageListType[];
    size: string;
}

const Q35ImageList: React.FC<IQ35ImageListProps> = ({ images, size }) => (
    <div>
        {images.map(image => (
            <div
                style={{
                    width: size,
                    height: size,
                    backgroundImage: `url(${image.url})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                }}
                className="d-inline-flex me-2"
            />
        ))}
    </div>
);
export default Q35ImageList;
