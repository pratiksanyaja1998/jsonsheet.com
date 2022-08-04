import React, { useEffect, useLayoutEffect, useState } from 'react';
import Link from 'next/link';
import Icon from './Icon';

const TemplateLayout = (props) => {
    const [categoryShow, setCategoryShow] = useState(false);
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

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        function autoResize() {
            let width = window.innerWidth;
            let btn = document.getElementById('menuBtn');
            let list = document.getElementById('categoryList');
            let cat = document.getElementById('category');
            // .categories-menu

            if (width < 800) {
                btn.classList.replace('hide', 'show');
                list.classList.replace('show', 'hide');
                cat.classList.add('categories-menu');
            } else {
                btn.classList.replace('show', 'hide');
                list.classList.replace('hide', 'show');
                cat.classList.remove('categories-menu');
                setCategoryShow(false);
            }
        }

        window.addEventListener('resize', autoResize);
        autoResize();
        return () => window.removeEventListener('resize', autoResize);
    }, []);

    return (
        <div className="template-layout container grid grid-gap-large">
            <div className="cell-0 cell-md-3 show" id="categoryList">
                <div className="categories-list-container py-2">
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
                <div className="mb-4 mt-2" id="category">
                    <input type="text" id="header-search" placeholder="Search" name="s" className="search-bar" />
                    <button id="menuBtn" className="cat-btn hide" onClick={() => setCategoryShow(!categoryShow)}>
                        {!categoryShow ? <Icon icon={'menu'} style={{ fontSize: '1.22rem' }} /> : <Icon icon={'close'} style={{ fontSize: '1.22rem' }} />}{' '}
                    </button>
                    {categoryShow && (
                        <div className="categories-sm p-1">
                            {arr.map((value, index) => (
                                <div key={index}>
                                    <Link href={'/templates' + value.link}>
                                        <a className="cat-list m-1" onClick={() => setCategoryShow(false)}>
                                            {value.name}
                                        </a>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="templates">{props.children}</div>
            </div>
        </div>
    );
};

export default TemplateLayout;
