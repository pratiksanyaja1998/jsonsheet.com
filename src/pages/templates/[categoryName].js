import { React, useEffect, useState, useCallback } from 'react';
import { sourcebitDataClient } from 'sourcebit-target-next';
import _ from 'lodash';
import { Layout, TemplateLayout, TemplateItem, NoDataFound, Loading } from '../../components';
import router, { withRouter, useRouter } from 'next/router';
import axios from 'axios';

const TemplateName = (props) => {
    // props
    const data = _.get(props, 'data');
    const config = _.get(data, 'config');
    // state
    const [templateList, setTemplateList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState();
    const router = useRouter();

    console.log('props --', props);
    const getData = useCallback(
        _.debounce((data) => {
            setSearch(data);
        }, 1000),
        []
    );
    useEffect(() => {
        fetchData();
    }, [search]);

    useEffect(() => {
        setSearch('');
        fetchData();
    }, [props.category.id]);

    const fetchData = () => {
        setIsLoading(true);
        let url = 'https://api.whitelabelapp.in/googlesheetapp/templates/list';
        if (props.category.id) {
            url += '?category=' + props.category.id;
        }
        if (search) {
            url += '&search=' + search;
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
    return (
        <Layout
            page={{
                title: props.category.name,
                seo: {
                    title: props.category.name + ' - Json Sheet',
                    description: props.category.description,
                    extra: [
                        {
                            name: 'Keywords',
                            value: props.category.keywords
                        }
                    ]
                },
                layout: 'page'
            }}
            config={config}
        >
            <TemplateLayout getData={getData} category={props.category.id}>
                {isLoading ? (
                    <Loading />
                ) : templateList.length == 0 ? (
                    <NoDataFound />
                ) : (
                    <div>
                        <h1>{props.category.name}</h1>
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
                categoryName: o.slug
            }
        }));
    return { paths, fallback: false };
};

export async function getStaticProps({ params }) {
    const categoryList = await axios.get('https://api.whitelabelapp.in/googlesheetapp/templates/category').then((res) => res.data);
    const props = await sourcebitDataClient.getStaticPropsForPageAtPath('');
    return { props: { ...props, params, category: categoryList.find((o) => o.slug == params.categoryName) } };
}
export default withRouter(TemplateName);
