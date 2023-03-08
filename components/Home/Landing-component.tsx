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
import flightPortal from '@/public/flightPortal.svg';
import cloud from '@/public/cloud.svg';
import Line from '@/public/Line.svg';
import { ExpertTips } from "./Expert-tips";
import { AboutUs } from "./About";
import { ContactUs } from "./Contact";
import Footer from "../Footer/footer";



type props = {

}
const LandingComponent: FC<props> = ({ }) => {
    return (
        <>
            <div className="h-screen relative block">
                <Image
                    src={home_img_1}
                    alt="flight seat"
                    fill
                    className="object-cover"
                />
                <div className="absolute w-full flex justify-center">
                    <div className="w-10/12 h-screen">
                        <NavBar />

                        {/* landing page header title */}
                        <div className="mt-28 text-white flex justify-center items-center">
                            <div className="w-[70%] text-4xl leading-relaxed text-center headerText">
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
                                    <form className="basis-full flex justify-between items-center gap-4">
                                        <div className="flex flex-col gap-2 text-xs">
                                            <div className="font-semibold flex gap-1 items-center">
                                                <GiAirplaneDeparture className="text-sm" />
                                                <p>From</p>
                                            </div>
                                            <div className="">
                                                <input
                                                    type={"text"}
                                                    className="outline-none focus:border-b-4 focus:border-[#0C68BE]"
                                                    placeholder="Flight from?" />
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2 text-xs">
                                            <div className="font-semibold flex gap-1 items-center">
                                                <GiAirplaneArrival className="text-sm" />
                                                <p>To</p>
                                            </div>
                                            <div className="">
                                                <input
                                                    type={"text"}
                                                    className="outline-none focus:border-b-4 focus:border-[#0C68BE]"
                                                    placeholder="Where To?" />
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2 text-xs">
                                            <div className="font-semibold flex gap-2 items-center">
                                                <RxCalendar className="text-sm" />
                                                <p>Depart</p>
                                            </div>
                                            <div className="">
                                                <input
                                                    type={"date"}
                                                    className="outline-none focus:border-b-4 focus:border-[#0C68BE]"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2 text-xs">
                                            <div className="font-semibold flex gap-2 items-center">
                                                <RxCalendar className="text-sm" />
                                                <p>Return</p>
                                            </div>
                                            <div className="">
                                                <input
                                                    type={"date"}
                                                    className="outline-none focus:border-b-4 focus:border-[#0C68BE]"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2 text-xs">
                                            <div className="font-semibold flex gap-1 items-center">
                                                <MdOutlineAirlineSeatReclineExtra className="text-lg" />
                                                <p>cabin class travelers</p>
                                            </div>
                                            <div className="">
                                                <input
                                                    type={"text"}
                                                    className="outline-none focus:border-b-4 focus:border-[#0C68BE]"
                                                    placeholder="1 adult Economy" />
                                            </div>
                                        </div>
                                        <button type="submit" className="text-md text-white bg-[#113B75] rounded-md px-5 py-3">
                                            <BiSearch />
                                        </button>
                                    </form>
                                </div>

                            </div>
                        </div>

                        {/* other airlines */}
                        <ExternalAirlines />
                    </div>
                </div>
            </div>

            <div id="bg-cloud" className="w-full p-4 flex justify-center">
                <div className="w-4/5 h-auto py-16">
                    <p className="text-xl font-semibold text-[#2C53B8] text-center pb-4">What flight portal users are saying - 4.9&nbsp;rating</p>
                    {/* user ratings */}
                    <UserExperienceRatings />
                </div>
            </div>


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

            {/* How it works */}
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