import Modal from '@/components/Modal';
import PhotoDetails from '@/components/PhotoDetails';
import React from 'react';

const page = ({ params: { id, lang } }) => {
    return (
        <div>
            <Modal>
                <PhotoDetails id={id} lang={lang} />
            </Modal>
        </div>
    );
};

export default page;