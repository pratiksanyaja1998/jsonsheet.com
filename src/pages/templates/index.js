import React,{useState,useEffect} from 'react';
import { Layout, TemplateLayout, TemplateItem } from '../../components';
import { sourcebitDataClient } from 'sourcebit-target-next';
import _ from 'lodash';
import axios from 'axios';

const Template = (props) => {
    const data = _.get(props, 'data');
    const config = _.get(data, 'config');
    const [templateList, setTemplateList] = useState([]);
    
    useEffect(() => {  
        axios
        .get('https://api.whitelabelapp.in/googlesheetapp/templates/list')
        .then((res) => {
            console.log('res-->', res);
            setTemplateList(res.data);
        })
        .catch((err) => console.log(err));  
     
    }, [])
    
  
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
                <div className="grid grid-gap-small">
                    {templateList.map((item, index) => {
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

export async function getStaticProps({ params }) {
    const props = await sourcebitDataClient.getStaticPropsForPageAtPath('');
    return { props };
}
export default Template;
