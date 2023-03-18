import { httpRequest, showToast } from "@/utils/helpers";
import { ItermsAndPolicy } from "@/utils/types";
import { FC, useEffect, useState } from 'react';
import "swiper/css";
import "swiper/css/navigation";


type props = {
  policy : ItermsAndPolicy
}
export const PrivacyPolicy: FC<props> = ({policy}) => {

  return (

    <div id="bg-cloud" className="w-full p-4 flex justify-center">
      <div className="w-4/5 h-auto py-16">
        <p className="text-xl font-semibold text-[#2C53B8] text-center pb-4">
          <span className="text-[#6E7491]">Privacy Policy</span></p>
          <div dangerouslySetInnerHTML={{ __html: policy?.data?.textContent}} />
      </div>
    </div>

  );
}