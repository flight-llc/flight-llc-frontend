
import Image from "next/image";
import image_1 from '@/public/image_1.svg';
import image_2 from '@/public/image_2.svg';
import All_arrow from '@/public/All_arrow.svg';
import Link from "next/link";

export const ExpertTips = () => {
    return (
        <div id="bg-expert" className="my-8 flex justify-center">
            <div className="lg:w-4/5 xl:w-[70%] py-8">
                <p className="text-start text-[#6E7491] uppercase px-4 text-lg font-normal">EXPERT TIPS FOR YOUR NEXT ADVENTURE </p>

                <div className="w-full flex justify-between my-8 items-center">
                    <div className="basis-2/5 rounded-md overflow-hidden bg-white shadow-md">
                        <Image
                            src={image_1}
                            alt=""
                            width={600}
                            height={600}
                        />
                        <p className="text-[#6E7491] p-2 text-sm text-center font-semibold">A life savior trip planning trick you wish you’d knew earlier</p>
                    </div>

                    <div className="basis-2/5 text-[#6E7491] p-4 text-sm text-center">
                        Planning the perfect trip can be a daunting task, especially when you are trying to accommodate multiple people or preferences.
                        From finding the best flight options and booking a hotel,
                        to creating a detailed itinerary and researching the best dining options,
                        it can be overwhelming.You’ve got tired already?
                        <br />
                        <button className="outline-none text-[#0C68BE] hover:underline">
                            read&nbsp;more...
                        </button>
                    </div>
                </div>
                <Link href="/all">
                    <div className="text-[#A1B0CC] text-base flex w-full mt-4 gap-1 justify-end">
                        <span>All</span>
                        <Image
                            src={All_arrow}
                            alt=""
                            width={15}
                            height={15}
                        />
                    </div>
                </Link>
                <div className="w-full flex justify-between mt-4 mb-8 items-center">
                    <div className="basis-2/5 text-[#6E7491] p-4 text-sm text-center">
                        Managing short layovers can be challenging,
                        but with proper planning and organization
                        or with the perfect team of professionals, it can be done successfully.
                        The airways staff always escort first-class passengers via private cars
                        without queues at passport control through the lounges and straight to the gate.
                        So You can easily transfer all of your worries and timing issues to professionals,
                        elevate your experience, and make it truly special.
                        <br />
                        <button className="outline-none text-[#0C68BE] hover:underline">
                            read&nbsp;more...
                        </button>
                    </div>

                    <div className="basis-2/5 rounded-md overflow-hidden bg-white shadow-md">
                        <Image
                            src={image_2}
                            alt=""
                            width={600}
                            height={600}
                        />
                        <p className="text-[#6E7491] p-2 text-sm text-center font-semibold">Tips on how to manage through short layovers</p>
                    </div>

                </div>
            </div>
        </div>
    );
}