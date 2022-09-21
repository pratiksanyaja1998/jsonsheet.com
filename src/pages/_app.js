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
                <link href={canonicalURL} rel="alternate" hreflang="x-default" />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@jsonsheet.com" />
                <meta name="twitter:title" content="Json Sheet | A new collaborative canvas to manage and automate work." />
                <meta
                    name="twitter:description"
                    content="Json Sheet brings together best of spreadsheets, databases and business in a single platform for you to create your own tools, your way."
                />
                <meta name="twitter:image" content="https://jsonsheet.com/images/icon-square.png" />
                {/* <!-- <meta property="twitter:account_id" content=""/> --> */}

                <meta property="og:title" content="Json Sheet || A new collaborative canvas to manage and automate work." />
                <meta
                    property="og:description"
                    content="Json Sheet |brings together best of spreadsheets, databases and business in a single platform for you to create your own tools, your way."
                />
                <meta property="og:url" content="https://jsonsheet.com/" />
                <meta property="og:site_name" content="jsonsheet.com" />
                <meta property="og:image" content="https://jsonsheet.com/images/icon-square.png" />
                <meta property="og:type" content="website" />
            </Helmet>
            <Component {...pageProps} />
            <ToastContainer />
        </>
    );
}
