import React from 'react';

const Loading = (props) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', minHeight: '55vh', alignItems: 'center' }}>
            <img src="/images/loading.gif" style={{ width: '50px', height: '50px' }} />
        </div>
    );
};

export default Loading;
