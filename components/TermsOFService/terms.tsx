import { httpRequest } from "@/utils/helpers";
import { FC, useEffect, useState } from 'react';
import "swiper/css";
import "swiper/css/navigation";

export const Terms: FC = () => {
  const [webpage, setWebpage] = useState('');
  
  useEffect(() => {
    fetchTerms();
  }, []);
  
  const fetchTerms = () => {
    console.log('process.env', process.env);
    httpRequest({ 
      url: 'terms-of-service/get-active', 
      method: 'get', 
      baseUrl: `${process.env.BACKEND_HOST}`, 
      data: {
        _headers: { 
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZsaWdodF9sbGNfd2ViIiwibmFtZSI6IkZsaWdodCBMTEMiLCJpYXQiOjE2Nzg5MDI4NzQsImV4cCI6MTY3ODkwODg3NH0.9Q_yCI4ECAy5Wf9vvagD7jmCOG9jnK0R_MaG2shxzZc' 
        }
      }
    }).then(response => {
      console.log(response);
      if (response && response['status']) {
        setWebpage(response['data']['textContent']);
      } else {
        // show toast
      }
    }).catch(err => console.error(err));
  }

  return (

    <div id="bg-cloud" className="w-full p-4 flex justify-center">
      <div className="w-4/5 h-auto py-16">
        <p className="text-xl font-semibold text-[#2C53B8] text-center pb-4">
          <span className="text-[#6E7491]">Terms and Conditions</span></p>
          <div dangerouslySetInnerHTML={{ __html: webpage}} />
      </div>
    </div>

  );
}