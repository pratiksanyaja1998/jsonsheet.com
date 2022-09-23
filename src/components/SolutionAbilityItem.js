import React from 'react';

const SolutionAbilityItem = ({ item }) => {
    return (
        <div className="abilities-card card--highlight">
            <img src={item?.img} className="abilities-card-img" />
            <h4 className="abilities-card-title">{item?.title}</h4>
        </div>
    );
};

export default SolutionAbilityItem;
