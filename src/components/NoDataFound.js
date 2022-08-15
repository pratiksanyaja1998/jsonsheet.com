import React from 'react';

const NoDataFound = (props) => {
    return (
        <div id="noDataFound">
            <img className="image" src="/images/not-found.png" />
            <h2 className="text">Sorry, no template found!</h2>
        </div>
    );
};

export default NoDataFound;
