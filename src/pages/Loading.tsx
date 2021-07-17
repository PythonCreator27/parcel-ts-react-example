import { Head } from '../components/Head';
import { Title } from '../components/Title';

export const Loading: React.FC = () => {
    return (
        <>
            <Head>
                <title>Loading...</title>
            </Head>

            <div className="flex flex-col items-center justify-center">
                <Title>Loading...</Title>
            </div>
        </>
    );
};

export default Loading;
