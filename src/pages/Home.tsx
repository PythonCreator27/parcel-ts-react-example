import { Head } from '../components/Head';
import { Title } from '../components/Title';

export const Home: React.FC = () => {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <div>
                <Title>Home</Title>
                <p>The home page...</p>
            </div>
        </>
    );
};

export default Home;
