import { FC } from "react";
import {BiMenu} from 'react-icons/bi';
import Link from 'next/link';

//phone number and object dropdown here
const navObject = {
    phone : '+1 310 547 75 75',
    dropDown : [
        {
            name : 'about',
            route : '/about'
        },
        {
            name : 'How it works',
            route : 'how-it-works'
        },
        {
            name : 'Blog',
            route : 'blog'
        },
        {
            name : 'Deals',
            route : '/deals'
        },
        {
            name : 'contacts',
            route : '/contacts'
        }
    ]
}
export const NavBar = () => {

    const onClickMenuHandler = () => {
        const dropdown: HTMLDivElement | any = document.getElementById('dropdown') as HTMLDivElement;
        if(dropdown !== null){
            if(dropdown.style.display === "none") dropdown.style.display = "inline-block";
            document.addEventListener('mouseup', function(e) {
                if (!dropdown.contains(e.target)) {
                  dropdown.style.display = 'none';
                }
            });
            // const result = dropdown.style.display === "none" ? dropdown.style.display = "inline-block" : dropdown.style.display = "none";
            // return result;
        }
        
    }
    return(
        <div className="w-full flex justify-between items-center text-white p-4">
            <div className="flightPortalLogo text-4xl">
                <span>Flightportal</span>
            </div>

            <div className="w-fit flex flex-row text-sm items-center gap-12">
                <p className="text-xs">24/7 live service</p>

                <button className="bg-[#113B75] rounded-lg text-white outline-none text-sm p-3">
                    <span>{navObject.phone}</span>
                </button>

                <button 
                    className="relative"
                    onClick={onClickMenuHandler}>
                    <BiMenu className="text-white text-2xl"/>
                </button>

                <div id="dropdown" className="absolute hidden divide-y divide-gray-100 w-fit"
                style={{top : '8%', right : '6.5%'}}>
                    <ul 
                    className="py-2 text-xs text-white text-center" 
                    aria-labelledby="dropdownHoverButton">
                    <Link href={'/about_us'}>
                        <p className="block px-4 py-2 hover:text-[#0379E8]">About</p>
                    </Link>
                    <Link href={"/how_it_works"}>
                        <p className="block px-4 py-2 hover:text-[#0379E8]">How it Works</p>
                    </Link>
                    <Link href={"/blog"}>
                        <p className="block px-4 py-2 hover:text-[#0379E8]">Blog</p>
                    </Link>
                    <Link href={'/deals'}>
                        <p className="block px-4 py-2 hover:text-[#0379E8]">Deals</p>
                    </Link>
                    <Link href={'/contact_us'}>
                        <p className="block px-4 py-2 hover:text-[#0379E8]">Contact us</p>
                    </Link>
                    </ul>
                </div>

                
        

            </div>
        </div>
    );
}