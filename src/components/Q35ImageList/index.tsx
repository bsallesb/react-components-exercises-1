import { ImageListType } from '../../@types/ImageList';

interface IQ35ImageListProps {
    list: ImageListType[];
    size: string;
}

const Q35ImageList: React.FC<IQ35ImageListProps> = ({ list, size }) => (
    <div>
        {list.map(item => (
            <div
                style={{
                    width: size,
                    height: size,
                    paddingTop: size,
                    backgroundImage: `url(${item.url})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                }}
                className="d-inline-flex me-2"
            />
        ))}
    </div>
);
export default Q35ImageList;
