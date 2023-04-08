import { FC, useEffect, useState } from "react";
import home_img_1 from '@/public/home_img_1.svg';
import Image from 'next/image';
import { NavBar } from "../Nav/Nav-component";
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
import { IBookFlightPayload, UserReviewsResponseType } from "@/utils/types";
import { useMutation } from "react-query";
import axios from "axios";
import https from 'https';
import { NextRouter, useRouter } from "next/router";
import { Loader } from "../Loader/Loader";
import { MultiCityForm } from "./Multi-city-form";
import { showToast, toTitleCase } from "@/utils/helpers";
import Select from "react-dropdown-select";
import { ReactDropDownSelectStyled } from "@/pages/_app";
// import DatePicker from 'react-date-picker';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";


const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
});


type props = {
    data: UserReviewsResponseType,
    locations?: any,
    average: number
}

const defaultPayload = {
    fromIATA: "",
    toIATA: "",
    departDate: moment(new Date()).toString(),
    returnDate: moment(new Date()).toString(),
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
const LandingComponent: FC<props> = ({ data, locations, average }) => {
    const router: NextRouter = useRouter();

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
        return bookFlightAction(bookedFlightsPayload).then(data => data);
    }, {
        onSuccess: data => {
            const responseData: any = data['data'];
            if (responseData && responseData['status']) {
                if (responseData.data && responseData.data.flights.length > 0) {
                    router.push({
                        pathname: '/result',
                        query: `uuid=${responseData.data.flights[0].uuid}`
                    });
                    setTimer(0);
                }
            }
            else {
                setTimer(0);
                if (responseData && !responseData['status']) {
                    return showToast({ message: responseData['message'] || 'Trip could not be found, please try again later.', type: 'error' });
                }
                showToast({ message: 'Failed to find trip information, please try again later.', type: 'error' });
            }
        },
        onError: error => {
            setTimer(0);
            showToast({ message: 'Flight Booking failed, please try again.', type: 'error' });
            console.log(error);
        }
    })
    const { isLoading, isSuccess, mutate } = mutation;

    const [flightType, setFlightType] = useState({
        roundTrip: false,
        oneWay: false,
        multiCity: false
    });

    const [bookFlight, setBookFlight] = useState<IBookFlightPayload>(defaultPayload);
    const [returnDate, setReturnDate] = useState(new Date());

    const [timer, setTimer] = useState(0);

    const style = {
        control: (base: any) => ({
            ...base,
            border: '0 !important',
            // This line disable the blue border
            boxShadow: '0 !important',
            '&:hover': {
                border: '0 !important'
            }
        })

    }

    const onChangeOneWay = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { checked } = target;
        setFlightType({ ...flightType, oneWay: checked, roundTrip: false, multiCity: false });
    }

    const onChangeRoundTrip = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { checked } = target;
        setFlightType({ ...flightType, roundTrip: checked, oneWay: false, multiCity: false });
    }

    const onChangeMulti = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { checked } = target;
        setFlightType({ ...flightType, multiCity: checked, roundTrip: false, oneWay: false });
    }

    const onChangeSelectFrom = (value: any) => {
        if (value) {
            const { IATA: fromIATA, location: fromLocation, region: fromRegion } = JSON.parse(value);
            setBookFlight({ ...bookFlight, fromIATA, fromLocation, fromRegion });
        }
    }

    const onChangeSelectTo = (value: any) => {
        if (value) {
            const { IATA: toIATA, location: toLocation, region: toRegion } = JSON.parse(value);
            setBookFlight({ ...bookFlight, toIATA, toLocation, toRegion });
        }
    }

    const onChangeDepartureDate = (target: any) => {
        let departDate;
        if (target && target.value) {
            departDate = target.value;
        } else {
            departDate = target
        }
        // const { value: departDate } = target;
        console.log('departDate', departDate);
        setBookFlight({ ...bookFlight, departDate });
    }

    const onChangeReturnDate = (target: any) => {
        // const { value: returnDate } = target;
        
        let returnDate;
        if (target && target.value) {
            returnDate = target.value;
        } else {
            returnDate = target
        }

        console.log('returnDate', returnDate);

        setBookFlight({ ...bookFlight, returnDate });
        setReturnDate(returnDate);
    }

    const onChangeSelectCabin = (target: any) => {
        setBookFlight({ ...bookFlight, ...{ cabinClass: target } });
    }

    const onChangeNumberOfPersons = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { value: noOfPersons } = target;
        setBookFlight({ ...bookFlight, noOfPersons: Number.parseInt(noOfPersons) });
    }


    const OnsubmitHandlerForOneWayAndRoundTrip =
        async (event: React.SyntheticEvent<HTMLFormElement>)
            : Promise<void> => {
            event.preventDefault();
            const loaderTimer = 1;
            setTimer(loaderTimer);

            const {
                fromIATA,
                fromLocation,
                fromRegion,
                toIATA,
                toLocation,
                toRegion,
                departDate,
                returnDate,
                cabinClass,
                noOfPersons
            } = bookFlight;
            mutate([
                {
                    fromIATA,
                    toIATA,
                    departDate,
                    returnDate: flightType.roundTrip ? returnDate : null,
                    fromLocation,
                    fromRegion,
                    toLocation,
                    toRegion,
                    noOfPersons,
                    cabinClass
                }
            ]);

        }

        useEffect(() => {}, []);

    return (
        (timer > 0) ?
            <>
                <Loader
                    fromIATA={bookFlight.fromIATA}
                    toIATA={bookFlight.toIATA}
                />
            </>

            :
            <>
                {/* {flightType.multiCity ? "w-full min-h-[150vh] relative block" : "w-full min-h-[120vh] relative block"} */}
                <div className={flightType.multiCity ? 'w-full h-[135vh] relative block' :"w-full h-screen relative block"}>
                    <Image
                        src={home_img_1}
                        alt="flight seat"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute w-full flex justify-center items-center">
                        <div className="w-10/12 h-auto">
                            <NavBar textColor="text-white" page="landing" />

                            {/* landing page header title */}
                            <div className="text-white flex justify-center items-center w-full">
                                <div className={`${!flightType.multiCity
                                    ? 'mt-28 text-4xl leading-relaxed text-center headerText'
                                    : 'text-4xl leading-relaxed text-center headerText'}`}>
                                    <h1 className="bg-gradient-to-r from-[#EDEFF1] to-[#0379E8]">Elevate Your Travel Experience</h1>
                                    <h1 className="bg-gradient-to-r from-[#EDEFF1] to-[#0379E8]">and Save up to 40% on Business Class Flights!</h1>
                                </div>
                            </div>

                            {/* Travel info */}
                            <div className="w-full">
                                <form onSubmit={(e) => !flightType.multiCity ? OnsubmitHandlerForOneWayAndRoundTrip(e)
                                    : e.preventDefault()} className="w-full flex justify-center">
                                    <div className="lg:w-[90%] xl:w-[80%]">
                                        <div className="mt-12 md:w-[96.5%] bg-white border border-[#eee] rounded-lg p-4">
                                            <div className="border-b border-[#eee] flex justify-center items-center pb-3">
                                                <div className="flex flex-row gap-4 capitalize text-xs font-semibold">
                                                    <input type="radio"
                                                        defaultChecked
                                                        id="html"
                                                        name="fav_language"
                                                        defaultValue="one Way"
                                                        onChange={onChangeOneWay} />
                                                    <label htmlFor="html">one&nbsp;way</label>
                                                    <input
                                                        type="radio"
                                                        id="html"
                                                        name="fav_language"
                                                        defaultValue="Round Trip"
                                                        onChange={onChangeRoundTrip} />
                                                    <label htmlFor="html">round&nbsp;trip</label>
                                                    <input
                                                        type="radio"
                                                        id="html"
                                                        name="fav_language"
                                                        defaultValue="Multi city"
                                                        onChange={onChangeMulti} />
                                                    <label htmlFor="html">multi&nbsp;city</label>
                                                </div>
                                            </div>
                                            {/* travel form */}
                                            <div className="pt-2 px-4 basis-full flex justify-between items-center gap-4">
                                                <div className="flex flex-col basis-1/4 gap-2 text-xs">
                                                    <div className="font-semibold flex gap-1 items-center">
                                                        <GiAirplaneDeparture className="text-base" />
                                                        <p>From</p>
                                                    </div>
                                                    <div className="">
                                                        <ReactDropDownSelectStyled
                                                            required
                                                            placeholder="Flight From?"
                                                            options={locations ? locations && locations.map((data: any, _: number) => {
                                                                return {
                                                                    label: `${toTitleCase(data.city)} (${data.IATA})`,
                                                                    value: JSON.stringify(data),
                                                                }
                                                            }) : []}
                                                            values={[]}
                                                            onChange={(values: any) => onChangeSelectFrom(values[0]?.value)}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="flex flex-col basis-1/4 gap-2 text-xs">
                                                    <div className="font-semibold flex gap-1 items-center">
                                                        <GiAirplaneArrival className="text-base" />
                                                        <p>To</p>
                                                    </div>
                                                    <div className="">
                                                        <ReactDropDownSelectStyled
                                                            placeholder="Where To?"
                                                            options={locations ? locations && locations.map((data: any, _: number) => {
                                                                return {
                                                                    label: `${toTitleCase(data.city)} (${data.IATA})`,
                                                                    value: JSON.stringify(data),
                                                                }
                                                            }) : []}
                                                            values={[]}
                                                            onChange={(values: any) => onChangeSelectTo(values[0]?.value)} />
                                                    </div>
                                                </div>

                                                <div className="flex flex-col basis-1/4 gap-2 text-xs ">
                                                    <div className="font-semibold flex flex-row gap-2 items-center">
                                                        <RxCalendar className="text-base" />
                                                        <p>Depart</p>
                                                    </div>
                                                    <div className="">
                                                        {/* <input
                                                            type={"date"}
                                                            required
                                                            onChange={onChangeDepartureDate}
                                                            className="w-full outline-none
                                                        hover:border-b hover:border-[#113B75] py-2  
                                                        focus:border-b focus:border-[#113B75] py-2"
                                                        /> */}
                                                        <DatePicker 
                                                        className="w-full outline-none
                                                        hover:border-b hover:border-[#113B75] py-2  
                                                        focus:border-b focus:border-[#113B75] py-2"
                                                            selected={new Date(bookFlight.departDate)} 
                                                            allowSameDay={false}
                                                            minDate={new Date()}
                                                            onChange={(date: any) => onChangeDepartureDate(moment(date).format('YYYY/MM/DD'))} 
                                                        />
                                                    </div>
                                                </div>

                                                {flightType.roundTrip &&
                                                    <div className="flex flex-col basis-1/4 gap-2 text-xs">
                                                        <div className="font-semibold flex gap-2 items-center">
                                                            <RxCalendar className="text-sm" />
                                                            <p>Return</p>
                                                        </div>
                                                        <div className="">
                                                            {/* <input
                                                                type={"date"}
                                                                onChange={onChangeReturnDate}
                                                                required
                                                                className="w-full outline-none
                                                            hover:border-b hover:border-[#113B75] py-2 
                                                            focus:border-b focus:border-[#113B75] py-2"
                                                            /> */}
                                                            <DatePicker 
                                                            selected={new Date(returnDate)} 
                                                            allowSameDay={false}
                                                            minDate={new Date()}
                                                            onChange={(date: any) => onChangeReturnDate(moment(date).format('YYYY/MM/DD'))} 
                                                        />
                                                        </div>
                                                    </div>
                                                }

                                                <div className="flex flex-col basis-1/4 gap-2 text-xs">
                                                    <div className="font-semibold flex gap-1 items-center">
                                                        <MdOutlineAirlineSeatReclineExtra className="text-lg" />
                                                        <p>cabin&nbsp;class&nbsp;travelers</p>
                                                    </div>
                                                    <div className="flex flex-row items-center gap-1">
                                                        <div className="basis-4">
                                                            <input
                                                                type={"text"}
                                                                className="outline-none focus:border-b w-full focus:border-[#113B75] px-1 py-2"
                                                                defaultValue={1}
                                                                required
                                                                onChange={onChangeNumberOfPersons}
                                                            />
                                                        </div>

                                                        <div className="basis-[92%]">
                                                            <ReactDropDownSelectStyled
                                                                placeholder="Premium Economy"
                                                                required
                                                                options={[
                                                                    { text: 'Premium Economy', value: 'PremiumEconomy' },
                                                                    { text: 'Business', value: 'Business' },
                                                                    { text: 'First Class', value: 'FirstClass' }
                                                                ].map((data: any, _: number) => {
                                                                    return {
                                                                        label: `${data.text}`,
                                                                        value: data.value,
                                                                    }
                                                                })}
                                                                values={[]}
                                                                onChange={(values: any) => onChangeSelectCabin(values[0]?.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                {!flightType.multiCity &&
                                                    <div className="mt-3">
                                                        <button type="submit" className="text-sm text-white text-center bg-[#113B75] rounded-md py-3 px-6">
                                                            Search&nbsp;Flight
                                                        </button>
                                                    </div>
                                                }
                                            </div>
                                        </div>

                                        <div className=" w-full flex flex-column ">
                                            {flightType.multiCity &&
                                                <MultiCityForm bookFlight={bookFlight} locations={locations} setTimer={(e: any) => {
                                                    console.log('set timer func', e);
                                                    setTimer(1);
                                                }} />}
                                        </div>
                                    </div>
                                </form>
                            </div>

                            {/* other airlines */}
                            <ExternalAirlines />
                        </div>
                    </div>
                </div>

                {/* user ratings */}
                <div className="w-full">
                    <UserExperienceRatings comments={data} average={average} />

                    {/* special offers */}
                    <div className="w-full p-4 flex justify-center">
                        <div className="w-10/12 h-auto pt-16 pb-8">
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
                <HowItWorks />

                {/* Expert tips */}
                <ExpertTips />

                {/* About us */}
                <AboutUs />

                {/* contact us */}
                <ContactUs setTimer={setTimer} />

                {/* Footer */}
                <Footer />
            </>
    );
}

export default LandingComponent;