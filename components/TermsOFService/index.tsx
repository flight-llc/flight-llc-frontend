import {FC} from 'react';
import { NavBar } from '../Nav/Nav-component';
import result from '@/public/result.svg';
import Image from 'next/image';
import {HiOutlineArrowsUpDown} from 'react-icons/hi2';
import Result_Airlines from '@/public/Result_Airlines.png';
import { ContactUs } from '../Home/Contact';
import Footer from '../Footer/footer';
import { HowItWorks } from '../Home/how-it-works';
import { UserExperienceRatings } from '../Home/user-ratings-component';
import { Terms } from './terms';
import { ItermsAndPolicy } from '@/utils/types';

type props = {
    terms : ItermsAndPolicy
}
const TermsOfService :FC<props> = ({terms}) => {

    return (
        <>
        <div className='w-10/12 py-4 mx-auto'>
            <NavBar textColor='text-[#113B75]'/>
            </div>
        <div className='w-full'>
            <Terms terms={terms}/>
        </div>
        <div className='w-10/12 py-4 mx-auto'>
            <Footer/>
        </div>
        
        </>
        
    );
}

export default TermsOfService;