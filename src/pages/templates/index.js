import React from 'react';
import { Layout, TemplateLayout } from '../../components';
import { sourcebitDataClient } from 'sourcebit-target-next';
import _ from 'lodash';

const Template = (props) => {
    const data = _.get(props, 'data');
    const config = _.get(data, 'config');

    let arr = [
        {
            link: '/',
            name: 'All'
        },
        {
            link: '/art-and-cultural',
            name: 'Art and Culture'
        },
        {
            link: '/community',
            name: 'Community'
        },
        {
            link: '/fashion-food',
            name: 'Fashion & Food'
        },

        {
            link: '/health',
            name: 'Health'
        },
        {
            link: '/local-business',
            name: 'Local Business'
        },
        {
            link: '/marketing',
            name: 'Marketing'
        },
        {
            link: '/real-estatel',
            name: 'Real Estatel'
        },
        {
            link: '/sales',
            name: 'Sales'
        },
        {
            link: '/science-and-technology',
            name: 'Science and Technology'
        },
        {
            link: '/community',
            name: 'Community'
        },
        {
            link: '/fashion-food',
            name: 'Fashion & Food'
        },

        {
            link: '/health',
            name: 'Health'
        },
        {
            link: '/local-business',
            name: 'Local Business'
        },
        {
            link: '/marketing',
            name: 'Marketing'
        },
        {
            link: '/real-estatel',
            name: 'Real Estatel'
        },
        {
            link: '/sales',
            name: 'Sales'
        }
    ];

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
            <TemplateLayout categoryList={arr}>
                <h1>hello yesh</h1>
            </TemplateLayout>
        </Layout>
    );
};

export async function getStaticProps({ params }) {
    const props = await sourcebitDataClient.getStaticPropsForPageAtPath('');
    return { props };
}
export default Template;
