import React, { useState } from 'react';
import { Icon, Layout } from '../components';
import _ from 'lodash';
import { sourcebitDataClient } from 'sourcebit-target-next';
import { FEATURE_LIST, FAQS_LIST } from '../../data';

const CARD = [
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY6M7apTz-sOWTP_MyMaA1jAodsPnAcQ_S24uFESAiFE_hjs5iYgye_qpTTW8KazK2YVg&usqp=CAU',
        title: 'Solutions for Marketing teams',
        button: 'Explore Marketing'
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY6M7apTz-sOWTP_MyMaA1jAodsPnAcQ_S24uFESAiFE_hjs5iYgye_qpTTW8KazK2YVg&usqp=CAU',
        title: 'Solutions for HR teams',
        button: 'Explore HR'
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY6M7apTz-sOWTP_MyMaA1jAodsPnAcQ_S24uFESAiFE_hjs5iYgye_qpTTW8KazK2YVg&usqp=CAU',
        title: 'Solutions for Operations Teams',
        button: 'Explore Operations'
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY6M7apTz-sOWTP_MyMaA1jAodsPnAcQ_S24uFESAiFE_hjs5iYgye_qpTTW8KazK2YVg&usqp=CAU',
        title: 'Solutions for Product teams ',
        button: 'Explore Product'
    }
];
const Solutions = (props) => {
    const data = _.get(props, 'data');
    const config = _.get(data, 'config');

    const [showFaqAns, setShowFaqAns] = useState();
    return (
        <Layout
            page={{
                title: 'solutions',
                seo: {
                    title: 'solutions',
                    description: 'solutions page'
                },
                layout: 'page'
            }}
            config={config}
        >
            <div id="solutions">
                {/* header section */}
                <section>
                    <div className="heading-section">
                        <div className="section hero bg-none pt-6">
                            <div className="hero__content grid items-center heading">
                                <div className="hero__body my-2 cell-12 text-center">
                                    <h1 className="hero__title">Flexible no-code solutions to empower every team</h1>
                                    <p className="hero__subtitle">Customize right workflows for your team and achieve success with no-code databases.</p>
                                    <button className="btn btn--primary">
                                        <span> Sign up for free </span>
                                    </button>
                                    <h5>No credit card needed </h5>
                                </div>
                            </div>
                        </div>
                        <img src="https://stackby.com/assets/solutions/img/a8b6595d60356f367a46b358053ed6ca.png" />
                    </div>
                </section>

                {/* Regardless section */}
                <section>
                    <div className="Regardless-section">
                        <div className="container">
                            <div className="grid grid-gap-small my-2">
                                <div className="cell-12 cell-sm-12 cell-md-6 cell-lg-6 my-2">
                                    <h2>Regardless of your workflow, you can build it with Stackby</h2>
                                </div>
                                <div className="cell-12 cell-sm-12 cell-md-6 cell-lg-6 my-2">
                                    <h5>Build better solutions for your business or teams and achieve success with no-code.</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*solution market section */}
                <section className="container">
                    <div className="grid grid-gap-small my-2 py-2">
                        {CARD.map((item, i) => {
                            return (
                                <div className="cell-12 cell-sm-12 cell-md-6 cell-lg-3 my-2" key={i}>
                                    <div className="market-card-container">
                                        {/* <img src={item.img} className="solutions-card-img" /> */}
                                        {/* <div style={{ height: '100%' }}> */}
                                        <div className="icon-container">
                                            <Icon icon={'facebook'} />
                                        </div>
                                        <h3 className="card-title">{item.title}</h3>
                                        <button className="btn btn--primary">
                                            <Icon icon={'arrow-right'} />
                                            <span className={'order-first'}>{item.button}</span>
                                        </button>
                                        {/* </div> */}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* feature section */}
                <section>
                    <div className="solutions-fichar-section">
                        <div className="container py-4">
                            {FEATURE_LIST.map((item, i) => {
                                return (
                                    <div className="grid  grid-gap-small my-2 py-2" key={i}>
                                        <div className="cell-12 cell-sm-12 cell-md-7 cell-lg-6 my-2 px-sm-4 px-lg-1">
                                            <img src={item.img} />
                                        </div>
                                        <div
                                            className={
                                                item.position == 'right'
                                                    ? 'cell-12 cell-sm-12 cell-md-5 cell-lg-6 my-2 solutions-fichar-text order-md-first'
                                                    : 'cell-12 cell-sm-12 cell-md-5 cell-lg-6 my-2 solutions-fichar-text'
                                            }
                                        >
                                            <h2>{item.title}</h2>
                                            <p>{item.description}</p>
                                            <button className="btn btn--primary">
                                                <Icon icon={'arrow-right'} />
                                                <span className={'order-first'}>{item.btn}</span>
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
                {/*FAQs section */}
                <section className="faq-section">
                    <div className="container py-4 faq-container">
                        <h1>Solution FAQs</h1>

                        {FAQS_LIST.map((item, i) => {
                            return (
                                <div className="faq-data" key={i} onClick={() => setShowFaqAns(i)}>
                                    <h4 className="m-0">{item.que}</h4>
                                    <p className={showFaqAns == i ? 'm-0 pt-1 px-2 desc' : 'm-0 pt-1 px-2 desc hide'}>{item.ans}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>
                {/* Sign-up section */}
                <section className="sign-up-section pb-5">
                    <div className="container">
                        <div className="grid grid-gap-small my-2">
                            <div className="cell-12 cell-md-5 cell-lg-4 my-2 order-md-first sign-up-section-text">
                                <h1 className="Sign-up-text">Start building in Jsonsheet today</h1>
                                <button className="btn btn--primary Sign-up-btn justify-md-center">
                                    <Icon icon={'arrow-right'} />
                                    <span className={'order-first'}>Sign up for free</span>
                                </button>
                                <p className="mt-2 Sign-up-text">No credit card needed</p>
                            </div>
                            <div className="cell-12 cell-md-7 cell-lg-8 my-2 order-first">
                                <img src="https://stackby.com/assets/solutions/img/6ed384ab8f6c34c5959508addd744f79.png" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};
export async function getStaticProps({ params }) {
    // console.log('Page [...slug].js getStaticProps, params: ', params);
    // const pagePath = '/' + (params.slug ? params.slug.join('/') : '');
    const props = await sourcebitDataClient.getStaticPropsForPageAtPath('');
    return { props };
}
export default Solutions;
