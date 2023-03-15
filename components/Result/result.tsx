import {FC} from 'react';
import { NavBar } from '../Nav/Nav-component';
import result from '@/public/result.svg';
import Image from 'next/image';
import {HiOutlineArrowsUpDown} from 'react-icons/hi2';
import Result_Airlines from '@/public/Result_Airlines.png';
import { ContactUs } from '../Home/Contact';
import Footer from '../Footer/footer';
import { HowItWorks } from '../Home/how-it-works';
import { UserExperienceRatings } from '../Home/user-ratings-component';

const Result :FC = () => {
    return (
        <>
        <div className='w-10/12 py-4 mx-auto'>
            <NavBar textColor='text-[#113B75]'/>
            {/* title */}
            <div className="w-fit text-4xl my-12 leading-relaxed text-center headerText">
                <h1 className="bg-gradient-to-r from-[#113B75] to-[#0379E8]">Complete the request form to</h1>
                <h1 className="bg-gradient-to-r from-[#113B75] to-[#0379E8]">secure this discounted price</h1>
            </div>

            <div className='w-full flex bg-[#F6F6F6] rounded-xl'>
                <div className='basis-3/5 flex gap-4'>
                    <div className='basis-1/2 p-8'>
                        <p className='text-[#909090] text-xs py-2'>From</p>
                        <p className='text-xl text-[#113B75] pb-2'>Miami&nbsp;(MIA)</p>

                        <div className='w-full flex gap-2'>
                            <div className='bg-[#E7E7E7] h-px w-1/2 my-2'/>
                            <div className='text-[#113B75] text-xs w-fit'>
                                <p className='pb-1'>Round&nbsp;Trip</p>
                                <Image src={'/Arrows.svg'} alt="" width={22} height={22} className="mx-auto"/>
                            </div>
                        </div>
                        <div className=''>
                            <p className='text-[#909090] text-xs pb-2'>To</p>
                            <p className='text-xl text-[#113B75] pb-2'>Berlin&nbsp;(BLR)</p>
                        </div>
                        <div className='bg-[#E7E7E7] h-px w-1/2 my-2'/>
                        {/* Passenger Name */}
                        <div className='bg-white rounded-lg p-2 text-xs'>
                            <span className='text-[10px] text-[#909090]'>Name</span>
                            <p className='text-[#113B75] py-1'>Micheal Kors</p>
                        </div>
                        {/* Phone number with country code */}
                        <div className='bg-white rounded-lg p-2 text-xs my-4'>
                            <span className='text-[10px] text-[#909090]'>Phone Number</span>
                            <p className='text-[#113B75] pb-1 bg-[#eee] rounded-md py-0.5 px-1 w-fit'>
                                <span>+1-</span>
                            </p>
                        </div>

                        <div className="w-full flex justify-start gap-2">
                            <input
                                type="checkbox"
                                //value={""}
                                id="sms" />
                            <label htmlFor="sms" className="text-xs text-[#113B75]">
                                Send price quotes by SMS
                            </label>
                        </div>
                    </div>

                    <div className='basis-1/2 p-8'>
                        <div className='flex text-[#113B75] font-bold justify-center pb-4'>
                            <p className='text-4xl'>$2158</p>
                            <p className='text-sm'>&nbsp;*</p>
                        </div>
                        
                        {/* seat type */}
                        <div className='py-2'>       
                            <p className='text-[#909090] text-xs text-center'>Business</p>
                            <div className='bg-[#E7E7E7] h-px w-full my-2'/>
                        </div>  
                        <div className='flex justify-between items-center'>
                            {/* departure date */}
                            <div className='w-fit text-center'>
                                <p className='text-[#909090] text-xs text-center'>Departure</p>
                                <p className='text-[#113B75] font-semibold py-1'>02/05</p>
                            </div>
                            {/* return date */}
                            <div className='w-fit text-center'>
                                <p className='text-[#909090] text-xs text-center'>Return</p>
                                <p className='text-[#113B75] font-semibold py-1'>06/30</p>
                            </div>
                            {/* number of booked passengers for flight*/}
                            <div className='w-fit text-center'>
                                <p className='text-[#909090] text-xs text-center'>Passengers</p>
                                <p className='text-[#113B75] font-semibold py-1'>5</p>
                            </div>
                        </div>
                         {/* passenger Email */}
                        <div className='bg-white rounded-lg p-2 mt-6 text-xs'>
                            <span className='text-[10px] text-[#909090]'>Email</span>
                            <p className='text-[#113B75] py-1 font-semibold'>Korsmichaaelfk123@gmail.com</p>
                        </div>
                        <div className='bg-[#113B75] text-white rounded-lg p-3.5 text-center mt-4 cursor-pointer text-sm'>
                            <span>Send Request</span>
                        </div>
                    </div>
                </div>
                <div className='basis-2/5'>
                    <div className='w-full h-full'>
                        <Image
                        src={result}
                        alt=""
                        width={500}
                        height={500}
                        />
                    </div>
                </div>
            </div>

            <div className='w-full flex justify-center mt-4'>
                <Image
                src={Result_Airlines}
                alt=""
                width={800}
                height={800}
                />
            </div>

            <div className='text-[#6E7491] text-xs text-center mx-auto'>
                <p>*Price shown is a Round Trip fare in business class per person and based on weekday travel 
                    (Monday-Thursday). The price is total includes all taxes and fees and is in USD. 
                    The fares will vary based on class of travel availability,<br/> airline and city of departure. 
                    Business-Class.com will not identify all travel partners or details so not to compete with 
                    retail sales of our partners. Savings up to 40% off are based on un-restricted fares of ma
                    jor airlines and can<br/> vary depending on the fare rules. All fares are non-refundable and cannot be 
                    exchanged or transferred. Please call us directly to check the most current prices and availability. Other restrictions may apply. All fares are subject to<br/> 
                    change until ticketed. FREE EXCHANGE - our agreement with all major Carriers is to shelter passengers from the inconvenience of COVID-19 related delays and cancellations. If the travel is to/from one of these affected areas,<br/> 
                    passenger may be eligible to reschedule with no change fee within the limitations of those policies. Fare and/or tax difference may apply.</p>
            </div>
        </div>

        <div className='w-full'>
            {/* user ratings */}
            <UserExperienceRatings/>

            {/* How it works */}
            <HowItWorks/>
        </div>
        <div className='w-10/12 py-4 mx-auto'>
            <ContactUs/>
            <Footer/>
        </div>
        </>
        
    );
}

export default Result;