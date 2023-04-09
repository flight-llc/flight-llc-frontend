import {FC, useEffect, useState} from 'react';
import { NavBar } from '../Nav/Nav-component';
import result from '@/public/result.svg';
import Image from 'next/image';
import {HiOutlineArrowsUpDown} from 'react-icons/hi2';
import Result_Airlines from '@/public/Result_Airlines.png';
import { ContactUs } from '../Home/Contact';
import Footer from '../Footer/footer';
import { HowItWorks } from '../Home/how-it-works';
import { UserExperienceRatings } from '../Home/user-ratings-component';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { Loader } from '../Loader/Loader';
import { getParam, showToast, toTitleCase, validateEmail, validatePhoneNumberString } from '@/utils/helpers';
import { NextRouter, useRouter } from 'next/router';
import moment from 'moment';
import PhoneInput from 'react-phone-input-2'

type Props={
    average : number,
    data : any;
}

const defaultPayload = {
    name :'',
    email : '',
    phone : '',
    smsPriceQuote :  false
};

const Result :FC<Props> = ({average, data}) => {
    const router :NextRouter = useRouter();
    const {
        isLoading : isPatchLoader, 
        isSuccess : isPatchSuccessful, 
        isError, 
        mutate} = useMutation((payload : any) => {
            showToast({ type: 'success', message: 'Confirming Flight' });
        return axios.patch(`${process.env.NEXT_PUBLIC_BACKEND_HOST}flights/update-flight-booking-status`, payload,
        {
            headers:{
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${process.env.NEXT_PUBLIC_USER_TOKEN}`
            }
        }).then(data => {
            showToast({ type: 'success', message: 'Flight Confirmed. Redirecting...' });
            setDetails({...defaultPayload});
            router.back();
            return data;
        }).catch(err => {
            showToast({ type: 'failed', message: 'Flight failed to be confirmed.' });
            return err;
        });
    }, {
        onSuccess: (data : any) => {
            console.log('data', data);
            showToast({ message: 'Flight Booked successfully', type: 'success' });
        },
        onError: (error : any) => {
            console.error(error);
            showToast({ message: 'Flight Booking failed, please try again.', type: 'error' });
        },
    }); 
    const [details, setDetails] = useState({...defaultPayload}) 
    const [flightId, setFlightId] = useState('');
    const { data : queryResponseData, isLoading, isFetched } = useQuery(
        {
            queryKey: ['find-user-by-token'],
            queryFn: () => {
                const flightId: string | null = getParam('flight');
                setFlightId(flightId + '');
                return axios.get(`${process.env.NEXT_PUBLIC_BACKEND_HOST}flights/get-flight-booking/${router.query.uuid}`,{
                    headers : {
                        'Content-Type' : 'application/json',
                        'Authorization' : `Bearer ${process.env.NEXT_PUBLIC_USER_TOKEN}`
                    }
                }).catch(err => err);
            },
            refetchOnWindowFocus: false
        }
    );
    const onChangeNameHandler = ({target}:React.ChangeEvent<HTMLInputElement>) :void => {
        const {value : name} = target;
        setDetails({...details, name});
    } 

    const onChangeEmailHandler = ({target}:React.ChangeEvent<HTMLInputElement>) :void => {
        const {value :email} = target;
        setDetails({...details, email});
    } 

    const onChangePhoneNumberHandler = ({target}: any) :void => {
        // React.ChangeEvent<HTMLInputElement>
        let phone;
        if (target && target.value) {
            phone = target.value;
        } else {
            phone = target;
        }
        // const {value : phone} = target;
        setDetails({...details, phone});
    } 

    const onChangeSmsPriceQuotesHandler = ({target}:React.ChangeEvent<HTMLInputElement>) :void => {
        const {checked} = target;
        setDetails({...details, smsPriceQuote : checked});
    } 

    const sendPatchRequestForFlightBooked = () => {
        const {query} = router;
        const {name, email, phone, smsPriceQuote} = details;
        mutate({
            name,
            email,
            phone,
            uuid: query.uuid,
            smsPriceQuote
        });
    }

    const disableButton = () => {
        const {name, email, phone} = details;
        if(!email && !phone && !name && !phone) return false;

        if(!validateEmail(email) || 
        !validatePhoneNumberString(phone) ||
        !name)
        return true;

        return false;
    }
    return (
        <>
        <div className='w-10/12 py-4 mx-auto'>
            <NavBar textColor='text-[#113B75]' page='result' />
            {/* title */}
            <div className="w-fit text-4xl my-12 leading-relaxed text-center headerText">
                <h1 className="bg-gradient-to-r from-[#113B75] to-[#0379E8]">Complete the request form to</h1>
                <h1 className="bg-gradient-to-r from-[#113B75] to-[#0379E8]">secure this discounted price</h1>
            </div>

            <div className='w-full flex bg-[#F6F6F6] rounded-xl'>
                <div className='basis-3/5 flex gap-4'>
                    <div className='basis-1/2 p-8'>
                        <div style={{ height: 200 }}>
                            <p className='text-[#909090] text-xs py-2'>From</p>
                            <p className='text-xl text-[#113B75] pb-2'>
                                {toTitleCase(queryResponseData?.data?.data?.fromLocationDTO.city || '')}&nbsp;
                                {`(${(queryResponseData?.data?.data?.fromLocationDTO.IATA || '')})`}
                            </p>

                            <div className='w-full flex gap-2'>
                                <div className='bg-[#E7E7E7] h-px w-1/2 my-2'/>
                                <div className='text-[#113B75] text-xs w-fit'>
                                    <p className='pb-1'>{queryResponseData?.data?.data?.returnDate ? 'RoundTrip' : 'OneWay'}</p>
                                    <Image src={'/Arrows.svg'} alt="" width={22} height={22} className="mx-auto"/>
                                </div>
                            </div>

                            <div className=''>
                                <p className='text-[#909090] text-xs pb-2'>To</p>
                                <p className='text-xl text-[#113B75] pb-2'>
                                {toTitleCase(queryResponseData?.data?.data?.toLocationDTO.city || '')}&nbsp;
                                {`(${(queryResponseData?.data?.data?.toLocationDTO.IATA || '')})`}
                                </p>
                            </div>
                            <div className='bg-[#E7E7E7] h-px w-1/2 my-2'/>
                        </div>
                        {/* Passenger Name */}
                        <div style={{height: 150, }}>
                            <div className='bg-white rounded-lg p-2 text-xs'>
                                <span className='text-[10px] text-[#909090]'>Name</span>
                                <input 
                                type={'text'} 
                                defaultValue={(queryResponseData?.data?.data?.name || '')}
                                className='text-[#113B75] py-1 font-semibold outline-none w-full'
                                placeholder='Micheal Kors'
                                onChange={onChangeNameHandler}
                                />
                            </div>
                            {/* Phone number with country code */}

                            <div className={`${details.phone && !validatePhoneNumberString(details.phone)
                            ? 'bg-white rounded-lg p-2 text-xs my-4 border border-red-500'
                            : 'bg-white rounded-lg p-2 text-xs my-4'}`}>
                                <span className='text-[10px] text-[#909090]'>Phone Number</span>
                                <PhoneInput
                                    country={'us'}
                                    inputStyle={{ width: '15vw', border : 'none'}}
                                    // value={this.state.phone}
                                    // (queryResponseData?.data?.data?.phone || '')
                                    onChange={(phone : any) => onChangePhoneNumberHandler(phone)}
                                />
                                {/* <input 
                                type={'text'}
                                defaultValue={(queryResponseData?.data?.data?.phone || '')} 
                                className='text-[#113B75] py-1 font-semibold outline-none w-full'
                                placeholder='+1'
                                onChange={onChangePhoneNumberHandler}/> */}
                            </div>
                        </div>

                        <div className="w-full flex justify-start gap-2">
                            <input
                                type="checkbox"
                                onChange={onChangeSmsPriceQuotesHandler}
                                id="sms" />
                            <label htmlFor="sms" className="text-xs text-[#113B75]">
                                Send price quotes by SMS
                            </label>
                        </div>
                    </div>

                    <div className='basis-1/2 p-8'>
                        <div style={{ height: 200 }}>
                            <div className='flex text-[#113B75] font-bold justify-center pb-4'>
                                <p className='text-4xl'>${(queryResponseData?.data?.data?.totalCost || '-')}</p>
                                <p className='text-sm'>&nbsp;*</p>
                            </div>
                            
                            {/* seat type */}
                            <div className='py-2'>
                                <p className='text-[#909090] text-xs text-center'>{(queryResponseData?.data?.data?.cabinClass || '')}</p>
                                <div className='bg-[#E7E7E7] h-px w-full my-2'/>
                            </div>  
                            <div className='flex justify-between items-center'>
                                {/* departure date */}
                                <div className='w-fit text-center'>
                                    <p className='text-[#909090] text-xs text-center'>Departure</p>
                                    <p className='text-[#113B75] font-semibold py-1'>
                                        {moment(new Date(queryResponseData?.data?.data?.departDate)).format('DD/MM')}
                                    </p>
                                </div>
                                {/* return date */}
                                {queryResponseData?.data?.data?.returnDate && 
                                    <div className='w-fit text-center'>
                                        <p className='text-[#909090] text-xs text-center'>Return</p>
                                        <p className='text-[#113B75] font-semibold py-1'>
                                        {moment(new Date(queryResponseData?.data?.data?.returnDate)).format("DD/MM")}
                                        </p>
                                    </div>
                                }
                                
                                {/* number of booked passengers for flight*/}
                                <div className='w-fit text-center'>
                                    <p className='text-[#909090] text-xs text-center'>Passengers</p>
                                    <p className='text-[#113B75] font-semibold py-1'>{(queryResponseData?.data?.data?.noOfPersons || '')}</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ height: 150, }} >
                            <div  className={`${details.email && !validateEmail(details.email)
                            ? 'bg-white rounded-lg p-2 text-xs w-full border border-red-500'
                            : 'bg-white rounded-lg p-2 text-xs w-full'}`}>
                                <span className='text-[10px] text-[#909090]'>Email</span>
                                <input 
                                type={'email'} 
                                defaultValue={(queryResponseData?.data?.data?.email || '')}
                                className='text-[#113B75] py-1 font-semibold outline-none w-full'
                                placeholder='Korsmichaaelfk123@gmail.com'
                                onChange={onChangeEmailHandler}/>
                            </div>
                            <input 
                                type={'submit'}
                                value="Send Request"
                                disabled={disableButton()}
                                className='w-full bg-[#113B75] 
                                text-white rounded-lg p-3.5 
                                text-center mt-5 cursor-pointer 
                                text-sm disabled:bg-[#EFF0F6]'
                                onClick={sendPatchRequestForFlightBooked}/>
                        </div>
                        
                    </div>
                </div>
                <div className='basis-2/5'>
                    <div className='w-full h-full'>
                        <Image
                        src={result}
                        alt=""
                        // width={500}
                        // height={500}
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
        </div>
        <div className="text-xs p-1 text-center text-[#6E7491]">
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

        <div className='w-full'>
            {/* user ratings */}
            <UserExperienceRatings comments={data} average={average}/>

            {/* How it works */}
            <HowItWorks/>
        </div>
        <ContactUs/>
        <div className='w-10/12 py-4 mx-auto'>
            <Footer/>
        </div>
        </>
        
    );
}

export default Result;