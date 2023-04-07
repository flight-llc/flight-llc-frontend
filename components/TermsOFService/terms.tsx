import { httpRequest, showToast } from "@/utils/helpers";
import { ItermsAndPolicy } from "@/utils/types";
import { FC, useEffect, useState } from 'react';
import "swiper/css";
import "swiper/css/navigation";

type props = {
  terms : ItermsAndPolicy
}
export const Terms: FC<props> = ({terms}) => {

  console.log({terms});
  return (

    <div id="bg-cloud" className="w-full p-4 flex justify-center">
      <div className="w-4/5 h-auto py-16">
        <p className="text-xl font-semibold text-[#2C53B8] text-center py-4">
          <span className="text-[#6E7491] py-2">Terms and Conditions</span>
        </p>
          {/* <div className="text-justify" dangerouslySetInnerHTML={{ __html:  terms?.data?.textContent}}/> */}
          <div className="text-justify">{terms?.data?.textContent}</div>
          {/* <div className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, saepe vel? Nemo itaque necessitatibus cumque dolores, placeat incidunt quisquam nisi eligendi perferendis, ut asperiores! Rem enim perferendis dicta aspernatur quibusdam?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quibusdam, nulla modi illum in corporis qui magni ex quidem ducimus voluptatibus non tempora eum enim. Perspiciatis odio soluta voluptates omnis?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam totam similique libero quia iure suscipit explicabo, maxime dolorum vero dolor, quidem alias quas, hic corporis dolores. Nesciunt, non ducimus. Vero.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, saepe vel? Nemo itaque necessitatibus cumque dolores, placeat incidunt quisquam nisi eligendi perferendis, ut asperiores! Rem enim perferendis dicta aspernatur quibusdam?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quibusdam, nulla modi illum in corporis qui magni ex quidem ducimus voluptatibus non tempora eum enim. Perspiciatis odio soluta voluptates omnis?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam totam similique libero quia iure suscipit explicabo, maxime dolorum vero dolor, quidem alias quas, hic corporis dolores. Nesciunt, non ducimus. Vero.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, saepe vel? Nemo itaque necessitatibus cumque dolores, placeat incidunt quisquam nisi eligendi perferendis, ut asperiores! Rem enim perferendis dicta aspernatur quibusdam?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quibusdam, nulla modi illum in corporis qui magni ex quidem ducimus voluptatibus non tempora eum enim. Perspiciatis odio soluta voluptates omnis?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam totam similique libero quia iure suscipit explicabo, maxime dolorum vero dolor, quidem alias quas, hic corporis dolores. Nesciunt, non ducimus. Vero.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, saepe vel? Nemo itaque necessitatibus cumque dolores, placeat incidunt quisquam nisi eligendi perferendis, ut asperiores! Rem enim perferendis dicta aspernatur quibusdam?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quibusdam, nulla modi illum in corporis qui magni ex quidem ducimus voluptatibus non tempora eum enim. Perspiciatis odio soluta voluptates omnis?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam totam similique libero quia iure suscipit explicabo, maxime dolorum vero dolor, quidem alias quas, hic corporis dolores. Nesciunt, non ducimus. Vero.
          </div> */}
      </div>
    </div>

  );
}