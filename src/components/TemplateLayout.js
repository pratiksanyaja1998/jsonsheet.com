import React, { useEffect, useLayoutEffect, useState } from 'react';
import Link from 'next/link';
import Icon from './Icon';
import axios from 'axios';
import Loading from './Loading';
import router, { withRouter, useRouter } from 'next/router';

const TemplateLayout = (props) => {
    const [categoryShow, setCategoryShow] = useState(false);
    const [category, setCategory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState('');
    const [windowWidth, setWindowWidth] = useState(0);

    const Router = useRouter();

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

                if (detail.clientHeight < window.innerHeight - 95) {
                    list.classList.replace('full-height', 'fix-height');
                } else {
                    list.style.maxHeight = `${detail.clientHeight + 95}px`;
                    list.classList.replace('fix-height', 'full-height');
                }
            }
            setWindowWidth(width);
        }

        fetchData();
        window.addEventListener('resize', autoResize);
        autoResize();
        return () => window.removeEventListener('resize', autoResize);
    }, []);

    useEffect(() => {
        setSearch('');
    }, [props?.categoty]);

    const fetchData = () => {
        setIsLoading(true);
        axios
            .get('https://api.whitelabelapp.in/googlesheetapp/templates/category')
            .then((res) => {
                console.log('res-->', res);
                setCategory(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
    };
    return isLoading ? (
        <Loading />
    ) : (
        <div className="template-layout container py-5">
            <div className="grid">
                <div className="cell-0 cell-md-3 show full-height" id="categoryList">
                    <div className="categories-list-container py-2">
                        <div className="mb-2 py-2">
                            <h5 className="font-sans-serif">CATEGORIES</h5>
                        </div>
                        <div>
                            <Link href={'/templates'}>
                                <a className={Router.query?.categoryName == '' || !Router.query?.categoryName ? 'category-link active-link' : 'category-link'}>
                                    All
                                </a>
                            </Link>
                            {category.map((value, index) => (
                                <div key={index}>
                                    <Link
                                        href={{
                                            pathname: '/templates/' + value.slug
                                        }}
                                    >
                                        <a className={Router.query?.categoryName == value.slug ? 'category-link active-link' : 'category-link'}>{value.name}</a>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="templates-container cell-12 cell-md-9">
                    <div className={props?.hideSearch ? 'mb-4 mt-2' : 'mb-4 mt-2 search-border'} id="category">
                        {!props?.hideSearch && (
                            <input
                                type="text"
                                id="header-search"
                                placeholder="Search Template"
                                name="s"
                                className="search-bar"
                                value={search}
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                    props?.getData(e.target.value);
                                }}
                            />
                        )}
                        <button id="menuBtn" className="cat-btn hide" onClick={() => setCategoryShow(!categoryShow)}>
                            {!categoryShow ? <Icon icon={'menu'} style={{ fontSize: '1.22rem' }} /> : <Icon icon={'close'} style={{ fontSize: '1.22rem' }} />}
                        </button>
                        {categoryShow && (
                            <div className="categories-sm p-1">
                                <Link href={'/templates'}>
                                    <a
                                        className={
                                            Router.query?.categoryName == '' || !Router.query?.categoryName ? 'cat-list m-1 active-link' : 'cat-list m-1'
                                        }
                                        onClick={() => setCategoryShow(false)}
                                    >
                                        All
                                    </a>
                                </Link>
                                {category.map((value, index) => (
                                    <div key={index}>
                                        <Link
                                            href={{
                                                pathname: '/templates/' + value.slug
                                            }}
                                        >
                                            <a
                                                className={Router.query?.categoryName == value.slug ? 'cat-list m-1 active-link' : 'cat-list m-1'}
                                                onClick={() => setCategoryShow(false)}
                                            >
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
        </div>
    );
};

export default TemplateLayout;
