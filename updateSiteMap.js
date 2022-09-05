const fs = require('fs');
const convert = require('xml-js');
const axios = require('axios');

axios.defaults.baseURL = 'https://api.whitelabelapp.in';

const updateSiteMap = async () => {
    try {
        let templateList = await axios.get('/googlesheetapp/templates/list').then((response) => {
            return response.data;
        });
        let templateCatList = await axios.get('/googlesheetapp/templates/category').then((response) => {
            return response.data;
        });

        let staticUrls = [
            `https://jsonsheet.com`,
            `https://jsonsheet.com/about`,
            `https://jsonsheet.com/blog`,
            `https://jsonsheet.com/contact-us`,
            `https://jsonsheet.com/templates`,
            `https://jsonsheet.com/terms-conditions`,
            `https://jsonsheet.com/privacy-policy`,
            `https://jsonsheet.com/security`,
            `https://jsonsheet.com/blog/category/news`,
            `https://jsonsheet.com/blog/category/general`,
            `https://jsonsheet.com/blog/category/tutorials`,
            `https://jsonsheet.com/blog/our-vision-for-the-next-generation-of-management-tools`,
            `https://jsonsheet.com/blog/3-management-basics-everyone-needs-to-know`
        ];

        let existingSitemapList = {};
        existingSitemapList.urlset = {};
        existingSitemapList.urlset.url = [];
        try {
            staticUrls.map((o) => {
                existingSitemapList.urlset.url.push({
                    loc: {
                        _text: o
                    },
                    lastmod: {
                        _text: new Date().toISOString()
                    }
                });
            });

            templateCatList.map((o) => {
                let url = `https://jsonsheet.com/templates/${o.slug}`;
                existingSitemapList.urlset.url.push({
                    loc: {
                        _text: url
                    },
                    lastmod: {
                        _text: new Date().toISOString()
                    }
                });
            });

            templateList.map((o, index) => {
                let url = `https://jsonsheet.com/template/${o.slug}/${o.id}`;
                existingSitemapList.urlset.url.push({
                    loc: {
                        _text: url
                    },
                    lastmod: {
                        _text: new Date().toISOString()
                    }
                });
            });
        } catch (error) {
            console.log('error->', error);
        }
        console.log('exists sitemap>>>>>>>>', existingSitemapList);
        let xmltext = convert.json2xml(existingSitemapList, {
            compact: true,
            spaces: 4,
            ignoreComment: true
        });

        fs.writeFile('public/sitemap.xml', xmltext, (err) => {
            // console.log(xmltext);
            if (err) {
                return console.log('>>>', err);
            }
            console.log('The file was saved!');
        });
    } catch (e) {
        console.log('error>>>', e);
    }
};
updateSiteMap();
