import React from 'react';
import { Icon, Layout } from '../components';
import _ from 'lodash';
import { sourcebitDataClient } from 'sourcebit-target-next';
import { ORGANIZE_LIST, AUTOMATE_LIST, CREATE_LIST, COLLABORATE_LIST, CONSUME_LIST, SLICE_LIST } from '../../data';

const ACHIEVE = [
    { link: '#Organize', img: 'https://t3.ftcdn.net/jpg/02/99/38/16/240_F_299381681_JPM2NoyPKGhFIjitOIjwNt5rD3bb5FMF.jpg', title: 'Organize' },
    { link: '#Create', img: 'https://t3.ftcdn.net/jpg/04/75/10/56/240_F_475105646_Aows3hzhl0CbhQttq75opMz7vocbTNZY.jpg', title: 'Create' },
    { link: '#Automate', img: 'https://t3.ftcdn.net/jpg/01/37/22/46/240_F_137224603_ZjVKCAfTsNBGDEWcEngpUjIkaeVFq6oG.jpg', title: 'Automate' },
    { link: '#Collaborate', img: 'https://t4.ftcdn.net/jpg/02/94/56/59/240_F_294565901_EO6aaVd7KIpTvLrtWpD9R0L1PcDgvymz.jpg', title: 'Collaborate' },
    { link: '#Customize', img: 'https://t3.ftcdn.net/jpg/03/18/79/48/240_F_318794876_Wmnt0TkO7xxn9pp2ajZBhdrRLlIb7ekU.jpg', title: 'Customize' },
    { link: '#Consume', img: 'https://t4.ftcdn.net/jpg/02/95/20/73/240_F_295207347_cw4cuZwBBoWjrW8Qg218P70UyKG8chc4.jpg', title: 'Consume' }
];

const ProductCard = (props) => {
    return (
        <div className="product-card">
            <img src={props?.item?.img} className="product-card-img" />
            <h6 className="product-card-title">{props?.item?.title}</h6>
            <p className="product-card-text">{props?.item?.description}</p>
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
                    title: 'Product - Build a Better Way to Work - Json Sheet',
                    description:
                        'Json Sheet is a low-code platform for building collaborative applications. Customize your workflow, collaborate and achieve ambitious results. Get started for free.',
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
                    <button className="btn btn--primary started-btn" onClick={() => window.open('https://app.jsonsheet.com/#/')}>
                        Get Started
                    </button>
                    <img src="images/Json-sheet.gif" className="video" />
                </section>

                {/* overview image */}
                <section className="container">
                    <img src="images/overview.png" className="img-overview" />
                </section>

                {/* Achieve anything section*/}
                <section className="container">
                    <div>
                        <h1>Achieve anything</h1>
                        <div className="Achieve grid grid-gap-small my-2">
                            {ACHIEVE.map((item, i) => {
                                return (
                                    <a className="Achieve-card cell-12 cell-sm-4 cell-md-3 cell-lg-2 my-2" href={item.link} key={i}>
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
                    <span className={'order-first'}>{'ONLINE DATABASE'}</span>
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

            {/* explore automat-ions section */}
            <section>
                <div className="online-database">
                    <h1 className="online-database-title">Automate like never before</h1>
                    <p className="online-database-subtitle">No more manually updating your Json Sheet spreadsheets. Leave routine work to robots.</p>
                    <button className="btn btn--primary online-database-btn ">
                        <Icon icon={'arrow-right'} />
                        <span className={'order-first'}>{'EXPLORE AUTOMATION'}</span>
                    </button>
                </div>
            </section>

            {/* Automate card section */}
            <section id="Automate" className="container grid grid-gap-small my-2">
                {AUTOMATE_LIST.map((item, i) => {
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
                    <h1 className="online-database-title">Slice, Formulas, & Share</h1>
                    <p className="online-database-subtitle">No more writing long queries. Filter, Sort, Search, Color, Share.</p>
                </div>
            </section>

            {/* Customize card section */}
            <section id="Automate" className="container grid grid-gap-small my-2">
                {SLICE_LIST.map((item, i) => {
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
                    <h1 className="online-database-title">Work from Json sheet</h1>
                    <p className="online-database-subtitle">Use it on web, mobile or even desktop.</p>
                </div>
            </section>

            {/* Consume card section */}
            <section id="Consume" className="container grid grid-gap-small my-2">
                {CONSUME_LIST.map((item, i) => {
                    return (
                        <div className="Consume-card cell-12 cell-sm-6 cell-md-6 cell-lg-4 my-3" key={i}>
                            <img src={item.img} className="consume-card-img" />
                            <h3 className="consume-card-title">{item.title}</h3>
                            <button
                                className="btn btn--primary consume-card-btn"
                                onClick={() => {
                                    window.open(item.url, '_blank');
                                }}
                            >
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
