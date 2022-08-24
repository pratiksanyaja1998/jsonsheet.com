import React, { useState, useEffect, useCallback } from 'react';
import { Layout, TemplateLayout, TemplateItem, Loading } from '../../components';
import { sourcebitDataClient } from 'sourcebit-target-next';
import _ from 'lodash';
import axios from 'axios';
import Link from 'next/link';
import Icon from '../../components/Icon';

const Template = (props) => {
    const data = _.get(props, 'data');
    const config = _.get(data, 'config');
    const [templateList, setTemplateList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState();

    let testdata = {
        category: 4,
        description: "With this template, you can stay on top of your cases, clients, and billing, no matter what's thrown at you.",
        id: 4,
        image: 'https://s3.ap-south-1.amazonaws.com/assets.whitelabelapp.in/image/googlesheetapp/9d5f0459-5657-4f00-946a-f40c7e74ceee.jpg',
        name: 'Legal Case Tracking and billing',
        slug: 'legal-case-tracking-and-billing',
        url: 'https://docs.google.com/spreadsheets/d/1oeI22Qn4TIm0V9itIKT-hzuK_851K3W_zNBCATGbdCg'
    };

    const getData = useCallback(
        _.debounce((data) => {
            setSearch(data);
        }, 1000),
        []
    );
    useEffect(() => {
        fatchData();
    }, [search]);

    useEffect(() => {
        fatchData();
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
                console.log('res-->', res);
                setTemplateList(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
    };
    // console.log('props-datails-->', props);
    return (
        <Layout
            page={{
                title: 'templates',
                seo: {
                    title: 'templates',
                    description: 'template page'
                },
                layout: 'page'
            }}
            config={config}
        >
            {/* <TemplateLayout getData={getData}> */}
            <div>
                {isLoading ? (
                    <Loading />
                ) : (
                    <div className="container">
                        <button style={{textAlign:"center"}}>
                            <Icon icon={'menu'} style={{ fontSize: '1.22rem' }}/>
                        </button>

                        <h2>{testdata.name}</h2>
                        <img src={testdata.image}></img>
                        <p>{testdata.description}</p>
                    </div>
                )}
            </div>
            {/* </TemplateLayout> */}
        </Layout>
    );
};
export const getStaticPaths = async () => {
    const list = await axios.get('https://api.whitelabelapp.in/googlesheetapp/templates/category')
    .then((res) => res.data);
    
    let paths =
        list?.length > 0 &&
        list?.map((o) => ({
            params: {
                categoryName: o.slug
            }
        }));
    return { paths, fallback: false };
};
export async function getStaticProps({ params }) {
    const props = await sourcebitDataClient.getStaticPropsForPageAtPath('');
    return { props };
}
export default Template;
