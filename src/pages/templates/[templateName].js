import { React, useEffect, useState } from 'react';
import { sourcebitDataClient } from 'sourcebit-target-next';
import _ from 'lodash';
import { Layout, TemplateLayout, TemplateItem, NoDataFound } from '../../components';
import router, { withRouter, useRouter } from 'next/router';
import axios from 'axios';

const TamplateName = (props) => {
    // props
    const data = _.get(props, 'data');
    const config = _.get(data, 'config');
    // state
    const [templateList, setTemplateList] = useState([]);

    const router = useRouter();

    console.log('props --', props);

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
    useEffect(() => {
        axios
            .get(`https://api.whitelabelapp.in/googlesheetapp/templates/list?category=${props.categoty.id}`)
            .then((res) => {
                console.log('res-' + props.categoty.id + '->', res);
                setTemplateList(res.data);
            })
            .catch((err) => console.log(err));
    }, [props.categoty.id]); //chage here mAKE it proper

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
                {templateList.length == 0 ? (
                    <NoDataFound />
                ) : (
                    <div>
                        <h1>{props.categoty.name}</h1>
                        <div className="grid grid-gap-small">
                            {templateList.map((item, index) => {
                                return (
                                    <div className="cell-12 cell-sm-6 cell-md-6 cell-lg-4 my-2" key={index}>
                                        <TemplateItem item={item} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </TemplateLayout>
        </Layout>
    );
};

export const getStaticPaths = async () => {
    const list = await axios.get('https://api.whitelabelapp.in/googlesheetapp/templates/category').then((res) => res.data);

    let paths =
        list?.length > 0 &&
        list?.map((o) => ({
            params: {
                templateName: o.slug
            }
        }));
    return { paths, fallback: false };
};

export async function getStaticProps({ params }) {
    const categoryList = await axios.get('https://api.whitelabelapp.in/googlesheetapp/templates/category').then((res) => res.data);
    const props = await sourcebitDataClient.getStaticPropsForPageAtPath('');
    return { props: { ...props, params, categoty: categoryList.find((o) => o.slug == params.templateName) } };
}
export default withRouter(TamplateName);
