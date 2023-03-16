import { httpRequest, showToast } from "@/utils/helpers";
import { FC, useEffect, useState } from 'react';
import "swiper/css";
import "swiper/css/navigation";


// type props = {
//   comments?: [UserExperienceRatingsInterface]
// }
export const PrivacyPolicy: FC = () => {
  const [webpage, setWebpage] = useState('');
  
  useEffect(() => {
    fetchPolicy();
  }, []);
  
  const fetchPolicy = () => {
    showToast({type: 'success', message: 'Fetching Privacy Policy' });
    httpRequest({ 
      url: 'privacy-policy/get-active', 
      method: 'get', 
      baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_HOST}`,
    }).then(response => {
      if (response && response['status']) {
        setWebpage(response['data']['textContent']);
      } else {
        // show toast
        showToast({ type: 'error', message: response && response['status'] && response['message'] ? response['message'] : 'Faild to fetch Privacy Policy' });
      }
    }).catch(err => {
      console.error(err);
      showToast({ type: 'error', message: 'Faild to fetch Privacy Policy' });
    });
  }

  return (

    <div id="bg-cloud" className="w-full p-4 flex justify-center">
      <div className="w-4/5 h-auto py-16">
        <p className="text-xl font-semibold text-[#2C53B8] text-center pb-4">
          <span className="text-[#6E7491]">Privacy Policy</span></p>
          <div dangerouslySetInnerHTML={{ __html: webpage}} />
      </div>
    </div>

  );
}