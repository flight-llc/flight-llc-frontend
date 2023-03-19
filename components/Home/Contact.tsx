import React, { FC, useState } from 'react';
import facebook from '@/public/facebook.jpeg';
import Image from 'next/image';
import {AiFillFacebook, AiFillLinkedin} from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { useMutation } from 'react-query';
import { ContactUsObjectInterface } from '@/utils/types';
import axios from 'axios';
import { Loader } from '../Loader/Loader';
import { showToast, validateEmail, validatePhoneNumberString } from '@/utils/helpers';
import https from 'https';


const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
});

type props = {
    setTimer ?: any
}

export const ContactUs: FC<props> = ({setTimer}) => {
    const [contactDetails, setContactDetails] = useState<ContactUsObjectInterface>({
        name : '',
        message : '',
        email : '',
        phone : '',
        smsQuote :false
    });
    
    const mutation = useMutation(
        {
            mutationFn : (contactDetails : any) => {
                return axios.post(`${process.env.NEXT_PUBLIC_BACKEND_HOST}web/contact-us/create`, contactDetails,{
                   headers:{
                    'Content-Type' : 'application/json',
                    'Authorization' : `Bearer ${process.env.NEXT_PUBLIC_USER_TOKEN}`
                   },
                   httpsAgent: httpsAgent,
                }).catch(err => err);
            },
            onSuccess : data => {
                setTimer(0);
                showToast({type : 'success',message : 'Request Sent'});
            },
            onError : err => {
                setTimer(0);
                showToast({type : 'success',message : 'Request Not Sent'});
                console.log(err);
            }
        }
    );
    const {isSuccess , isLoading, isError, mutate} = mutation;


    const {log} = console;
    const onChangeEmailHandler = ({target} : React.ChangeEvent<HTMLInputElement>) => {
        const {value} = target;
        setContactDetails({...contactDetails, email : value});
    }

    const onChangeNameHandler = ({target} : React.ChangeEvent<HTMLInputElement>) : void => {
        const { value } = target;
        setContactDetails({...contactDetails, name : value});
    }

    const onChangePhoneNumberHandler = ({target} : React.ChangeEvent<HTMLInputElement>) : void => {
        const { value } = target;
        setContactDetails({...contactDetails, phone: value});
        console.log(validatePhoneNumberString(value));
    }

    const onChangeMessageHandler = ({target}: React.ChangeEvent<HTMLTextAreaElement>) : void => {
        const {value} = target;
        setContactDetails({...contactDetails, message : value});
    }

    const onChangeSmsCheckBoxHandler = ({target} : React.ChangeEvent<HTMLInputElement>) : void =>{
        const { checked } = target;
        setContactDetails({...contactDetails, smsQuote : checked});
    }

    const onSubmitFormHandler = async (event : React.SyntheticEvent<HTMLFormElement>) : Promise<void> => {
        event.preventDefault();
        setTimer(1);
        const {name, message, email, phone, smsQuote} = contactDetails
        mutate({name,message,email,phone,smsQuote});
        if(isSuccess)setContactDetails({...contactDetails, name : '', message:'', email : '', phone:'', smsQuote : false});
    }

    const disableButton = () => {
        const {name, email, phone, message} = contactDetails;
        if(!email && !phone && !name && !phone) return false;

        if(!validateEmail(email) || 
        !validatePhoneNumberString(phone) ||
        !message ||
        !name)
        return true;

        return false;
    }
    React.useEffect(() => {
        console.log({contactDetails});
    },[contactDetails]);
    return (
        <>
        <div className="w-full bg-white text-black flex justify-center" id='ContactUs'>
            <div className="w-3/5 my-8">
                <p className="text-center uppercase text-[#6E7491] text-lg font-semibold my-8">Contact us</p>

                <div className="text-[#6E7491] text-center text-sm py-8">
                <p className="our-travel-specialis valign-text-middle our-travel nunitosans-normal-storm-gray-18">
                    Our travel specialists, who are fully committed to providing excellent service, are available to help with
                    all of<br/> 
                    your travel requirements or inquiries. Regardless of your starting point or desired destination, we
                    can make your
                    <br/>
                    journey comfortable and convenient at a discount of 15-40%. Please complete the form below and a
                    <br/> representative will reach out to you promptly.
                </p>

                    <section className="w-full flex justify-center">
                        <form 
                        id="contact-form" 
                        className="w-1/2 my-12" 
                        onSubmit={onSubmitFormHandler}>
                            <input type="email"
                                className={contactDetails.email && !validateEmail(contactDetails.email) 
                                ?"w-full outline-none border text-sm border-red-500 p-2.5 mb-4"
                                :"w-full outline-none border text-sm border-[#A1B0CC] p-2.5 mb-4"
                                }
                                placeholder="Email" 
                                required
                                value={contactDetails.email}
                                onChange={onChangeEmailHandler}/>
                            <br />
                            <input type="text"
                                placeholder="Your name"
                                className="w-full outline-none border text-sm border-[#A1B0CC] p-2.5 mb-4" 
                                required
                                value={contactDetails.name}
                                onChange={onChangeNameHandler}/>
                            <br />
                            <input
                                type="text"
                                placeholder="Phone number"
                                className={contactDetails.phone && !validatePhoneNumberString(contactDetails.phone) 
                                    ?"w-full outline-none border text-sm border-red-500 p-2.5 mb-4"
                                    : "w-full outline-none border text-sm border-[#A1B0CC] p-2.5 mb-4"
                                } 
                                required
                                maxLength={20}
                                value={contactDetails.phone}
                                onChange={onChangePhoneNumberHandler}/>
                            <br />
                            <textarea rows={4}
                                placeholder="Message"
                                className="w-full outline-none border text-sm border-[#A1B0CC] p-2.5 mb-4" 
                                required
                                value={contactDetails.message}
                                onChange={onChangeMessageHandler}/>
                            <br />
                            <div className="w-full flex justify-start gap-2">
                                <input
                                    type="checkbox"
                                    onChange={onChangeSmsCheckBoxHandler}
                                    id="sms" />
                                <label htmlFor="sms" className="text-sm text-[#A1B0CC]">
                                    Send price quotes by SMS
                                </label>
                            </div>
                            <br />
                            <input
                                type="Submit"
                                defaultValue="Contact us"
                                disabled={disableButton()}
                                className="w-full 
                                outline-none capitalize 
                                bg-[#0C68BE] cursor-pointer 
                                text-white p-2.5 mb-4
                                disabled:bg-[#EFF0F6]" />
                        </form>
                    </section>

                    <section className="flex justify-center">
                        <div className="w-full">
                            <div className="w-px h-12 bg-[#6E7491] mx-auto mb-8" />
                            <p className="text-center text-xs">24/7 CUSTOMER SERVICE&emsp;<strong>+1 310 749 56 56</strong></p>
                            <div className='w-full flex justify-center gap-8 mt-12'>
                                <Image src="/facebook.jpeg" alt="" width={30} height={20}/>
                                <BsInstagram className='text-3xl text-[#8C3AAA]'/>
                                <AiFillLinkedin className='text-[#0A66C2] text-3xl'/>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        <div className="text-xs my-16 p-6 text-center text-[#6E7491]">
            <p>
                *Price shown is a Round Trip fare in business class per person and based on weekday travel (Monday-Thursday).
                The price is total includes all taxes and fees and is in USD.
                The fares will vary based on class of travel availability,
                <br/>airline and city of departure.
                Business-Class.com will not identify all travel partners or details
                so not to compete with retail sales of our partners. Savings up to 40%
                off are based on un-restricted fares of major airlines and can
                <br/>vary depending on the fare rules.
                All fares are non-refundable and cannot be exchanged or transferred.
                Please call us directly to check the most current prices and availability.
                Other restrictions may apply. All fares are subject to
                <br/>change until ticketed.
                FREE EXCHANGE - our agreement with all major Carriers is to shelter passengers from the inconvenience of COVID-19
                related delays and cancellations. If the travel is to/from one of these affected areas,
                <br/>
                passenger may be eligible to reschedule with no change fee within
                the limitations of those policies.
                Fare and/or tax difference may apply.<br/>
            </p>
        </div>
        </>
    );
}