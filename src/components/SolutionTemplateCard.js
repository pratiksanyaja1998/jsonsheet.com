import React from 'react';
import { useRouter } from 'next/router';

const SolutionTemplateCard = ({ item }) => {
    const router = useRouter();
    return (
        <div
            className="templates-card card--highlight"
            onClick={() => {
                router.push('/templates/marketing');
            }}
        >
            <img src={item?.img} className="templates-card-img" />
            <h4 className="templates-card-title">{item?.title}</h4>
        </div>
    );
};

export default SolutionTemplateCard;
