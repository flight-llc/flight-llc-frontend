import TermsOfService from "@/components/TermsOFService";
import axios from "axios";
import { NextPage } from "next";
import https from 'https';


const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
});

const TermsPage : NextPage = (props : any) => {
    const  {terms} = props;
    return <TermsOfService terms={terms}/>
}

export default TermsPage;

export const getServerSideProps = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_HOST}terms-of-service/get-active`,
    {
      headers:{
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${process.env.NEXT_PUBLIC_USER_TOKEN}`
      },
      httpsAgent: httpsAgent,
    }).catch(err => err);

    const terms = await response.data;

    return{
        props : {
            terms
        }
    };
}