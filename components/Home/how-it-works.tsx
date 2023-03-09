import Image from "next/image";
import flightPortal from '@/public/flightPortal.svg';
import { BiEnvelope, BiMenu, BiSearch, BiUser, } from 'react-icons/bi';
import Line from '@/public/Line.svg';
import { FC } from "react";
export const HowItWorks : FC = () => {
    return(
        <div className="relative w-screen h-[120vh] my-8">
        <Image
            src={flightPortal}
            alt="how flight portal works"
            fill
            className="object-cover"
        />
        <div className="absolute w-full flex justify-center">
            <div className="w-[70%] py-20">
                <h1 className="text-4xl bg-gradient-to-r from-[#EDEFF1] to-[#0379E8]">
                    How It works
                </h1>
                <div className="pt-6 text-white lg:w-[25%] xl:w-[20%] text-center">
                    <span className="text-xs pt-2">ENTER FLIGHT INFORMATION</span>
                    <br/>
                    <span className="text-xs text-center">AND DATES. CLICK SEARCH</span>

                    <div className="flex justify-center">
                        <p className="flex py-2 gap-2 items-center">
                            <Image src={Line} alt="" width={1} height={100} />
                            <BiSearch className="text-white text-3xl" />
                        </p>
                    </div>

                    <span className="text-xs pt-2">FILL IN YOUR CONTACT</span>
                    <br/>
                    <span className="text-xs">INFORMATION</span>
                    <div className="mx-20">
                        <p className="flex py-2 gap-2 items-center">
                            <BiMenu className="text-white text-3xl" />
                            <Image src={Line} alt="" width={1} height={100} />
                        </p>
                    </div>

                    <span className="text-xs pt-2">OUR TRAVEL ADVISERS WILL</span>
                    <br/>
                    <span className="text-xs pt-2">RESPOND TO YOU TO ASSIST</span>
                    <div className="flex justify-center">
                        <p className="flex py-2 gap-2 items-center">
                            <Image src={Line} alt="" width={1} height={100} />
                            <BiUser className="text-white text-3xl" />
                        </p>
                    </div>

                    <span className="text-xs pt-2">CHECK INBOX FOR THE</span>
                    <br/>
                    <span className="text-xs pt-2">BEST DEALS</span>
                    <div className="mx-20">
                        <p className="flex py-2 gap-2 items-center">
                            <BiEnvelope className="text-white text-3xl" />
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}