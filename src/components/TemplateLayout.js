import React from 'react';
import Link from 'next/link';

const TemplateLayout = (props) => {
    const { categoryList } = props;
    return (
        <div>
            <div className="item_content grid mt-5">
                <div className="cell-12 cell-md-3 ">
                    <div>
                        <div className="mx-1 my-1 p-3">
                            <input type="text" id="header-search" placeholder="Search" name="s" style={{ width: '200px' }} />
                        </div>
                        <div className="mx-5 my-5 p-3" style={{ color: 'black' /*,border:"2px solid"*/ }}>
                            <div className="text-center my-5">
                                <h5 style={{ fontWeight: 'normal', marginTop: '40px' }}>CATEGORIES</h5>
                            </div>
                            <div>
                                {categoryList.map((value, index) => (
                                    <div key={index}>
                                        <Link href={"/templates"+value.link}>
                                            <a>{value.name}</a>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cell-12 cell-md-9 ">
                    <div style={{ height: '100%', overflow: 'auto' }}>{props.children}</div>
                </div>
            </div>
        </div>
    );
};

export default TemplateLayout;
