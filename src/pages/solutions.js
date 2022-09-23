import React, { useState } from 'react';
import { Icon, Layout } from '../components';
import _ from 'lodash';
import { sourcebitDataClient } from 'sourcebit-target-next';
import { FEATURE_LIST, FAQS_LIST,CARD } from '../../data';
import link from 'next/link';
import { useRouter } from 'next/router'

const Solutions = (props) => {
    const data = _.get(props, 'data');
    const config = _.get(data, 'config');
    const [showFaqAns, setShowFaqAns] = useState()
    const router = useRouter()

    return (
        <Layout
            page={{
                title: 'solutions',
                seo: {
                    title: 'Workflow Management & Solutions for Every Team - Json Sheet',
                    description: ' Customize your workflow, collaborate and achieve ambitious results. Get started for free. Smart Json Sheet',
                    extra: [
                        {
                            name: 'Keywords',
                            value: 'json sheet, google script json sheet, convert-excel-to-json sheet, json sheet js, google sheet to json, sheets json api, google sheet json api, json sheet builder,  json to sheet custom header, google sheet to json, json to google sheets'
                        }
                    ]
                },
                layout: 'page'
            }}
            config={config}
        >
            <div id="solutions">
                {/* header section */}
                <section>
                    <div className="heading-section">
                        <div className="section hero bg-none pt-6 container">
                            <div className="hero__content grid items-center heading">
                                <div className="hero__body my-2 cell-12 text-center">
                                    <h1 className="hero__title">Solutions to empower every team. Connect everything. Achieve anything. </h1>
                                    <p className="hero__subtitle">Customize the right workflow for your team and achieve success with a no-code database.</p>
                                    <button className="btn btn--primary" onClick={() => window.open('https://app.jsonsheet.com/#/')}>
                                        <span>Signup for free</span>
                                    </button>
                                    <h5>No credit card needed </h5>
                                </div>
                            </div>
                        </div>
                        <img src="images/Frame-2.png" />
                    </div>
                </section>

                {/* Regardless section */}
                <section>
                    <div className="Regardless-section">
                        <div className="container">
                            <div className="grid grid-gap-small my-2">
                                <div className="cell-12 cell-sm-12 cell-md-6 cell-lg-6 my-2">
                                    <h2>Depending on your workflow, you can build with it Json Sheet.</h2>
                                </div>
                                <div className="cell-12 cell-sm-12 cell-md-6 cell-lg-6 my-2 regardless-section-small-text ">
                                    <h5>Move work faster with a no-code app that perfectly matches your team's agility and scale.</h5>
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
                                    <div className="market-card-container card--highlight card item">
                                        <img src={item.img} className="solutions-card-img" />
                                        {/* <div style={{ height: '100%' }}> */}
                                        {/* <div className="icon-container">
                                            <Icon icon={'facebook'} />
                                        </div> */}
                                        <h3 className="card-title">{item.title}</h3>
                                        <button className="btn btn--primary" onClick={()=>{ router.push(item.link)}} >
                                            <Icon icon={'arrow-right'} />
                                            <span className={'order-first'} style={{ whiteSpace: 'normal' }}>
                                                {item.button}
                                            </span>
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
                    <div className="solutions-feature-section">
                        <div className="container py-4">
                            {FEATURE_LIST.map((item, i) => {
                                return (
                                    <div className="grid  grid-gap-small my-2 py-2" key={i}>
                                        <div className="cell-12 cell-sm-12 cell-md-7 cell-lg-6 my-2 px-sm-4 px-lg-1">
                                            <img src={item.img} style={{ objectFit: 'cover', aspectRatio: '3/2' }} />
                                        </div>
                                        <div
                                            className={
                                                item.position == 'right'
                                                    ? 'cell-12 cell-sm-12 cell-md-5 cell-lg-6 my-2 solutions-feature-text order-md-first'
                                                    : 'cell-12 cell-sm-12 cell-md-5 cell-lg-6 my-2 solutions-feature-text'
                                            }
                                        >
                                            <h2>{item.title}</h2>
                                            <p>{item.description}</p>
                                            <button className="btn btn--primary" onClick={()=>{ router.push(item.link)}}>
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
                                <h1 className="Sign-up-text">Start building in Json sheet today</h1>
                                <button className="btn btn--primary Sign-up-btn justify-md-center" onClick={() => window.open('https://app.jsonsheet.com/#/')}>
                                    <Icon icon={'arrow-right'} />
                                    <span className={'order-first'}>Signup for free</span>
                                </button>
                                <p className="mt-2 Sign-up-text">No credit card needed</p>
                            </div>
                            <div className="cell-12 cell-md-7 cell-lg-8 my-2 order-first ">
                                <img src="images/tab.png" className=" sign-up-section-img" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};
export async function getStaticProps({ params }) {
    const props = await sourcebitDataClient.getStaticPropsForPageAtPath('');
    return { props };
}
export default Solutions;
