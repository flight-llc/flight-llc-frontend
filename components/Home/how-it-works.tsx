import Image from "next/image";
import flightPortal from '@/public/flightPortal.svg';
import { BiEnvelope, BiMenu, BiSearch, BiUser, } from 'react-icons/bi';
import Line from '@/public/Line.svg';
import { FC } from "react";

export const HowItWorks: FC = () => {
    return (
        //overlap-group7
        <div className="overlap-group7">
            <div className="how-it-works-1 text-5xl pl-4" id="HowItWorks">How It Works</div>
            <div className="group-1176 nunitosans-normal-white-14-5px text-center">
                <p className="enter-flight-informa">ENTER FLIGHT INFORMATION AND DATES. CLICK SEARCH</p>
                <div className="flex-row-2">
                    <Image src={Line} alt="" width={1} height={100} />
                    <Image src='/Search.svg' alt="" width={30} height={30} />
                </div>
                <p className="fill-in-your-contact-information">FILL IN YOUR CONTACT INFORMATION</p>
                <div className="flex-row-3 ml-6">
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
    );
}