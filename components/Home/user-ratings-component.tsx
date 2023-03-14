import { UserExperienceRatingsInterface } from "@/utils/types";
import { FC } from 'react';
import { BsStarFill, BsStar } from 'react-icons/bs';
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";


type props = {
  comments?: [UserExperienceRatingsInterface]
}
export const UserExperienceRatings: FC<props> = ({ comments }) => {

  return (

    <div id="bg-cloud" className="w-full p-4 flex justify-center">
      <div className="w-4/5 h-auto py-16">
        <p className="text-xl font-semibold text-[#2C53B8] text-center pb-4">
          <span className="text-[#6E7491]">What flight portal users are saying</span>&nbsp;- 4.9&nbsp;rating</p>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {[0, 1, 2, 3].map((_: number) =>
            <SwiperSlide key={_}>
              <div className="flex justify-around m-12">
                {[0, 1, 2].map((i: number) =>
                  <div key={i} className="text-xs w-[26%] text-start">
                    <span className="text-[#A1B0CC]">
                      <strong className="text-[#6E7491]">Yifei&nbsp;chen</strong>
                      &nbsp;| 2&nbsp;hours&nbsp;ago</span>

                    <div className="flex text-sm text-[#2C53B8] pt-4">
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStar />
                    </div>

                    <div className="text-sm leading-relaxedS py-4">
                      I used Mike to book my honeymoon,
                      and I have to say,
                      they went above and beyond my
                      expectations. They found us a
                      great deal on flights and accommodations,
                      and even arranged for some special
                      surprises along the way.
                      We felt so pampered and taken care of. Highly recommend!
                    </div>
                  </div>
                )}
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </div>

  );
}