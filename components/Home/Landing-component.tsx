import { FC } from "react";
import home_img_1 from '@/public/home_img_1.svg';
import Image from 'next/image';
import { NavBar } from "../Nav/Nav-component";
import { BiEnvelope, BiMenu, BiSearch, BiUser, } from 'react-icons/bi';
import { GiAirplaneArrival, GiAirplaneDeparture } from 'react-icons/gi';
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';
import { RxCalendar } from 'react-icons/rx';
import { ExternalAirlines } from "./airlines";
import { UserExperienceRatings } from "./user-ratings-component";
import { SpecialOffers } from "./special-offers";
import { ExpertTips } from "./Expert-tips";
import { AboutUs } from "./About";
import { ContactUs } from "./Contact";
import Footer from "../Footer/footer";
import { HowItWorks } from "./how-it-works";
import { UserReviewsResponseType } from "@/utils/types";
import { BsArrow90DegDown } from "react-icons/bs";




type props = {
    data : UserReviewsResponseType,
    locations ?: any
}
const LandingComponent: FC<props> = ({data, locations}) => {

    return (
        <>
            <div className="h-[120vh] relative block">
                <Image
                    src={home_img_1}
                    alt="flight seat"
                    fill
                    className="object-cover"
                />
                <div className="absolute w-full flex justify-center">
                    <div className="w-10/12 h-screen">
                        <NavBar textColor="text-white"/>

                        {/* landing page header title */}
                        <div className="mt-28 text-white flex justify-center items-center">
                            <div className="text-4xl leading-relaxed text-center headerText">
                                <h1 className="bg-gradient-to-r from-[#EDEFF1] to-[#0379E8]">Elevate Your Travel Experience</h1>
                                <h1 className="bg-gradient-to-r from-[#EDEFF1] to-[#0379E8]">and Save up to 40% on Business Class Flights!</h1>
                            </div>
                        </div>

                        {/* Travel info */}
                        <div className="flex justify-center">
                            <div className="my-12 w-fit bg-white border border-[#eee] rounded-lg p-4">
                                <div className="border-b border-[#eee] flex justify-center items-center pb-3">
                                    <div className="flex flex-row gap-4 capitalize text-xs font-semibold">
                                        <input type="radio" 
                                        defaultChecked 
                                        id="html" 
                                        name="fav_language" 
                                        defaultValue="one Way" />
                                        <label htmlFor="html">one&nbsp;way</label>
                                        <input 
                                        type="radio" 
                                        id="html" 
                                        name="fav_language" 
                                        defaultValue="Round Trip" />
                                        <label htmlFor="html">round&nbsp;trip</label>
                                        <input 
                                        type="radio" 
                                        id="html" 
                                        name="fav_language" 
                                        defaultValue="Multi city" />
                                        <label htmlFor="html">multi&nbsp;city</label>
                                    </div>
                                </div>
                                {/* travel form */}
                                <div className="flex pt-2">
                                    <form className="basis-full flex justify-between items-center gap-8">
                                        <div className="flex flex-col gap-2 text-xs">
                                            <div className="font-semibold flex gap-1 items-center">
                                                <GiAirplaneDeparture className="text-base" />
                                                <p>From</p>
                                            </div>
                                            <div className="">
                                                <select
                                                className="outline-none focus:border-b focus:border-[#113B75] py-2 pr-2">
                                                    <option value="" className="text-[#ACB0B9]">Flight from?</option>
                                                    {locations && locations.map((data : any, _ :number) => 
                                                        <option key={_} value={data.city} className="text-[#ACB0B9]">{data.city}</option>
                                                    )}
                                                </select>
                                            {/* <input
                                                type={"text"}
                                                className="outline-none focus:border-b focus:border-[#113B75] py-2"
                                                placeholder="Flight from?" />*/}
                                            </div> 
                                        </div>

                                        <div className="flex flex-col gap-2 text-xs">
                                            <div className="font-semibold flex gap-1 items-center">
                                                <GiAirplaneArrival className="text-base" />
                                                <p>To</p>
                                            </div>
                                            <div className="">
                                           
                                                {/* <input
                                                    type={"text"}
                                                    className="outline-none focus:border-b focus:border-[#113B75] py-2"
                                                    placeholder="Where To?" /> */}
                                                    <select
                                                    className="outline-none focus:border-b focus:border-[#113B75] py-2 pr-2">
                                                        <option value="" className="text-[#ACB0B9]">Where To?</option>
                                                        {locations && locations.map((data : any, _ :number) => 
                                                            <option key={_} value={data.city} className="text-[#ACB0B9]">{data.city}</option>
                                                        )}
                                                    </select>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2 text-xs ">
                                            <div className="font-semibold flex flex-row gap-2 items-center">
                                                <RxCalendar className="text-base" />
                                                <p>Depart</p>
                                            </div>
                                            <div className="">
                                                <input
                                                    type={"date"}
                                                    className="outline-none focus:border-b focus:border-[#113B75] py-2"
                                                />
                                            </div>
                                        </div>

                                        {/* <div className="flex flex-col gap-2 text-xs">
                                            <div className="font-semibold flex gap-2 items-center">
                                                <RxCalendar className="text-sm" />
                                                <p>Return</p>
                                            </div>
                                            <div className="">
                                                <input
                                                    type={"date"}
                                                    className="outline-none focus:border-b-2 focus:border-[#113B75] py-2"
                                                />
                                            </div>
                                        </div> */}

                                        <div className="flex flex-col gap-2 text-xs px-4">
                                            <div className="font-semibold flex gap-1 items-center">
                                                <MdOutlineAirlineSeatReclineExtra className="text-lg" />
                                                <p>cabin&nbsp;class&nbsp;travelers</p>
                                            </div>
                                            <div className="flex flex-row items-center gap-1">
                                                <input
                                                    type={"text"}
                                                    className="outline-none focus:border-b w-4 focus:border-[#113B75] px-1 py-2"
                                                    placeholder="1" />
                                                    <select
                                                    className="w-full outline-none focus:border-b focus:border-[#113B75] py-2 pr-2">
                                                        <option value="" className="text-[#ACB0B9]">Premium Economy</option>
                                                        <option value="" className="text-[#ACB0B9]">Business</option>
                                                        <option value="" className="text-[#ACB0B9]">First</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <button type="submit" className="text-sm text-white text-center bg-[#113B75] rounded-md py-3 px-6">
                                                Search&nbsp;Flight
                                            </button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>

                        {/* other airlines */}
                        <ExternalAirlines />
                    </div>
                </div>
            </div>

            {/* user ratings */}
            <div className="w-full">
                <UserExperienceRatings comments={data}/>

                {/* special offers */}
                <div className="w-full p-4 flex justify-center">
                    <div className="w-4/5 h-auto pt-16 pb-8">
                        <p className="text-xl font-semibold text-[#2C53B8] text-center">
                            <h1 className="text-4xl text-center capitalize bg-gradient-to-r from-[#3070CC] to-[#134997]">Special offers</h1>
                            <p className="text-center text-sm font-normal text-black py-4">Don&apos;t Miss Out on Our Deals on Business Class Flights&#33;</p>
                        </p>
                        {/* user ratings */}
                        <SpecialOffers />
                    </div>
                </div>

            </div>
           
            {/* How it works */}
            <HowItWorks/>

            {/* Expert tips */}
            <ExpertTips />

            {/* About us */}
            <AboutUs/>

            {/* contact us */}
            <ContactUs/>

            {/* Footer */}
            <Footer/>
        </>
    );
}

export default LandingComponent;