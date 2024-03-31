import React from 'react';

const Tag = ({ tags }) => {
    return (
        <div className="text-xs lg:text-sm text-black/60 mb-6">
            {
                tags?.map(tag => `#${tag}, `)
            }
        </div>
    );
};

export default Tag;