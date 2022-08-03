import React from 'react';
import { sourcebitDataClient } from 'sourcebit-target-next';
import _ from 'lodash';
import { Layout, TemplateLayout, TemplateItem } from '../../components';

const TamplateName = (props) => {
    const data = _.get(props, 'data');
    const config = _.get(data, 'config');

    console.log('props--.', props);
    let tempList = [
        {
            id: 1,
            name: 'Art and Culture',
            image: 'https://all-powerpoint-template.com/img/2020/10/Slide1-640.jpg',
            description:
                'Showcase your works with significant Free Art and Culture Templates & Themes. Easy to customize templates with clean and crisp layouts and free support.'
        },
        {
            id: 2,
            name: 'community',
            image: 'https://all-powerpoint-template.com/img/2020/10/Slide1-640.jpg',
            description:
                'Get 723 community website templates on ThemeForest. Buy community website templates from $3. All created by our Global Community of independent Web .'
        },
        {
            id: 3,
            name: 'fashion-food',
            image: 'https://all-powerpoint-template.com/img/2020/10/Slide1-640.jpg',
            description: 'Discover 2 Food And Fashion Cover designs on Dribbble. Your resource to discover and connect with designers worldwide.'
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
            <TemplateLayout>
                <h1>{'hello ' + props?.params.templateName}</h1>
                <div className="grid grid-gap-small">
                    {tempList.map((item, index) => {
                        return (
                            <div className="cell-12 cell-sm-6 cell-md-6 cell-lg-4 my-2" key={index}>
                                <TemplateItem item={item} />
                            </div>
                        );
                    })}
                </div>
            </TemplateLayout>
        </Layout>
    );
};
async function getStaticProps({ params }) {
    console.log('params', params);
    const props = await sourcebitDataClient.getStaticPropsForPageAtPath('');
    return { props: { ...props, params } };
}
async function getStaticPaths() {
    return { paths: [], fallback: 'blocking' };
}
export default TamplateName;
