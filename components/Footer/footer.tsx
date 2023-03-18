import Link from "next/link";
import { FC } from "react";
import footer_logo from '@/public/footer_logo.png';
import Image from "next/image";


const footerInfo = {
    about : [
        {
            title : 'About Flight Portal',
            route : '/about_us'
        },
        {
            title : 'How it works',
            route : '/how_it_works'
        },
        {
            title : 'Blog',
            route : '/blog'
        },
        {
            title : 'Deals',
            // route : '/route'
            route : '/'
        }
    ],
    support : [
        {
            title : 'Help Center',
            route : '/help_center'
        },
        {
            title : 'Contact us',
            route : '/contact_us'
        },
        {
            title : 'Privacy policy',
            route : 'privacy-policy'
        },
        {
            title : 'Terms of service',
            route : 'terms'
        }
    ]
}
//#F6F6F6
const Footer :FC = () => {

    const {about, support } = footerInfo;

    return(
        <div className="w-full bg-white">
            <div className="w-10/12 mx-auto py-8 flex justify-between items-center">
                <section>
                <div className="">
                    <Image
                    src={footer_logo}
                    alt=""
                    width={200}
                    height={200}
                    />
                    {/* <span>Flightportal</span> */}
                </div>
                </section>
                {/* about us */}
                <section>
                    <div className="">
                        <p className="capitalize font-semibold text-black">About</p>
                        {about && about.map((data : any, i:number) => 
                            <Link key={i} href={data.route}>
                                <p className="text-[#7C8DB0] text-sm py-2">{data?.title}</p>
                            </Link>
                        )}
                    </div>
                </section>
                {/* support */}

                <section>
                    <div className="">
                        <p className="capitalize font-semibold text-black">support</p>
                        {support && support.map((data : any, i:number) => 
                            <Link key={i} href={data.route}>
                                <p className="text-[#7C8DB0] text-sm py-2">{data?.title}</p>
                            </Link>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Footer;