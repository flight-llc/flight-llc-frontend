import {FC} from 'react';
import { NavBar } from '../Nav/Nav-component';
import Footer from '../Footer/footer';
import { PrivacyPolicy } from './privacy-policy';

const PrivacyPolicyContainer :FC = () => {
    return (
        <>
        <div className='w-10/12 py-4 mx-auto'>
            <NavBar textColor='text-[#113B75]'/>
            </div>
        <div className='w-full'>
            <PrivacyPolicy/>
        </div>
        <div className='w-10/12 py-4 mx-auto'>
            <Footer/>
        </div>
        
        </>
        
    );
}

export default PrivacyPolicyContainer;