import React from 'react';
import Link from 'next/dist/client/link';

const TemplateItem = (props) => {
    console.log(' props.slug', props.slug);
    return (
        <Link
            href={{
                pathname: '/template/' + props.item.slug + '/' + props.item.id
            }}
        >
            <div style={{ minHeight: '100%', borderRadius: '6px' }} className="card--highlight card item">
                <img src={props.item.image} style={{ maxHeight: '100%', borderRadius: '6px 6px 0px 0px', objectFit: 'cover',aspectRatio:"3/2" }} />
                <div className="p-1">
                    <h5 className="mt-0">{props.item.name}</h5>
                    <p
                        style={{
                            fontSize: '13px',
                            opacity: '0.8',
                            maxHeight: '3.80rem',
                            overflow: 'hidden',
                            WebkitLineClamp: '3',
                            WebkitBoxOrient: 'vertical'
                        }}
                        className="m-0"
                    >
                        {props.item.description}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default TemplateItem;
