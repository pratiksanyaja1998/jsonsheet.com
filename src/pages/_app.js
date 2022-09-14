import '../sass/main.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import { Helmet } from 'react-helmet';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    const defaultUrl = 'https://jsonsheet.com/';

    const router = useRouter();
    const _pathSliceLength = Math.min.apply(Math, [
        router.asPath?.indexOf('?') > 0 ? router.asPath.indexOf('?') : router.asPath?.length,
        router.asPath?.indexOf('#') > 0 ? router.asPath.indexOf('#') : router.asPath?.length
    ]);
    const canonicalURL = defaultUrl + router.asPath.substring(1, _pathSliceLength);

    return (
        <>
            <Helmet>
                <link rel="canonical" href={canonicalURL} />
            </Helmet>
            <Component {...pageProps} />
            <ToastContainer />
        </>
    );
}
