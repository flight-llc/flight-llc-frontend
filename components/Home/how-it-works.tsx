import Image from "next/image";
import flightPortal from '@/public/flightPortal.svg';
import { BiEnvelope, BiMenu, BiSearch, BiUser, } from 'react-icons/bi';
import Line from '@/public/Line.svg';
import { FC } from "react";

export const HowItWorks: FC = () => {
    return (
        <div className="overlap-group7">
            <div className="how-it-works-1 text-5xl pl-4">How It Works</div>
            <div className="group-1176 nunitosans-normal-white-14-5px text-center">
                <p className="enter-flight-informa">ENTER FLIGHT INFORMATION AND DATES. CLICK SEARCH</p>
                <div className="flex-row-2">
                    <Image src={Line} alt="" width={1} height={100} />
                    <Image src='/Search.svg' alt="" width={30} height={30} />
                </div>
                <p className="fill-in-your-contact-information">FILL IN YOUR CONTACT INFORMATION</p>
                <div className="flex-row-3">
                    <Image src={'/menu.svg'} alt="" width={30} height={30} />
                    <Image src={Line} alt="" width={1} height={100} />
                </div>
                <p className="our-travel-advisers our-travel">OUR TRAVEL ADVISERS WILL RESPOND TO YOU TO ASSIST</p>
                <div className="flex-row-4">
                    <Image src={Line} alt="" width={1} height={100} />
                    <Image src={'/user.png'} alt="" width={30} height={30} />
                </div>
                <p className="check-inbox-for-the-best-deals">CHECK INBOX FOR THE BEST DEALS</p>
                <Image src={'/mail.svg'} alt="" width={30} height={30} />
            </div>
        </div>
        //     <div className="relative w-screen min-h-screen my-8">
        //     <Image
        //         src={flightPortal}
        //         alt="how flight portal works"
        //         fill
        //         className="object-cover"
        //     />
        //     <div className="absolute w-full flex justify-center">
        //         <div className="w-[70%] h-fit pl-20 pb-0">
        //             <h1 className="text-4xl bg-gradient-to-r from-[#EDEFF1] to-[#3070CC] py-16">
        //                 How It works
        //             </h1>
        //             <div className="text-white lg:w-[25%] xl:w-[20%] text-center">
        //                 <section>
        //                     <span className="text-[11.5px] pt-2">ENTER FLIGHT INFORMATION</span>
        //                     <br/>
        //                     <span className="text-[11.5px] text-center">AND DATES. CLICK SEARCH</span>

        //                     <div className="ml-20">
        //                         <p className="flex py-3 gap-3">
        //                             <Image src={Line} alt="" width={1} height={100} />
        //                             <Image src='/Search.svg' alt="" width={30} height={30}/>
        //                         </p>
        //                     </div>
        //                 </section>

        //                 <section className="w-full text-center">
        //                     <span className="text-[11.5px] pt-2">FILL IN YOUR CONTACT</span>
        //                     <br/>
        //                     <span className="text-[11.5px]">INFORMATION</span>

        //                     <div className="ml-10">
        //                         <p className="flex py-3 gap-2">
        //                             <Image src={'/menu.svg'} alt="" width={30} height={30}/>
        //                             <Image src={Line} alt="" width={1} height={100} />
        //                         </p>
        //                     </div>

        //                 </section>
        //                 <section className="w-full">
        //                     <span className="text-[11.5px] pt-2">OUR TRAVEL ADVISERS WILL</span>
        //                     <br/>
        //                     <span className="text-[11.5px] pt-2">RESPOND TO YOU TO ASSIST</span>
        //                     <div className="ml-20">
        //                         <p className="flex py-3 gap-3 items-center">
        //                             <Image src={Line} alt="" width={1} height={100} />
        //                             <Image src={'/user.png'} alt="" width={30} height={30}/>
        //                         </p>
        //                     </div>
        //                 </section>

        //                 <section className="w-full">
        //                     <span className="text-[11.5px] pt-2">CHECK INBOX FOR THE</span>
        //                     <br/>
        //                     <span className="text-[11.5px] pt-2">BEST DEALS</span>
        //                     <div className="flex justify-center">
        //                         <p className="flex py-3 gap-3 items-center">
        //                             <Image src={'/mail.svg'} alt="" width={30} height={30}/>
        //                         </p>
        //                     </div>
        //                 </section>
        //             </div>

        //         </div>
        //     </div>
        // </div>
    );
}