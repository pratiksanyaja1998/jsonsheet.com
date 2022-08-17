import { React, useEffect, useState, useCallback } from 'react';
import { sourcebitDataClient } from 'sourcebit-target-next';
import _ from 'lodash';
import { Layout, TemplateLayout, TemplateItem, NoDataFound, Loading } from '../../components';
import router, { withRouter, useRouter } from 'next/router';
import axios from 'axios';

const TamplateName = (props) => {
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
        fatchData();
    }, [search]);

    useEffect(() => {
        setSearch('');
        fatchData();
    }, [props.categoty.id]);

    const fatchData = () => {
        setIsLoading(true);
        let url = 'https://api.whitelabelapp.in/googlesheetapp/templates/list';
        if (props.categoty.id) {
            url += '?category=' + props.categoty.id;
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
                title: 'templates',
                seo: {
                    title: 'templates',
                    description: '"templatelist",templateList page'
                },
                layout: 'page'
            }}
            config={config}
        >
            <TemplateLayout getData={getData} categoty={props.categoty.id}>
                {isLoading ? (
                    <Loading />
                ) : templateList.length == 0 ? (
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
