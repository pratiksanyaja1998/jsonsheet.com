const fs = require('fs');
const xml2js = require('xml2js');
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
            `https://jsonsheet.com/product`,
            `https://jsonsheet.com/solutions`,
            `https://jsonsheet.com/terms-conditions`,
            `https://jsonsheet.com/privacy-policy`,
            `https://jsonsheet.com/security`,
            `https://jsonsheet.com/blog/category/news`,
            `https://jsonsheet.com/blog/category/general`,
            `https://jsonsheet.com/blog/category/tutorials`,
            //blogs
            `https://jsonsheet.com/blog/our-vision-for-the-next-generation-of-management-tools`,
            `https://jsonsheet.com/blog/3-management-basics-everyone-needs-to-know`,
            `https://jsonsheet.com/blog/create-or-rename-a-sheet`,
            `https://jsonsheet.com/blog/delete-a-json-sheet`,
            `https://jsonsheet.com/blog/json-sheet-mobile-app-will-soon`
        ];

        let existingSitemapList = {};
        existingSitemapList.urlset = {
            $: {
                xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
                'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
                'xsi:schemaLocation': 'http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd'
            }
        };
        existingSitemapList.urlset.url = [];
        try {
            staticUrls.map((o) => {
                existingSitemapList.urlset.url.push({
                    loc: o,
                    lastmod: new Date().toISOString()
                });
            });

            templateCatList.map((o) => {
                let url = `https://jsonsheet.com/templates/${o.slug}`;
                existingSitemapList.urlset.url.push({
                    loc: url,
                    lastmod: new Date().toISOString()
                });
            });

            templateList.map((o, index) => {
                let url = `https://jsonsheet.com/template/${o.slug}/${o.id}`;
                existingSitemapList.urlset.url.push({
                    loc: url,
                    lastmod: new Date().toISOString()
                });
            });
        } catch (error) {
            console.log('error->', error);
        }
        console.log('exists sitemap>>>>>>>>', existingSitemapList);

        let builder = new xml2js.Builder({
            xmldec: { version: '1.0', encoding: 'UTF-8' }
        });
        let xmltext = builder.buildObject(existingSitemapList);

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
