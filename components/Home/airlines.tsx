import Link from 'next/link';
import Image from 'next/image';
import group from '@/public/group.svg';
import { FC } from 'react';

export const ExternalAirlines : FC = () => {
    return(
        <div className="flex justify-center relative">
            <div className="absolute w-fit h-4">
                <Image
                src={group}
                alt=""
                width={1100}
                height={1100}
                />
            </div>
    </div>
    );
} 