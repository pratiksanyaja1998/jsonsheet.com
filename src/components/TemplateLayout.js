import React, { useEffect, useLayoutEffect, useState } from 'react';
import Link from 'next/link';
import Icon from './Icon';
import axios from 'axios';

const TemplateLayout = (props) => {
    const [categoryShow, setCategoryShow] = useState(false);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        function autoResize() {
            let width = window.innerWidth;
            let btn = document.getElementById('menuBtn');
            let list = document.getElementById('categoryList');
            let cat = document.getElementById('category');

            let detail = document.getElementById('categoryDetail');

            if (width < 800) {
                btn.classList.replace('hide', 'show');
                list.classList.replace('show', 'hide');
                cat.classList.add('categories-menu');
            } else {
                btn.classList.replace('show', 'hide');
                list.classList.replace('hide', 'show');
                cat.classList.remove('categories-menu');
                setCategoryShow(false);

                console.log('height -->', detail.clientHeight, detail.clientHeight < window.innerHeight - 95);

                if (detail.clientHeight < window.innerHeight - 95) {
                    list.classList.replace('full-height', 'fix-height');
                } else {
                    list.style.maxHeight = `${detail.clientHeight + 95}px`;
                    list.classList.replace('fix-height', 'full-height');
                }
            }
        }

        axios
            .get('https://api.whitelabelapp.in/googlesheetapp/templates/category')
            .then((res) => {
                console.log('res-->', res);
                setCategory(res.data);
            })
            .catch((err) => console.log(err));

        window.addEventListener('resize', autoResize);
        autoResize();
        return () => window.removeEventListener('resize', autoResize);
    }, []);

    return (
        <div className="template-layout container grid grid-gap-large">
            <div className="cell-0 cell-md-3 show full-height" id="categoryList">
                <div className="categories-list-container py-2">
                    <div className="text-center mb-2 py-2">
                        <Link href={'/templates'}>
                            <h5 className="categories-heading m-0">CATEGORIES</h5>
                        </Link>
                    </div>
                    <div>
                        {category.map((value, index) => (
                            <div key={index}>
                                <Link
                                    href={{
                                        pathname: '/templates/' + value.slug
                                    }}
                                >
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
                        {!categoryShow ? <Icon icon={'menu'} style={{ fontSize: '1.22rem' }} /> : <Icon icon={'close'} style={{ fontSize: '1.22rem' }} />}
                    </button>
                    {categoryShow && (
                        <div className="categories-sm p-1">
                            <Link href={'/templates'}>
                                <a className="cat-list m-1">All</a>
                            </Link>
                            {category.map((value, index) => (
                                <div key={index}>
                                    <Link
                                        href={{
                                            pathname: '/templates/' + value.slug
                                        }}
                                    >
                                        <a className="cat-list m-1" onClick={() => setCategoryShow(false)}>
                                            {value.name}
                                        </a>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="templates" id="categoryDetail">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default TemplateLayout;
