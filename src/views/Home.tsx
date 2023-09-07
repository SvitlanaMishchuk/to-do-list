import { Content } from '../components/Content';
import { Header } from '../components/Header';

export const Home: React.FC = () => {
    return (
        <div className='h-screen bg-spring-wood'>
            <Header />
            <Content />
        </div>
    );
};
