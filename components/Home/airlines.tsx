import Link from 'next/link';
import Image from 'next/image';
import group from '@/public/group.svg';
import { FC } from 'react';

export const ExternalAirlines : FC = () => {
    return(
        <div className="w-full relative">
            <div className='w-full h-32'>
                {/* <object data="/group.svg" className='w-full h-full object-cover'/> */}
                <Image
                src={group}
                alt=""
                fill
                className='object-cover'
                />
            </div>
    </div>
    );
} 