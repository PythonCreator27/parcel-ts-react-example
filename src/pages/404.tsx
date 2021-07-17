import { Head } from '../components/Head';
import { Title } from '../components/Title';

export const NotFound: React.FC = () => {
    return (
        <>
            <Head>
                <title>404 Not Found</title>
            </Head>

            <div className="flex flex-col items-center justify-center text-center h-screen">
                <Title>404 Not Found</Title>
            </div>
        </>
    );
};

export default NotFound;
