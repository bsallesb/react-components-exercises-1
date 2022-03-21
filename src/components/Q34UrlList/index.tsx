import { UrlListType } from '../../@types/UrlList';

interface IQ34UrlListProps {
    list: UrlListType[];
}

const Q34UrlList: React.FC<IQ34UrlListProps> = ({ list }) => (
    <div>
        {list.map(item => (
            <div>
                <a href={item.url} target="_blank" rel="noreferrer">
                    {item.label}
                </a>
            </div>
        ))}
    </div>
);
export default Q34UrlList;
