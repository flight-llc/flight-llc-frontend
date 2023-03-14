import {FC} from 'react';
import Image from 'next/image';
import LoaderImg from '@/public/LoaderImg.svg';
import Circle from '@/public/Circle.svg';
import {IoIosAirplane} from 'react-icons/io';

/**todo
 * loader should be dynamic not static
 */

export const Loader :FC = () => {
    
    return(
        <div className='w-full h-screen relative'>
            <Image
            src={LoaderImg}
            alt=""
            fill
            className='object-cover'
            />
            <div className='absolute w-full'>
                <div className='w-4/5 h-screen mx-auto pt-8'>
                    <div className="flightPortalLogo text-5xl text-white">
                        <span>Flightportal</span>
                    </div>

                    <div className='flex justify-center h-screen items-center'>
                        <div className='w-1/2 text-white playfairFont font-light'>
                            
                            <div className="flex justify-between mb-8">
                                <span className="text-base dark:text-white">LAX</span>
                                <span className="text-sm dark:text-white">83%</span>
                                <span className="text-sm dark:text-white">PAR</span>
                            </div>
                            <div className="w-full flex justify-between">
                                <Image 
                                src={Circle} 
                                alt="" 
                                className='text-white' 
                                width={30} height={30}
                                />
                                <div className='w-full flex flex-row items-center gap-x-1 pb-3'>
                                    <div className="bg-white w-[83%] h-px"></div>
                                    <span><IoIosAirplane className='text-white' size={30}/></span>
                                </div>
                                <Image src={Circle} alt="" className='text-white' width={30} height={30}/>
                            </div>
                            <p className='text-[#FFFFFF] text-medium py-2 text-center nunito'>Fly solo or with a crew, we&#39;ll get you there, that much is true</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}