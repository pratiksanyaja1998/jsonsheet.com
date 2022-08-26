import React, { useState, useEffect, useCallback } from 'react';
import { Layout, TemplateLayout, TemplateItem, Loading, Icon } from '../../../components';
import { sourcebitDataClient } from 'sourcebit-target-next';
import _ from 'lodash';
import axios from 'axios';
import Link from 'next/link';

const Template = (props) => {
    const data = _.get(props, 'data');
    const config = _.get(data, 'config');

    const [isLoading, setIsLoading] = useState(false);
    const [details, setDetails] = useState(null);

    let testdata = {
        category: 4,
        description: "With this template, you can stay on top of your cases, clients, and billing, no matter what's thrown at you.",
        id: 4,
        image: 'https://s3.ap-south-1.amazonaws.com/assets.whitelabelapp.in/image/googlesheetapp/9d5f0459-5657-4f00-946a-f40c7e74ceee.jpg',
        name: 'Legal Case Tracking and billing',
        slug: 'legal-case-tracking-and-billing',
        url: 'https://docs.google.com/spreadsheets/d/1oeI22Qn4TIm0V9itIKT-hzuK_851K3W_zNBCATGbdCg'
    };

    useEffect(() => {
        fatchDetail();
    }, []);

    const fatchData = () => {
        setIsLoading(true);
        let url = 'https://api.whitelabelapp.in/googlesheetapp/templates/list';
        if (search) {
            url += '?search=' + search;
        }
        axios
            .get(url)
            .then((res) => {
                console.log('res list-->', res.data);
                setTemplateList(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
    };
    const fatchDetail = () => {
        setIsLoading(true);
        let url = `https://api.whitelabelapp.in/googlesheetapp/templates/details/${props.params.templateId}`;
        // if (search) {
        //     url += '?search=' + search;
        // }
        axios
            .get(url)
            .then((res) => {
                console.log('res detail-->', res);
                setDetails(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
    };
    console.log('detail', details);
    return (
        <Layout
            page={{
                title: details?.name,
                seo: {
                    title: details?.name,
                    description: details?.description
                },
                layout: 'page'
            }}
            config={config}
        >
            <TemplateLayout hideSearch={true}>
                <div>
                    {isLoading ? (
                        <Loading />
                    ) : (
                        <div className="container">
                            <div>
                                <h2>{details?.name}</h2>
                                <img src={details?.image}></img>
                                <p>{details?.description}</p>
                            </div>
                        </div>
                    )}
                </div>
            </TemplateLayout>
        </Layout>
    );
};
export const getStaticPaths = async () => {
    return {
        paths: [], //indicates that no page needs be created at build time

        fallback: 'blocking' //indicates the type of fallback
    };
};
export async function getStaticProps({ params }) {
    const props = await sourcebitDataClient.getStaticPropsForPageAtPath('');
    console.log('params', params);
    return { props: { ...props, params } };
}
export default Template;
