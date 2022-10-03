// product-teams
import React from 'react';
import { Layout, Icon, SolutionAbilityItem, SolutionTemplateCard, SolutionSignupSection, SolutionContactUsSection } from '../components';
import _ from 'lodash';
import { sourcebitDataClient } from 'sourcebit-target-next';
import { PRODUCT_TEAMS_TEMPLATES_LIST, PRODUCT_TEAMS_FEATURE_LIST, SOLUTION_ABILITIES_LIST } from '../../data';

const marketing = (props) => {
    const data = _.get(props, 'data');
    const config = _.get(data, 'config');

    return (
        <Layout
            page={{
                title: 'solutions',
                seo: {
                    title: 'Product Operations & Product Team Solution - Json Sheet',
                    description: ' Run your business profitably and enable every department to do their jobs efficiently with Json Sheet Product solutions.',
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
            <div id="productTeams" className='solution-category'>
                {/* header section */}

                <div className="header-section">
                    <div className="container">
                        <div className="grid grid-gap-large py-5">
                            <div className="cell-12 cell-sm-12 cell-md-6 cell-lg-5 my-2 header-text">
                                <h2 className="hero__title">Let's make it easier to build a product With Json Sheet Smart Spreadsheet</h2>
                                <p>Run your business profitably and enable every department to do their jobs efficiently with Json Sheet Product solutions.</p>
                                <div className="hero__body">
                                    <button className="btn btn--primary" onClick={() => window.open('https://app.jsonsheet.com/#/')}>
                                        <span>Signup for free</span>
                                    </button>
                                </div>
                            </div>
                            <div className="cell-12 cell-sm-12 cell-md-6 cell-lg-7 my-2 regardless-section-small-text ">
                                <img src="images/page/product-teams.png" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* feature section */}
                <div>
                    <div className="container py-4">
                        {PRODUCT_TEAMS_FEATURE_LIST.map((item, i) => {
                            return (
                                <div className="grid  grid-gap-small my-2 py-2" key={i}>
                                    <div className="cell-12 cell-sm-12 cell-md-6 cell-lg-6 my-2 px-sm-4 px-lg-1">
                                        <img src={item.img} style={{ objectFit: 'cover', aspectRatio: '3/2' }} />
                                    </div>
                                    <div
                                        className={
                                            item.position == 'right'
                                                ? 'cell-12 cell-sm-12 cell-md-6 cell-lg-6 my-2  order-md-first'
                                                : 'cell-12 cell-sm-12 cell-md-6 cell-lg-6 my-2'
                                        }
                                    >
                                        <h2 className="pt-5">{item.title}</h2>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* contact us section*/}
                <SolutionContactUsSection title={'Solutions for product teams pointing in the right direction.Head over to your boards and start getting things done!'}/>
                {/* abilities section */}
                <section className="abilities-section py-5">
                    <div className="text-center">
                        <h3>Abilities</h3>
                    </div>
                    <div className="container grid grid-gap-small my-2">
                        {SOLUTION_ABILITIES_LIST.map((item, i) => {
                            return (
                                <div className="cell-12 cell-sm-6 cell-md-6 cell-lg-4 my-2" key={i}>
                                    <SolutionAbilityItem item={item} />
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Templates section */}
                <section className="templates-section py-5">
                    <div className="text-center">
                        <h3>Templates</h3>
                    </div>
                    <div className="container grid grid-gap-large my-2">
                        {PRODUCT_TEAMS_TEMPLATES_LIST.map((item, i) => {
                            return (
                                <div className="cell-12 cell-sm-6 cell-md-6 cell-lg-4 my-2" key={i}>
                                    <SolutionTemplateCard item={item} />
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Sign-up section */}
                <SolutionSignupSection />
            </div>
        </Layout>
    );
};
export async function getStaticProps({ params }) {
    const props = await sourcebitDataClient.getStaticPropsForPageAtPath('');
    return { props };
}
export default marketing;
