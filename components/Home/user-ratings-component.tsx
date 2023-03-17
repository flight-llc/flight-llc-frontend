import { IAverageRatingResponseBody, ReviewRowType, UserReviewsResponseType } from '@/utils/types';
import { FC } from 'react';
import { BsStarFill, BsStar, BsStarHalf } from 'react-icons/bs';
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";


type props = {
  comments?: UserReviewsResponseType,
  average ?: number
}

export const UserExperienceRatings: FC<props> = ({ comments, average }) => {
  console.log({average});
  return (

    <div id="bg-cloud" className="w-full p-4 flex justify-center">
      <div className="w-4/5 h-auto py-16">
        <p className="text-xl font-semibold text-[#2C53B8] text-center pb-4">
          <span className="text-[#6E7491]">What flight portal users are saying</span>&nbsp;- {average}&nbsp;rating</p>
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          grabCursor={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {comments && comments.rows.map((data: ReviewRowType, i: number) =>
            <SwiperSlide key={i}>
              <div className="flex justify-around m-12">
                <div className="text-xs w-full text-start">
                  <span className="text-[#A1B0CC]">
                    <strong className="text-[#6E7491]">{data.name}</strong>
                    &nbsp;| {new Date(data.created_at).getHours()}&nbsp;ago</span>

                  <div className="flex text-sm text-[#2C53B8] pt-4">
                    {Array.from((Array(Math.trunc(Number.parseFloat(data.rating)))),(_:number, i:number) =>
                      <BsStarFill key={i}/>
                    )}
                    {Number.parseInt(data.rating) < 5 && Number.parseFloat(data.rating)-Math.floor(Number.parseFloat(data.rating)) >= 0.5 && <BsStarHalf/>}

                    {Math.trunc(Number.parseFloat(data.rating)) <= 4 && Number.parseFloat(data.rating)-Math.floor(Number.parseFloat(data.rating)) < 0.5 &&  <BsStar/>}
                  </div>

                  <div className="text-sm leading-relaxedS py-4">
                    {data.review}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )}

        </Swiper>
      </div>
    </div>

  );
}

