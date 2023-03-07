import Link from "next/link";
import { FC } from "react";


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
            route : '/route'
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
            route : 'privacy_policy'
        },
        {
            title : 'Terms of service',
            route : 'terms_of_service'
        }
    ]
}
const Footer :FC = () => {

    const {about, support } = footerInfo;

    return(
        <div className="w-full">
            <div className="w-[80%] mx-auto p-8 flex justify-between items-center">
                <section>
                <div className="flightPortalLogo text-5xl text-black">
                    <span>Flightportal</span>
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