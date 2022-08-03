import React from 'react';

const TemplateItem = (props) => {
    return (
        <div style={{ minHeight: '100%', borderRadius: '6px' }} className="card--highlight card item">
            <img src={props.item.image} style={{ maxHeight: '100%', borderRadius: '6px 6px 0px 0px' }} />
            <div className="p-1">
                <h5 className="mt-0">{props.item.name}</h5>
                <p style={{ fontSize: '13px', opacity: '0.8' }} className="m-0">
                    {props.item.description}
                </p>
            </div>
        </div>
    );
};

export default TemplateItem;