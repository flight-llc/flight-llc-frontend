import { SpecialOffersInterface } from "@/utils/types";
import Image from "next/image";
import Athens from '@/public/Athens.svg';
import Rome from '@/public/Rome.svg';
import Lisbon from '@/public/Lisbon.svg';
import { FC } from 'react';
import { BsStarFill, BsStar } from "react-icons/bs";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

type props = {
    offers?: SpecialOffersInterface[]
}

const SpecialOffer: SpecialOffersInterface[] = [
    {
        image: Lisbon,
        name: "Lisbon, Portugal",
        rating: 5,
        comment: "Indulge in Luxury for Less: Tips for Saving on Round Trip Business Class Flights to Lisbon. Save from 15-35% on round trip business class flight",
        price: 1765
    },
    {
        image: Athens,
        name: "Athens, Greece",
        rating: 5,
        comment: "Fly in Style on a Budget - Save on Round Trip Business Class Flights to Athens from 15-40% and Experience Greece's Rich History and Culture.",
        price: 1830
    },
    {
        image: Rome,
        name: "Rome, Italy",
        rating: 5,
        comment: "Discover the Eternal City in Comfort: Save on Round Trip Business Class Flights to Rome from 15-25% and Explore Italy's Iconic Capital",
        price: 1570
    }
];
export const SpecialOffers: FC<props> = ({ offers }) => {

    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {[0, 1, 2, 3].map((_: number) =>
                <SwiperSlide key={_}>
                    <div className="flex justify-around m-6">
                        {SpecialOffer && SpecialOffer.map((data: any, i: number) =>
                            <div key={i} className="w-[26%] text-start rounded-xl overflow-hidden bg-[#F1F1F2]">
                                <Image
                                    src={data.image}
                                    alt={data.name}
                                    width={500}
                                    height={500}
                                />
                                <div className="px-4 py-2">
                                    <div className="text-lg text-[#767E86]">{data.name}</div>
                                    <div className="flex text-xs text-[#FFC107] py-2 gap-2">
                                        <BsStarFill />
                                        <BsStarFill />
                                        <BsStarFill />
                                        <BsStarFill />
                                        <BsStarFill />
                                    </div>
                                    <p className="text-black text-xs pt-2">
                                        {data.comment}
                                    </p>
                                </div>
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
                        )}
                    </div>
                </SwiperSlide>
            )}
        </Swiper>
    );
}