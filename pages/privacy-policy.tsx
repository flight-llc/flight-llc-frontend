import PrivacyPolicyContainer from "@/components/PrivacyPolicy";
import { NextPage } from "next";
import https from 'https';
import axios from "axios";

const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
});


const PrivacyPolicyPage : NextPage = (props : any) => {
    const { policy } = props;
    return <PrivacyPolicyContainer policy={policy}/>
}
export default PrivacyPolicyPage;


export const getServerSideProps = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_HOST}privacy-policy/get-active`,
    {
      headers:{
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${process.env.NEXT_PUBLIC_USER_TOKEN}`
      },
      httpsAgent: httpsAgent,
    }).catch(err => err);

    const policy = await response.data;

    return{
        props : {
            policy
        }
    };
}