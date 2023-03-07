import Link from 'next/link';
import Image from 'next/image';
import airFrance from '@/public/airFrance.svg';
import airfrance_vector from '@/public/airfrance_vector.svg';
import Luftansa from '@/public/Luftansa.svg';
import emirates from '@/public/emirates.svg';
import uae from '@/public/uae.svg';
import airCanada from '@/public/airCanada.svg';
import airCanada_vector from '@/public/airCanada_vector.svg';
import express from '@/public/express.svg';
import express_vector from '@/public/express_vector.svg';
import swiss from '@/public/swiss.svg';
import turkish from '@/public/turkish.svg';
import turkish_vector from '@/public/turkish_vector.svg';
import { FC } from 'react';

export const ExternalAirlines : FC = () => {
    return(
        <div className="flex justify-center">
        <div className="w-[70%] flex justify-between items-center h-4 my-12">
            <Link href="https://" target={"_blank"}>
                <div className="flex flex-row items-center gap-1">
                    <Image
                    src={airFrance}
                    alt=""
                    width={80}
                    height={80}/>
                    <Image
                    src={airfrance_vector}
                    alt=""
                    width={15}
                    height={15}/>
                </div>
            </Link>

            <Link href="https://" target={"_blank"}>
                <div className="flex flex-row items-center">
                    <Image
                    src={Luftansa}
                    alt=""
                    width={80}
                    height={80}/>
                </div>
            </Link>

            <Link href="https://" target={"_blank"}>
                <div className="flex flex-row items-center gap-1">
                    <Image
                    src={emirates}
                    alt=""
                    width={60}
                    height={60}/>
                </div>
            </Link>

            <Link href="https://" target={"_blank"}>
                <div className="flex flex-row items-center gap-1">
                    <Image
                    src={uae}
                    alt=""
                    width={60}
                    height={60}/>
                </div>
            </Link>

            <Link href="https://" target={"_blank"}>
                <div className="flex flex-row items-center gap-1">
                    <Image
                    src={airCanada_vector}
                    alt=""
                    width={15}
                    height={15}/>
                    <Image
                    src={airCanada}
                    alt=""
                    width={80}
                    height={80}/>
                </div>
            </Link>

            <Link href="https://" target={"_blank"}>
                <div className="flex flex-row items-center gap-1">
                    <Image
                    src={express}
                    alt=""
                    width={60}
                    height={60}/>
                    <Image
                    src={express_vector}
                    alt=""
                    width={15}
                    height={15}/>
                </div>
            </Link>

            <Link href="https://" target={"_blank"}>
                <div className="flex flex-row items-center gap-1">
                    <Image
                    src={swiss}
                    alt=""
                    width={60}
                    height={60}/>
                </div>
            </Link>

            <Link href="https://" target={"_blank"}>
                <div className="flex flex-row items-center gap-1">
                    <Image
                    src={turkish_vector}
                    alt=""
                    width={15}
                    height={15}/>
                    <Image
                    src={turkish}
                    alt=""
                    width={100}
                    height={100}/>
                </div>
            </Link>
        </div>
    </div>
    );
} 