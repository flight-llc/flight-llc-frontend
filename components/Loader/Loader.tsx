import {FC, useEffect, useState} from 'react';
import Image from 'next/image';
import LoaderImg from '@/public/LoaderImg.svg';
import Circle from '@/public/Circle.svg';
import {IoIosAirplane} from 'react-icons/io';

/**todo
 * loader should be dynamic not static
 */

interface IParams { fromIATA: string; toIATA: string; };

export const Loader :FC<IParams> = (props: IParams) => {
    const [loaderPercentage, setLoaderPercentage] = useState(1);

    let percentageInterval: NodeJS.Timer;
    useEffect(() => {
        incrementProgress();
        return () => {
            clearInterval(percentageInterval);
        }
    }, []);

    const incrementProgress = () => {
        let counter = 0;
        percentageInterval = setInterval(()=>{
            if (counter < 99) setLoaderPercentage(counter+=1);
        }, 50);
    }
    
    
    return(
        <div className='w-full h-screen relative'>
            <Image
            src={LoaderImg}
            alt="searching for flight"
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
                                <span className="text-base dark:text-white">{props.fromIATA}</span>
                                <span className="text-sm dark:text-white">{loaderPercentage}%</span>
                                <span className="text-sm dark:text-white">{props.toIATA}</span>
                            </div>
                            <div className="w-full flex justify-between">
                                <Image 
                                src={Circle} 
                                alt="" 
                                className='text-white' 
                                width={30} height={30}
                                />
                                <div className='w-full flex flex-row items-center gap-x-1 pb-3'>
                                    <div className={`bg-white h-px`} style={{width: `${(loaderPercentage || 1)}%`}}></div>
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