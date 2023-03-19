import { FC, useEffect, useState } from 'react';
import { GiAirplaneArrival, GiAirplaneDeparture } from 'react-icons/gi';
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';
import { RxCalendar } from 'react-icons/rx';
import Image from 'next/image';
import Close from '@/public/Close.svg';
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { IBookFlightPayload } from '@/utils/types';
import axios from 'axios';
import https from 'https';
import {NextRouter, useRouter} from 'next/router';
import { Loader } from '../Loader/Loader';
import { useMutation } from 'react-query';
import { showToast } from '@/utils/helpers';
import Select from 'react-dropdown-select';
//import { bookFlightAction } from '@/utils/helpers';

type props ={
    bookFlight : any,
    locations : any,
    setTimer : any
} 

const defaultPayload = {
    fromIATA: "",
    toIATA: "",
    departDate: "2023-03-16T09:24:48.320Z",
    returnDate: "2023-03-16T09:24:48.320Z",
    email: "",
    fromLocation: "",
    fromRegion: "",
    toLocation: "",
    toRegion: "",
    noOfPersons: 1,
    cabinClass: "PremiumEconomy",
    name: "",
    phone: "",
    smsPriceQuote: false
}


const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
});

export const MultiCityForm: FC<props> = ({bookFlight, locations, setTimer}) => {
    const [person, setPerson] = useState({
        name : '',
        email : '',
        phone : ''
    });

    const {
        register,
        formState: { isValid, isSubmitting, isSubmitSuccessful },
        control,
        handleSubmit,
        setError,
        setValue,
        getValues,
        watch,
        reset,
    } = useForm<any>();
    const { fields, append , remove} = useFieldArray<IBookFlightPayload>({
        control,
        name: "flights",
    });
    const router : NextRouter = useRouter();
    const bookFlightAction = async (bookedFlightsPayload: any[]) => {
        const result = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_HOST}flights/book-flight`, bookedFlightsPayload, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_USER_TOKEN}`
            },
            httpsAgent: httpsAgent,
        }).catch(err => err);
        return result;
    };
    const mutation = useMutation((bookedFlightsPayload: any[]) => {
        return bookFlightAction(bookedFlightsPayload).then((data) => data);
    }, {
        onSuccess: data => {
            const responseData: any = data['data'];
            if (responseData && responseData['status']) {
                if (responseData && responseData.data && responseData.data.flights.length > 0) {
                    router.push({
                        pathname: '/result',
                        query: `uuid=${responseData.data.flights[0].uuid}`
                    });
                }
            }
            else {
                if (responseData && !responseData['status']) {
                    return showToast({ message: responseData['message'] || 'Trip could not be found, please try again later.' , type: 'error' });
                }
                showToast({ message: 'Failed to find trip information, please try again later.' , type: 'error' });
            }
            setTimer(0);
        },
        onError : error => {
            showToast({ message: 'Flight Booking failed, please try again.', type: 'error'});
            console.log(error);
        }
    });

    const {mutate} = mutation;
    const appendFlight = () => {
        append(defaultPayload);
    }

    const onChangeNameHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { value : name } = target;
        setPerson({ ...person, name});
    }

    const onChangeEmailHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = target;
        setPerson({ ...person, email: value});
    }

    const onChangePhoneNumberHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = target;
        setPerson({ ...person, phone: value});
    }
      const onSubmitMultiCityFlights = () => {
        const loaderTimer = 1;
        setTimer(loaderTimer);

        const backendPayload = getValues().flights?.map((val : Partial<IBookFlightPayload>) => {
            const fromJsonObj = JSON.parse(val.fromIATA);
            const toJsonObj = JSON.parse(val.toIATA);
    
            return {
                fromIATA : fromJsonObj.IATA,
                toIATA : toJsonObj.IATA,
                departDate : val.departDate,
                email : person.email,
                fromLocation : fromJsonObj.location,
                fromRegion : fromJsonObj.region,
                toLocation :toJsonObj.location,
                toRegion : toJsonObj.region,
                noOfPersons : val.noOfPersons,
                cabinClass : val.cabinClass,
                name : person.name,
                phone : person.phone
            };
        });
        backendPayload.push(bookFlight);
        mutate(backendPayload);

    }
    useEffect(() => {   
        const subscription = watch((value, { name, type }) => console.log(value, name, type));
        return () => subscription.unsubscribe();
    },[watch]);

    return (
        <div className='w-full'>
        {/* <form onSubmit={onSubmitMultiCityFlights}> */}
            <div className='max-h-[17rem] overflow-y-auto mt-4 rounded-lg'>
                {fields && fields.map((data: any, i: number) =>
                    <div key={`key_${i}`} className='flex flex-row items-center gap-4'>
                        <div className="w-[95%] flex p-3 bg-white mb-3 rounded-lg">
                            <section className="basis-full flex justify-between items-center gap-4">
                                <div className="flex flex-col basis-1/4 gap-2 text-xs">
                                    <div className="font-semibold flex gap-1 items-center">
                                        <GiAirplaneDeparture className="text-base" />
                                        <p>From</p>
                                    </div>
                                    <div className="">
                                        <Select 
                                            className="outline-none focus:border-b focus:border-[#113B75] py-2 pr-2"   
                                            options={locations ? locations && locations.map((data: any, _: number) => {
                                            return {
                                                label: `${data.city} (${data.IATA})`,
                                                value: JSON.stringify(data),
                                            }
                                            }) : []}
                                            values={[]} 
                                            onChange={(value : any) => {
                                                setValue(`flights.${i}.fromIATA`,value[0]?.value);
                                            }} 
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col basis-1/4 gap-2 text-xs">
                                    <div className="font-semibold flex gap-1 items-center">
                                        <GiAirplaneArrival className="text-base" />
                                        <p>To</p>
                                    </div>
                                    <div className="">
                                        <Select 
                                            className="outline-none focus:border-b focus:border-[#113B75] py-2 pr-2"   
                                            options={locations ? locations && locations.map((data: any, _: number) => {
                                            return {
                                                label: `${data.city} (${data.IATA})`,
                                                value: JSON.stringify(data),
                                            }
                                            }) : []}
                                            values={[]} 
                                            onChange={(value : any) => setValue(`flights.${i}.toIATA`,value[0].value)} 
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col basis-1/4 gap-2 text-xs">
                                    <div className="font-semibold flex flex-row gap-2 items-center">
                                        <RxCalendar className="text-base" />
                                        <p>Depart</p>
                                    </div>
                                    <div className="">
                                        <input
                                            type={"date"}
                                            {...register(`flights.${i}.departDate`,{ required: true})}
                                            className="w-full outline-none focus:border-b focus:border-[#113B75] py-2"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col basis-1/4 gap-2 text-xs">
                                    <div className="font-semibold flex gap-1 items-center">
                                        <MdOutlineAirlineSeatReclineExtra className="text-lg" />
                                        <p>cabin&nbsp;class&nbsp;travelers</p>
                                    </div>
                                    <div className="flex flex-row items-center gap-1">
                                        <div className='basis-[10%]'>
                                            <input
                                                type={"text"}
                                                {...register(`flights.${i}.noOfPersons`,{ required: true})}
                                                className="outline-none focus:border-b w-full focus:border-[#113B75] px-1 py-2"
                                                defaultValue={1}
                                            />
                                        </div>
                                        <div className="basis-[92%]">
                                            <Select  
                                                className="outline-none focus:border-b focus:border-[#113B75] py-2"    
                                                options={[
                                                    { text:'Premium Economy', value: 'PremiumEconomy' },
                                                    { text:'Business', value: 'Business' },
                                                    { text:'First Class', value: 'FirstClass' }
                                                ].map((data: any, _: number) => {
                                                    return {
                                                        label: `${data.text}`,
                                                        value: data.value,
                                                    }
                                                })} 
                                                values={[]}
                                                onChange={(values : any) => setValue(`flights.${i}.cabinClass`,values[0]?.value)} 
                                            />
                                        </div>
                                        {/* <select
                                            //onChange={onChangeSelectCabin}
                                            {...register(`flights.${i}.cabinClass`,{ required: true})}
                                            className="w-full outline-none focus:border-b focus:border-[#113B75] py-2 pr-2">
                                            <option value="PremiumEconomy" className="text-[#ACB0B9]">Premium Economy</option>
                                            <option value="Business" className="text-[#ACB0B9]">Business</option>
                                            <option value="FirstClass" className="text-[#ACB0B9]">First Class</option>
                                        </select> */}
                                    </div>
                                </div>
                            </section>
                        </div>
                        <section className='' onClick={() => remove(i)}>
                            <Image
                                src={Close}
                                alt=""
                                width={15}
                                height={15}
                            />
                        </section>
                    </div>
                )}
            </div>


            <div className='w-[95%] flex flex-column gap-2'>
                <div className='w-full flex justify-between items-center gap-4'>
                    <div className='w-1/4 bg-white rounded-lg p-2 text-xs'>
                        <span className='text-[10px] text-[#909090]'>Name</span>
                        <input
                            type={'text'}
                            //defaultValue={queryResponseData?.data?.data?.name}
                            className='text-[#113B75] py-1 font-semibold outline-none w-full'
                            placeholder='Micheal Kors'
                            onChange={onChangeNameHandler}
                        />
                    </div>
                    {/* Phone number with country code */}
                    <div className='w-1/4  bg-white rounded-lg p-2 text-xs my-4'>
                        <span className='text-[10px] text-[#909090]'>Phone Number</span>
                        <input
                            type={'text'}
                            //defaultValue={queryResponseData?.data?.data?.phone} 
                            className='text-[#113B75] py-1 font-semibold outline-none w-full'
                            placeholder='+1'
                            onChange={onChangePhoneNumberHandler}
                        />
                    </div>
                    <div className='w-1/4 bg-white rounded-lg p-2 text-xs my-4'>
                        <span className='text-[10px] text-[#909090]'>email</span>
                        <input
                            type={'text'}
                            //defaultValue={queryResponseData?.data?.data?.phone} 
                            className='text-[#113B75] py-1 font-semibold outline-none w-full'
                            placeholder='kors@gmail.com'
                            onChange={onChangeEmailHandler}
                        />
                    </div>
                    <input
                        type={'submit'}
                        value={"Send Request"}
                        onClick={onSubmitMultiCityFlights}
                        readOnly
                        className='bg-[#113B75] text-white rounded-lg p-3.5 px-6 text-center w-fit mt-4 text-xs' 
                    />
                </div>
            </div>
            <div className='w-fit'>
                <button 
                onClick={appendFlight}
                className='inline-block mr-2 bg-[#A1A1A1] text-white rounded-lg p-3.5 text-center mt-4 text-xs'>
                    Add Flight
                </button>
                <button
                onClick={() => setValue('flights',[])} 
                className='inline-block mr-2 bg-[#A1A1A1] text-white rounded-lg p-3.5 text-center mt-4 text-xs'>
                    Clear all
                </button>
            </div>
        {/* </form> */}
    </div>
    );
}


