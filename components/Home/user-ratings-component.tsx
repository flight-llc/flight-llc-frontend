import { UserExperienceRatingsInterface } from "@/utils/types";
import {FC} from 'react';
//import Slider from 'react-slick';
import {BsStarFill, BsStar} from  'react-icons/bs';

type props={
    comments ?: [UserExperienceRatingsInterface]
}
export const UserExperienceRatings :FC<props> = ({comments}) => {
    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // };
   return(
      //   <Slider {...settings}>
      //   <div>
      //     <h3>1</h3>
      //   </div>
      //   <div>
      //     <h3>2</h3>
      //   </div>
      //   <div>
      //     <h3>3</h3>
      //   </div>
      //   <div>
      //     <h3>4</h3>
      //   </div>
      //   <div>
      //     <h3>5</h3>
      //   </div>
      //   <div>
      //     <h3>6</h3>
      //   </div>
      // </Slider>
        <div className="flex justify-around my-6">
            {[0,1,2].map((_:number) => 
                <div key={_} className="text-xs w-[26%]">
                <span className="text-[#A1B0CC]">
                    <strong className="text-[#6E7491]">Yifei&nbsp;chen</strong>
                    &nbsp;| 2&nbsp;hours&nbsp;ago</span>

                <div className="flex text-sm text-[#2C53B8] pt-4">
                  <BsStarFill/>
                  <BsStarFill/>
                  <BsStarFill/>
                  <BsStarFill/>
                  <BsStar/>
                </div>

                <div className="text-sm leading-relaxed py-4">
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
    );
}