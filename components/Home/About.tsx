import Image from "next/image";
import About from '@/public/About.svg';
import {FC} from 'react';

export const AboutUs : FC = () => {
    return(
        <div className="relative w-screen my-8" id={'AboutUs'}>
            <Image
                src={About}
                alt=""
                fill
                className="object-cover"
            />
            <div className="absolute w-full flex justify-center items-center">
                <div className="w-3/5 py-20 text-center text-white">
                    <p className="uppercase text-lg font-bold">About us</p>

                    {/* <div className="flightPortalLogo text-7xl my-12">
                        <span>Flightportal</span>
                    </div> */}
                   <div className="w-full">
                        <Image
                        src={'/flightPortal2.svg'}
                        alt=""
                        width={450}
                        height={450}
                        className="mx-auto"
                        />
                   </div>   

                    <div className="text-base">
                        <p>
                            As a travel consulting agency, we craft unforgettable, 
                        budget-friendly luxury travel experiences. We specialize in <br/> providing 
                        luxurious travel experiences at affordable prices. Our specialists scour 
                        the market to find the best deals on first <br/> and business-class flights to destinations 
                        worldwide. We work tirelessly to negotiate lower prices on available seats and <br/> match 
                        them to your budget and schedule, ensuring you get the best value for your money. 
                        Trust us to take care of the <br/> details and guarantee a comfortable journey to any location.
                        </p>
                        <p className="py-2">Planning a trip can be overwhelming, so we make it easy. 
                        Simply tell us your destination and travel dates, and our <br/> specialists 
                        will work magic to find the best business-class deals that fit your budget 
                        and schedule. We pride ourselves <br/> on going above and beyond to ensure you get 
                        the most value for your money. Personalized service includes negotiating <br/> lower 
                        prices on available seats and tailoring your itinerary to your preferences.<br/>
                        Travel in comfort and style without breaking the bank. With our expert guidance, 
                        you can relax and enjoy a seamless <br/> luxury travel experience.
                        Contact us today to start planning your next adventure
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="absolute bottom-0 mx-auto w-px bg-white h-16"/>
            </div>
        </div>
    );
}