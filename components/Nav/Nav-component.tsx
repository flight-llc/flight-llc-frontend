import { FC, useEffect, useState } from "react";
import {BiMenu} from 'react-icons/bi';
import Link from 'next/link';
import Image from "next/image";
import logo_white from '@/public/logo-white.png';
import logo_blue from '@/public/logo-blue.png';

//phone number and object dropdown here
const navObject = {
    phone : '+1 310 547 75 75',
    dropDown : [
        {
            name : 'about',
            route : '/#AboutUs'
        },
        {
            name : 'How it works',
            route : '#HowItWorks'
        },
        {
            name : 'Blog',
            route : 'blog'
        },
        {
            name : 'Deals',
            route : '/#deal'
        },
        {
            name : 'contacts',
            route : '/#ContactUs'
        }
    ]
}

type props={
    textColor : string,
    page?: 'landing' | 'result',
}
export const NavBar:FC<props> = ({textColor, page='landing'}) => {

    const [state, setState] = useState(false);

    const onClickMenuHandler = (e : any) => {
        //e.persist();
        setState(!state);
        // const dropdown: HTMLDivElement | any = document.getElementById('dropdown') as HTMLDivElement;
        // if(dropdown !== null){
        //     const result = dropdown.style.display === "none" ? dropdown.style.display = "inline-block" : dropdown.style.display = "none";
        //     return result;
            
        // }
        
    }
    useEffect(() =>{},[state]);
    return(
        <div className={`w-full flex justify-between items-center ${textColor} py-4`}>
            {/* <div className="flightPortalLogo text-4xl">
                <span>Flightportal</span>
            </div> */}
            <div className="">
                <Image
                src={!page ? logo_white : (page == 'result' ? logo_blue : logo_white )}
                alt=""
                width={200}
                height={200}
                />
                {/* <span>Flightportal</span> */}
            </div>

            <div className="w-fit flex flex-row text-sm items-center gap-12">
                <p className="text-xs">24/7 live service</p>

                <button className="bg-[#113B75] rounded-lg text-white outline-none text-xs p-3">
                    <span><a href={`tel:${navObject.phone.replaceAll(' ', '')}`}>{navObject.phone}</a></span>
                </button>

                <button 
                    className="relative"
                    onClick={onClickMenuHandler}>
                        <BiMenu 
                        className={`${textColor} text-2xl cursor-pointer`} 
                        />
                </button>

                {/* ${state ? 'absolute inline-block divide-y divide-gray-100 w-fit' : 'absolute hidden divide-y divide-gray-100 w-fit'}`} */}
                {state &&  <div 
                id="dropdown" 
                className='absolute top-[8%] md:right-[4%] lg:right-[5.3%] xl:right-[5.5%] divide-y divide-gray-100 w-fit'
                //style={{top : '8%', right : '5.5%'}}
                >
                    <ul 
                    className={`py-6 text-xs text-center ${textColor}`} 
                    //aria-labelledby="dropdownHoverButton"
                    >
                    <Link href={'/#AboutUs'}>
                        <p className="block px-4 py-2 hover:text-[#0379E8]">About</p>
                    </Link>
                    <Link href={"/#HowItWorks"}>
                        <p className="block px-4 py-2 hover:text-[#0379E8]">How it Works</p>
                    </Link>
                    <Link href={"/blog"}>
                        <p className="block px-4 py-2 hover:text-[#0379E8]">Blog</p>
                    </Link>
                    <Link href={'/#deal'}>
                        <p className="block px-4 py-2 hover:text-[#0379E8]">Deals</p>
                    </Link>
                    <Link href={'/#ContactUs'}>
                        <p className="block px-4 py-2 hover:text-[#0379E8]">Contact us</p>
                    </Link>
                    </ul>
                </div>}

                
        

            </div>
        </div>
    );
}