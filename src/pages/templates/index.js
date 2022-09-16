import React, { useState, useEffect, useCallback } from 'react';
import { Layout, TemplateLayout, TemplateItem, Loading } from '../../components';
import { sourcebitDataClient } from 'sourcebit-target-next';
import _ from 'lodash';
import axios from 'axios';

const Template = (props) => {
    const data = _.get(props, 'data');
    const config = _.get(data, 'config');
    const [templateList, setTemplateList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState();

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
        fetchData();
    }, []);

    const fetchData = () => {
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
    return (
        <Layout
            page={{
                title: 'Templates',
                seo: {
                    title: 'Json Sheet Templates - Json Sheet',
                    description: 'Welcome to Json Sheet Templates, where you can start using Json Sheets by choosing a template made just for you.',
                    extra: [{
                        name: 'Keywords',
                        value: 'json sheet, google script json sheet, convert-excel-to-json sheet, json sheet js, google sheet to json, sheets json api, google sheet json api, json sheet builder,  json to sheet custom header, google sheet to json, json to google sheets'
                    }],
                },
                layout: 'page'
            }}
            config={config}
        >
            <TemplateLayout getData={getData}>
                {isLoading ? (
                    <Loading />
                ) : (
                    <div className="grid grid-gap-small">
                        {templateList.map((item, index) => {
                            return (
                                <div className="cell-12 cell-sm-6 cell-md-6 cell-lg-4 my-2" key={index}>
                                    <TemplateItem item={item} />
                                </div>
                            );
                        })}
                    </div>
                )}
            </TemplateLayout>
        </Layout>
    );
};

export async function getStaticProps({ params }) {
    const props = await sourcebitDataClient.getStaticPropsForPageAtPath('');
    return { props };
}
export default Template;
