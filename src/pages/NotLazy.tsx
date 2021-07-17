import { Head } from '../components/Head';
import { Title } from '../components/Title';

export const NotLazy: React.FC = () => {
    return (
        <>
            <Head>
                <title>An Eager-Loaded Page</title>
            </Head>
            <div>
                <Title>An Eager Loaded Page</Title>
                <p>
                    This page is <b>NOT</b> lazy-loaded.
                </p>
            </div>
        </>
    );
};

export default NotLazy;
