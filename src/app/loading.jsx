import React from 'react';
import { SyncLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className='flex justify-center items-center'>
            <SyncLoader />

        </div>
    );
};

export default loading;