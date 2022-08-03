import React from 'react';
import Link from 'next/link';

const TemplateLayout = (props) => {
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
        <div className="template-layout container grid grid-gap-large">
            <div className="cell-12 cell-md-3 ">
                <div className=" categories-list-container p-2">
                    <div className="text-center mb-2 py-2">
                        <h5 className="categories-heading m-0">CATEGORIES</h5>
                    </div>
                    <div>
                        {arr.map((value, index) => (
                            <div key={index}>
                                <Link href={'/templates' + value.link}>
                                    <a>{value.name}</a>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="templates-container cell-12 cell-md-9">
                <div className="py-2 mb-2">
                    <input type="text" id="header-search" placeholder="Search" name="s" className="search-bar" />
                </div>
                <div className="templates">{props.children}</div>
            </div>
        </div>
    );
};

export default TemplateLayout;
