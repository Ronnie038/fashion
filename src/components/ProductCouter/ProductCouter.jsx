import React from 'react';
import { Icon } from '@iconify/react';

const ProductCouter = () => {
    return (
        <div className="flex items-center w-52">
            <input type="text" value={0} className="text-center text-2xl font-semibold w-full input rounded-none border-black disabled focus:outline-none" />
            <div className='flex flex-col-reverse gap-1 border-y-[1px] border-r-[1px] border-black py-[5px] px-4'>
                <button className=" bg-transparent border-none"><Icon icon="teenyicons:down-solid" /></button>
                <button className=" bg-transparent border-none"><Icon icon="teenyicons:up-solid" /></button>
            </div>
        </div>
    );
};

export default ProductCouter;