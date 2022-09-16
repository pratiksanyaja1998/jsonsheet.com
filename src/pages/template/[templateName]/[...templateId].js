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

    useEffect(() => {
        fetchDetail();
    }, []);

    const fetchDetail = () => {
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
                    title: details?.name+' - Json Sheet',
                    description: details?.description,
                    extra: [
                        {
                            name: 'Keywords',
                            value: details?.keywords
                            ,
                        },
                    ]
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
                                <h3 style={{ color: '#2c343c' }}>{details?.name}</h3>
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
    const list = await axios.get('https://api.whitelabelapp.in/googlesheetapp/templates/list').then((res) => res.data);

    let paths =
        list?.length > 0 &&
        list?.map((o) => ({
            params: {
                templateName: o.slug,
                templateId: [o.id.toString()]
            }
        }));
    return { paths, fallback: false };
    // return {
    //     paths: [], //indicates that no page needs be created at build time

    //     fallback: 'blocking' //indicates the type of fallback
    // };
};
export async function getStaticProps({ params }) {
    const props = await sourcebitDataClient.getStaticPropsForPageAtPath('');
    console.log('params', params);
    return { props: { ...props, params } };
}
export default Template;
