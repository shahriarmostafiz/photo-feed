import PhotoDetails from '@/components/PhotoDetails';
import React from 'react';
import { getDictionary } from '../../dictionaries';

const page = async ({ params: { id, lang } }) => {

    return (
        <div>
            <PhotoDetails id={id} lang={lang} />
        </div>
    );
};

export default page;