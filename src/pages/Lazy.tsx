import { Head } from '../components/Head';
import { Title } from '../components/Title';

export const Lazy: React.FC = () => {
    return (
        <>
            <Head>
                <title>A Lazy-Loaded Page</title>
            </Head>
            <div>
                <Title>A Lazy Loaded Page</Title>
                <p>This page is lazy-loaded.</p>
            </div>
        </>
    );
};

export default Lazy;
