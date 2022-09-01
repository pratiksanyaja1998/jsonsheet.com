import React from 'react';
import { Icon, Layout } from '../components';
import _ from 'lodash';
import { sourcebitDataClient } from 'sourcebit-target-next';
import { ORGANIZE_LIST, VIEW_LIST, CREATE_LIST, COLLABORATE_LIST, CONSUME_LIST } from '../../data';

const ACHIEVE = [
    { link: '#Organize', img: 'https://stackby.com/assets/product-overview/img/8808e5a01ddb2810d3c4f2a7b76d7d68.png', title: 'Organize' },
    { link: '#Create', img: 'https://stackby.com/assets/product-overview/img/b5666880151b057406db2b21055ea4b8.png', title: 'Create' },
    { link: '#Automate', img: 'https://stackby.com/assets/product-overview/img/e2a8b113955902819cd6a98041162ed3.png', title: 'Automate' },
    { link: '#Collaborate', img: 'https://stackby.com/assets/product-overview/img/d6b1b2b64592e2b9cc94b367a05bc972.png', title: 'Collaborate' },
    { link: '#Customize', img: 'https://stackby.com/assets/product-overview/img/c7438284e00b4da59382cfedb7434d9a.png', title: 'Customize' },
    { link: '#Consume', img: 'https://stackby.com/assets/product-overview/img/cedc1932b2bf9ac44bf66bedb4b55387.png', title: 'Consume' }
];

const ProductCard = (props) => {
    return (
        <div className="card">
            <img src={props?.item?.img} className="card-img" />
            <h6 className="card-title">{props?.item?.title}</h6>
            <p className="card-text">{props?.item?.description}</p>
        </div>
    );
};

const product = (props) => {
    const data = _.get(props, 'data');
    const config = _.get(data, 'config');
    return (
        <Layout
            page={{
                title: 'Product',
                seo: {
                    title: 'Product',
                    description: 'Product page'
                },
                layout: 'page'
            }}
            config={config}
        >
            <div id="product">
                <section className="container">
                    <div className="heading">
                        <h2 className="title-text">Build a better way to work your modern management platform</h2>
                        <p className="subtitle-text">
                            Json Sheet intuitive yet powerful platform gives everyone the flexibility to build their own solutions and speed up workflow.
                        </p>
                    </div>
                </section>
                {/* get started and video */}
                <section className="container">
                    <input placeholder="Enter your email" className="input-email" />
                    <button className="btn btn--primary started-btn">Get Started</button>
                    <video
                        className="video"
                        preload="none"
                        loop
                        muted
                        data-autoplay="on"
                        src="https://www.brizy.cloud/customfile/9bba6170dadd858b9c7a172ed5b3b648.mp4"
                        autoplay="true"
                    ></video>
                </section>

                {/* overview image */}
                <section className="container">
                    <img src="https://stackby.com/assets/product-overview/img/209af8b0ee951a5ef2e6ec1d3e48e8ab.png" className="img-overview" />
                </section>

                {/* Achieve anything section*/}
                <section className="container">
                    <div>
                        <h1>Achieve anything</h1>
                        <div className="Achieve grid grid-gap-small my-2">
                            {ACHIEVE.map((item) => {
                                return (
                                    <a className="Achieve-card cell-12 cell-sm-4 cell-md-3 cell-lg-2 my-2" href={item.link}>
                                        <img src={item.img} className="Achieve-card-img" />
                                        <h4 className="Achieve-card-text">{item.title}</h4>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </div>
            <div className="online-database">
                <h1 className="online-database-title">The fastest way to organize any json data</h1>
                <p className="online-database-subtitle">It's more than a spreadsheet, it's a relational database at your fingertips.</p>
                <button className="btn btn--primary online-database-btn ">
                    <Icon icon={'arrow-right'} />
                    <span className={'order-first'}>{'ONLINE DATBASE'}</span>
                </button>
            </div>

            {/* Organize section*/}
            <section id="Organize" className="container grid grid-gap-small my-2">
                {ORGANIZE_LIST.map((item, i) => {
                    return (
                        <div className="cell-12 cell-sm-6 cell-md-6 cell-lg-4 my-2" key={i}>
                            <ProductCard item={item} />
                        </div>
                    );
                })}
            </section>

            {/* Create section */}
            <section>
                <div className="online-database">
                    <h1 className="online-database-title">Create, the way you want</h1>
                    <p className="online-database-subtitle">All the unique column types, that makes it so powerful. </p>
                </div>
            </section>

            {/* Create card section */}
            <section id="Create" className="container grid grid-gap-small my-2">
                {CREATE_LIST.map((item, i) => {
                    return (
                        <div className="cell-12 cell-sm-6 cell-md-6 cell-lg-4 my-2" key={i}>
                            <ProductCard item={item} />
                        </div>
                    );
                })}
            </section>

            {/* explore automations section */}
            <section>
                <div className="online-database">
                    <h1 className="online-database-title">Automate like never before</h1>
                    <p className="online-database-subtitle">
                        No more manually updating your spreadsheets. Connect to popular services (marketing, sales etc.) and automate your columns in real-time.{' '}
                    </p>
                    <button className="btn btn--primary online-database-btn ">
                        <Icon icon={'arrow-right'} />
                        <span className={'order-first'}>{'EXPLORE AUTOMATIONS'}</span>
                    </button>
                </div>
            </section>

            {/* Automate card section */}
            <section id="Automate" className="container grid grid-gap-small my-2">
                {VIEW_LIST.map((item, i) => {
                    return (
                        <div className="cell-12 cell-sm-6 cell-md-6 cell-lg-4 my-2" key={i}>
                            <ProductCard item={item} />
                        </div>
                    );
                })}
            </section>
            {/* explore Customize section */}
            <section>
                <div className="online-database">
                    <h1 className="online-database-title">Slice, Dice & Share</h1>
                    <p className="online-database-subtitle">No more writing long queries. Filter, Sort, Search, Color - all in a snap.</p>
                </div>
            </section>

            {/* Customize card section */}
            <section id="Automate" className="container grid grid-gap-small my-2">
                {VIEW_LIST.map((item, i) => {
                    return (
                        <div className="cell-12 cell-sm-6 cell-md-6 cell-lg-4 my-2" key={i}>
                            <ProductCard item={item} />
                        </div>
                    );
                })}
            </section>

            {/* explore Collaborate section */}
            <section>
                <div className="online-database">
                    <h1 className="online-database-title">Collaborate with your team, from anywhere</h1>
                    <p className="online-database-subtitle">Work with your team in real-time, from anywhere you want.</p>
                </div>
            </section>

            {/* Collaborate card section */}
            <section id="Collaborate" className="container grid grid-gap-small my-2">
                {COLLABORATE_LIST.map((item, i) => {
                    return (
                        <div className="cell-12 cell-sm-6 cell-md-6 cell-lg-4 my-2" key={i}>
                            <ProductCard item={item} />
                        </div>
                    );
                })}
            </section>
            {/* explore Consume section */}
            <section>
                <div className="online-database">
                    <h1 className="online-database-title">Work from anywhere</h1>
                    <p className="online-database-subtitle">Use it on the Web, Mobile or even on Desktop. Heck, there's even a Chrome Extension!</p>
                </div>
            </section>

            {/* Consume card section */}
            <section id="Consume" className="container grid grid-gap-small my-2">
                {CONSUME_LIST.map((item, i) => {
                    return (
                        <div className="Consume-card cell-12 cell-sm-6 cell-md-6 cell-lg-4 my-3" key={i}>
                            <img src={item.img} className="consume-card-img" />
                            <h3 className="consume-card-title">{item.title}</h3>
                            <button className="btn btn--primary consume-card-btn">
                                <Icon icon={'arrow-right'} />
                                <span className={'order-first'}>{item.btn}</span>
                            </button>
                        </div>
                    );
                })}
            </section>
        </Layout>
    );
};
export async function getStaticProps({ params }) {
    // console.log('Page [...slug].js getStaticProps, params: ', params);
    // const pagePath = '/' + (params.slug ? params.slug.join('/') : '');
    const props = await sourcebitDataClient.getStaticPropsForPageAtPath('');
    return { props };
}
export default product;
