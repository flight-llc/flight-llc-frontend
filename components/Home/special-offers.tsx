import { SpecialOffersInterface } from "@/utils/types";
import Image from "next/image";
import { FC, useState } from 'react';
import { BsStarFill } from "react-icons/bs";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import London from '@/public/London.jpeg';
import Barcelona from '@/public/Barcelona.jpeg';
import Netherlands from '@/public/Netherlands.jpeg';
import Istanbul from '@/public/Istanbul.jpeg';
import New_Delhi from '@/public/New_Delhi.jpeg';
import Bankok from '@/public/Bankok.jpeg';
import Seoul from '@/public/Seoul.jpeg';
import Rome from '@/public/Rome.svg';
import Lisbon from '@/public/Lisbon.svg';
import Athens from '@/public/Athens.svg';
import { ReadMore } from "../shared/Read-more";
import { Lazy, Pagination } from 'swiper';


// import 'swiper/css/lazy';
import 'swiper/css/pagination';

type props = {
    offers?: SpecialOffersInterface[]
}

const SpecialOffer: SpecialOffersInterface[] = [
    {
        image: London,
        name: "London",
        rating: 5,
        comment: "London is one of the world's most vibrant cities, and with a variety of flight options available, you can easily find business class flight deals and discount business class flights to this incredible destination. Using a Flight Portal search can help you compare prices and options, so you can book cheap business class airfares in advance and save money for all the experiences London has to offer. Once you arrive, explore the city's iconic landmarks like Big Ben, the Tower Bridge, and Buckingham Palace. Take a stroll through the picturesque neighborhoods of Notting Hill or Camden, and sample the diverse culinary scene, from traditional fish and chips to modern fusion cuisine. And for those seeking a little rest and relaxation, London's many parks and gardens, like Hyde Park and Kew Gardens, provide a welcome respite from the city's hustle and bustle. Whether you're traveling for business or leisure, London is a city that will delight and inspire you with its energy and charm.",
        price: 1780
    },
    {
        image: Barcelona,
        name: "Barcelona, Spain",
        rating: 5,
        comment: "Barcelona is a bustling city with a rich cultural history and a vibrant nightlife, and there are plenty of flight options available to get you there, including business class flight deals and discount business class flights. Use a business class flight search to compare prices and options, and book your cheap business class airfares in advance to save money and travel in comfort. Once you arrive, immerse yourself in the city's many attractions, from the towering Sagrada Familia to the bustling La Boqueria market. Take a stroll through the Gothic Quarter, and explore the city's many museums and galleries. And for those seeking a little rest and relaxation, Barcelona's beaches, like Barceloneta and Sant Sebastià, provide the perfect escape from the city's hustle and bustle. Whether you're traveling for business or pleasure, Barcelona is a city that will captivate you with its energy, beauty, and charm.",
        price: 1830
    },
    {
        image: Netherlands,
        name: "Armstadam,Netherlands",
        rating: 5,
        comment: "Amsterdam is a city of canals, bicycles, and art, and it's a destination that's popular with travelers of all kinds. Whether you're looking for business class flight deals or discount business class flights, a business class flight search can help you find the best prices and options for your trip. And by booking your cheap business class airfares in advance, you can travel in style and comfort without breaking the bank. Once you arrive in Amsterdam, there's plenty to see and do. Take a boat tour through the city's picturesque canals, visit the Van Gogh Museum to see some of the artist's most famous works, or rent a bike and explore the city's many parks and gardens. And if you're looking for a taste of local culture, visit the famous Albert Cuyp market or one of Amsterdam's many cozy brown cafes. With its unique charm and vibrant energy, Amsterdam is a city that's sure to leave a lasting impression on every traveler.",
        price: 1750
    },
    {
        image: Istanbul,
        name: "Istanbul,Turkey",
        rating: 5,
        comment: "Istanbul, the gateway between East and West, is a city of rich cultural history and stunning architecture. If you're planning a trip to Istanbul, you don't have to sacrifice comfort for affordability. With a business class flight search, you can find great business class flight deals and discount business class flights that allow you to travel in style and comfort. And by booking your cheap business class airfares in advance, you can enjoy the luxury of first-class travel without spending a fortune. Once you arrive in Istanbul, explore the city's many landmarks, from the iconic Hagia Sophia to the colorful Grand Bazaar. Take a sunset cruise along the Bosphorus, sample delicious Turkish cuisine at a local restaurant, or relax in a traditional Turkish bath. With its unique blend of European and Asian influences, Istanbul offers a one-of-a-kind travel experience that you won't forget.",
        price: 1570
    },
    {
        image: New_Delhi,
        name: "New Delhi,India",
        rating: 5,
        comment: "Delhi, the vibrant capital city of India, is a bustling metropolis that offers a mix of ancient history and modern culture. If you're planning a trip to Delhi, you can make it affordable and luxurious at the same time by using a business class flight search to find great deals on business class flight deals and discount business class flights. With cheap business class airfares, you can enjoy the comfort and convenience of first-class travel without breaking the bank. Once you arrive in Delhi, explore the city's many landmarks, such as the Red Fort, Jama Masjid, and Qutub Minar. Stroll through the vibrant markets, sample delicious street food, or take a rickshaw ride through the bustling streets. Whether you're traveling for business or pleasure, Delhi offers a unique travel experience that you won't forget.",
        price: 1650
    },
    {
        image: Bankok,
        name: "Rome, Italy",
        rating: 5,
        comment: "Bangkok, the capital city of Thailand, is a vibrant and exciting destination that offers a perfect blend of traditional and modern experiences. If you're planning a trip to Bangkok, you can make it an affordable and luxurious adventure by finding business class flight deals and discount business class flights using a business class flight search. By booking cheap business class airfares in advance, you can enjoy the comfort and convenience of premium travel without breaking the bank. Once you arrive in Bangkok, there's plenty to explore, from the bustling markets and vibrant nightlife to the ancient temples and grand palaces. Take a stroll through the city's many neighborhoods and discover the vibrant street food scene. Don't miss the opportunity to experience Thai culture through traditional performances and visit to the floating markets. Whether you're traveling for business or pleasure, Bangkok offers an unforgettable journey that you won't want to miss",
        price: 1570
    },
    {
        image: Seoul,
        name: "Seoul South Korea",
        rating: 5,
        comment: "Seoul, the capital of South Korea, is a modern metropolis that seamlessly blends traditional culture with modern technology. If you're planning a trip to Seoul, you can make it an affordable and luxurious adventure by finding business class flight deals and discount business class flights using a business class flight search. By booking cheap business class airfares in advance, you can enjoy the comfort and convenience of premium travel without breaking the bank. Once you arrive in Seoul, you'll be captivated by the city's stunning skyline, bustling street markets, and world-class dining scene. Take a tour of the city's many historic sites and experience the unique blend of ancient traditions and modern innovations. Don't miss the opportunity to explore the city's vibrant neighborhoods and indulge in its famous street food. Whether you're traveling for business or pleasure, Seoul is a destination that offers something for everyone.",
        price: 1670
    }
    ,
    {
        image: Lisbon,
        name: "Lisbon, Portugal",
        rating: 5,
        comment: "Lisbon is a dream destination for travelers seeking a perfect mix of history, culture, and relaxation. Finding your way to Lisbon is easy thanks to the wide variety of flight options available, including business class flight deals and discount business class flights. Use a business class flight search to compare prices and options, and book your cheap business class airfares in advance to ensure you get the best deals. Once you arrive, take a stroll through the narrow streets of Alfama and soak up the vibrant colors and sounds of this charming district. Sample the delicious Portuguese cuisine, from fresh seafood to traditional pastries like the famous pastel de nata. And for those seeking a little rest and relaxation, Lisbon's stunning beaches, such as Cascais and Estoril, are just a short drive away. Whether you're traveling for business or leisure, you'll find that Lisbon is a city that will capture your heart and leave you with unforgettable memories",
        price: 1765
    }
    ,
    {
        image: Athens,
        name: "Athens, Greece",
        rating: 5,
        comment: "Athens is a city steeped in history and culture, a must-see destination for any traveler. Finding your way to Athens is easy thanks to the wide variety of flight options available, including business class flight deals and discount business class flights. Use a business class flight search to compare prices and options, and book your cheap business class airfares in advance to ensure you get the best deals. Once you arrive, explore the ancient wonders of the city, including the iconic Acropolis and Parthenon. Take a stroll through the historic Plaka district and sample the delicious Greek cuisine, from savory moussaka to sweet baklava. And for those seeking a little rest and relaxation, Athens is just a short drive from the stunning beaches of the Athenian Riviera. Whether you're traveling for business or leisure, you'll find that Athens is a city that will captivate you with its rich history and warm hospitality.",
        price: 1830
    }
    ,
    {
        image: Rome,
        name: "Rome, Italy",
        rating: 5,
        comment: "Rome is a city like no other, filled with historic landmarks, stunning architecture, and delicious cuisine. Finding your way to Rome is easy thanks to the wide variety of flight options available, including business class flight deals and discount business class flights. Use a business class flight search to compare prices and options, and book your cheap business class airfares in advance to ensure you get the best deals. Once you arrive, explore the city's iconic landmarks like the Colosseum, the Roman Forum, and the Vatican City. Take a stroll through the charming Trastevere district and sample the mouth-watering Italian cuisine, from classic pizza to gelato. And for those seeking a little rest and relaxation, Rome is just a short drive from the stunning beaches of the Tyrrhenian Sea. Whether you're traveling for business or leisure, you'll find that Rome is a city that will leave you enchanted and yearning for more.",
        price: 1570
    }
];
export const SpecialOffers: FC<props> = ({ offers }) => {

    const [isReadMore, setIsReadMore] = useState<boolean>(true);

    return (
        <div className="my-4 p-12" id="deal">
            <Swiper
                slidesPerView={3}
                spaceBetween={32}
                grabCursor={true}
                navigation={true}
                modules={[Navigation]}
                breakpoints={{
                    // when window width is >= 480px
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 32
                    },
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 32
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 32
                    }
                }}
                className="mySwiper"
                style={{padding : '0 2rem'}}
            >
                {SpecialOffer && SpecialOffer.map((data: any, i: number) =>
                    <SwiperSlide key={i}>
                      <div className="">
                        <div className="bg-[#F1F1F2] rounded-3xl">
                            {/* <a href="#"> */}
                            <div id="deals-image-height" className="w-full h-[15rem] rounded-t-3xl">
                                {/* <object data={data.image} className="rounded-t-lg"></object> */}
                                <Image
                                src={data.image}
                                alt={data.name}
                                //fill 
                                id="deals-image-height"
                                className="rounded-t-3xl w-full h-[15rem]" />
                            </div>
                            {/* </a> className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" */}
                            <div className="px-4 py-2">
                                <div className="text-lg text-[#767E86] text-start">{data.name}</div>
                                <div className="flex text-xs text-[#FFC107] py-2 gap-2">
                                    <BsStarFill />
                                    <BsStarFill />
                                    <BsStarFill />
                                    <BsStarFill />
                                    <BsStarFill />
                                </div>
                                <ReadMore>
                                    {`${data.comment}`}
                                </ReadMore>

                                <div className="px-4 py-2 flex justify-between items-center mb-2">
                                    <section className="flex items-center">
                                        <span className="text-xs text-[#767E86]">From&nbsp;</span>
                                        <span className="text-[#0C68BE] text-2xl">${data.price}*</span>
                                    </section>
                                    <button className="px-6 py-3 bg-[#113B75] text-xs text-white rounded-lg">
                                        <span>Book</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                      </div>
                    </SwiperSlide>
                )}

            </Swiper>
        </div>
    );
}
