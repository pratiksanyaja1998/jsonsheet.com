import React from 'react';
import { Layout } from '../components';
import { sourcebitDataClient } from 'sourcebit-target-next';
import _ from 'lodash';

const contact = (props) => {
    const data = _.get(props, 'data');
    const config = _.get(data, 'config');

    return (
        <Layout
            page={{
                title: 'contact-us',
                seo: {
                    title: 'contact-us',
                    description: 'contact-us page'
                },
                layout: 'page'
            }}
            config={config}
        >
            <div className="container">
                <h4 className="mb-3 text-center mr-5 ml-5" style={{marginTop:20 }}>Let us help you grow your business and dramatically streamline your workflow.</h4>
                <h3 className="mb-3 text-center mr-5 ml-5 ">Contact our Sales team</h3>
            </div>

            <div className="container">
                {/* whole card */}
                <div className="item card card--vert mb-5">
                    {/* first row */}
                    <div className="item_content grid mt-2 mb-2">
                        <div className="cell-12 cell-md-6 ">
                            <div className="ml-3">
                                <lable>First name</lable>
                                <input type="text" name="name" className="input-style" placeholder="Ex. jhon" />
                            </div>
                        </div>
                        <div className="cell-12 cell-md-6">
                            <div className="mr-3">
                                <lable>Last name</lable>
                                <input type="text" name="name" className="input-style" placeholder="Ex. parkar" />
                            </div>
                        </div>
                    </div>
                    {/* second row */}
                    <div className="item_content grid mb-2">
                        <div className="cell-12 cell-md-6 ">
                            <div className="ml-3">
                                <lable>Work email</lable>
                                <input type="email" name="email" className="input-style" placeholder="Ex. xyz@gmail.com" />
                            </div>
                        </div>
                        <div className="cell-12 cell-md-6">
                            <div className="mr-3">
                                <lable>Job title</lable>
                                <input type="text" name="name" className="input-style" placeholder="Ex. developer" />
                            </div>
                        </div>
                    </div>
                    {/* third row */}
                    <div className="item_content grid mb-2">
                        <div className="cell-12 cell-md-6 ">
                            <div className="ml-3">
                                <lable>Phone number</lable>
                                <input type="text" name="email" className="input-style" placeholder="Ex. +91 your phone number" />
                            </div>
                        </div>
                    </div>
                    {/* fourth row */}
                    <div className="item_content grid mb-2">
                        <div className="cell-12 cell-md-6 ">
                            <div className="ml-3">
                                <lable>Company name</lable>
                                <input type="email" name="email" className="input-style" placeholder="Ex. xyz " />
                            </div>
                        </div>
                        <div className="cell-12 cell-md-6">
                            <div className="mr-3">
                                <lable>Company size</lable>
                                <input type="text" name="name" className="input-style" placeholder="Ex. 10" />
                            </div>
                        </div>
                    </div>
                    {/* fifth row */}
                    <div className="item_content grid mb-4">
                        <div className="cell-12 cell-md-12 ">
                            <div className="ml-3 mr-3">
                                <lable>How can our team help you?</lable>
                                <textarea type="text" name="email" className="input-style" placeholder="add your problem" rows="3" style={{ resize: 'none' }} />
                            </div>
                        </div>
                    </div>
                    {/* six row */}
                    <div className="item_content grid mb-2">
                        <div className="cell-12 cell-md-12 ">
                            <div className="mb-3 text-center">
                                <button type="button" className="btn btn--primary" style={{ borderRadius: '2px' }}>
                                    INQUIERY NOW
                                </button>
                                <p className="my-3 text-center mx-3 " style={{ fontSize: '10px' }}>
                                    By clicking "INQUIERY NOW", you acknowledge that your data will be handled in accordance with Json Sheet's{' '}
                                    <a href="/privacy-policy">Privacy Policy</a> and you authorize Json Sheet to send you updates about Json Sheet products,
                                    services and events.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
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
export default contact;
