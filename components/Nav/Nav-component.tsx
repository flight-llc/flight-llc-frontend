import { FC, useEffect, useReducer, useState } from "react";
import { BiMenu } from 'react-icons/bi';
import Link from 'next/link';
import Image from "next/image";
import logo_white from '@/public/logo-white.png';
import logo_blue from '@/public/logo-blue.png';

//phone number and object dropdown here
const navObject = {
    phone: '+1 310 547 75 75',
    dropDown: [
        {
            name: 'about',
            route: '/#AboutUs'
        },
        {
            name: 'How it works',
            route: '#HowItWorks'
        },
        {
            name: 'Blog',
            route: 'blog'
        },
        {
            name: 'Deals',
            route: '/#deal'
        },
        {
            name: 'contacts',
            route: '/#ContactUs'
        }
    ]
}

type props = {
    textColor: string,
    page?: 'landing' | 'result',
}
const initialState = { open: false };

function reducer(state: any, action: any) {
    if (action.type === 'clicked')
        return { open: !state.open };
}
export const NavBar: FC<props> = ({ textColor, page = 'landing' }) => {

    const [state, setState] = useState<boolean>(false);
    //const [state, dispatch] = useReducer(reducer, initialState);

    const onClickMenuHandler = () => {
        setState(!state);
        // const dropdown: HTMLDivElement | any = document.getElementById('dropdown') as HTMLDivElement;
        // if(dropdown !== null){
        //     const result = dropdown.style.display === "none" ? dropdown.style.display = "inline-block" : dropdown.style.display = "none";
        //     return result;

        // }

    }

    useEffect(() => {
        console.log({ state });
    }, [state]);

    return (
        <div className={`w-full flex justify-between items-center ${textColor} py-4`}>
            <div className="">
                <Image
                    src={!page ? logo_white : (page == 'result' ? logo_blue : logo_white)}
                    alt=""
                    width={200}
                    height={200}
                />
                {/* <span>Flightportal</span> */}
            </div>

            <div className="w-fit flex flex-row text-sm items-center gap-4">
                <p className="text-xs px-4">24/7 live service</p>

                <button className="bg-[#113B75] px-4 rounded-lg text-white outline-none text-xs p-3">
                    <span><a href={`tel:${navObject.phone.replaceAll(' ', '')}`}>{navObject.phone}</a></span>
                </button>

                <div className="w-20 flex justify-center">
                    <div className="w-full">
                        <section className="flex justify-end">
                            <button
                                className="relative mr-4"
                                onClick={onClickMenuHandler}>
                                <BiMenu className={`${textColor} text-2xl cursor-pointer`} />
                            </button>
                        </section>
                        
                        {/* md:right-[4%] lg:right-[5.3%] xl:right-[5.5%]  */}
                        {state &&
                            <div
                                className="w-32 absolute flex justify-center top-[13%] w-fit">
                                <ul
                                    className={`py-4 text-xs text-center ${textColor}`}
                                    aria-labelledby="dropdownHoverButton"
                                >
                                    <Link href={'/#AboutUs'} onClick={() => setState(false)}>
                                        <p className="block px-4 py-2 hover:text-[#0379E8]">About</p>
                                    </Link>
                                    <Link href={"/#HowItWorks"} onClick={() => setState(false)}>
                                        <p className="block px-4 py-2 hover:text-[#0379E8]">How it Works</p>
                                    </Link>
                                    <Link href={'/#deal'} onClick={() => setState(false)}>
                                        <p className="block px-4 py-2 hover:text-[#0379E8]">Deals</p>
                                    </Link>
                                    <Link href={'/#ContactUs'} onClick={() => setState(false)}>
                                        <p className="block px-4 py-2 hover:text-[#0379E8]">Contact us</p>
                                    </Link>
                                </ul>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}