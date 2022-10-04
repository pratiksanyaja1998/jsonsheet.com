import React from 'react';
import { Action, Icon, Layout } from '../components';
import _ from 'lodash';
import axios from 'axios';
import { sourcebitDataClient } from 'sourcebit-target-next';

function AboutUs(props) {
    const data = _.get(props, 'data');
    const config = _.get(data, 'config');
    return (
        <main id="aboutUs">
            <Layout
                page={{
                    title: 'About Us - Json Sheet',
                    seo: {
                        title: 'About Us - Json Sheet',
                        description: 'This page is json sheet about us page.',
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
                <div className="container">
                    <h1 className="text-center">About us</h1>
                    <p >
                        Json Sheet About is a spreadsheet application designed for managing spreadsheet data in Json Sheet power full UI. It is easy to use and
                        provides a great way to manage your data.
                    </p>
                    <div className="grid grid-gap-small my-2">
                        <div className="cell-12 cell-sm-12 cell-md-7 cell-lg-7 my-2 header-text">
                            <ul>
                                <li className="m-1">
                                    Json sheet are more flexible than spreadsheet files and can be used to store data in a wide variety of formats.
                                </li>
                                <li className="m-1">Json sheet can be opened in any text, editor, numerical, etc... and can be viewed in a web browser.</li>
                                <li className="m-1">Json sheet are typically used to store data that can be easily managed by Json Sheet App.</li>
                            </ul>
                        </div>
                        <div className="cell-12 cell-sm-12 cell-md-5 cell-lg-5 my-2 header-img">
                            <img src="images/team.jpg" />
                        </div>
                    </div>
                </div>

                <div className="get-started bg-primary pb-6 pt-6 mb-4 hero__body">
                    <p>So start using Json Sheet Spreadsheet today</p>
                    <Action action={{ label: 'Get started for free', style: 'primary', url: 'https://app.jsonsheet.com/#/' }} />
                </div>

                <div className="container">
                    <p>
                        Our mission is to democratize software and App creation by enabling anyone to build tools that meet their needs. People all over the
                        world use Json Sheet for everything from herding cattle to filmmaking.
                    </p>
                    <h4>Contact</h4>
                    <p>If you have any questions, suggestions or wish to make a complaint, you may contact us at:</p>
                    <p>SPYHUNTER IT SOLUTION (INDIA)</p>
                    <p>Email: admin@spyhunteritsolution.in</p>
                </div>
            </Layout>
        </main>
    );
}

export async function getStaticProps({ params }) {
    const props = await sourcebitDataClient.getStaticPropsForPageAtPath('');
    return { props };
}
export default AboutUs;
