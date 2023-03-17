import Result from "@/components/Result/result";
import axios from "axios";
import { NextPage } from "next";
import https from 'https';


const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });

const ResultPage : NextPage = (props : any) => {
    const {data, averageRatingData} = props;
    return <Result average={averageRatingData} data={data}/>
}

export default ResultPage;

export async function getServerSideProps(){

    const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_HOST}reviews/active-reviews?pageNumber=1&pageSize=10&Recent=true`,
    {
      headers:{
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${process.env.NEXT_PUBLIC_USER_TOKEN}`
    },
    httpsAgent: httpsAgent,
    }).catch(err => err);

    const averageRating = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_HOST}reviews/average-ratings`,
    {
        headers : {
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${process.env.NEXT_PUBLIC_USER_TOKEN}`
        },
        httpsAgent: httpsAgent,
    }).catch(err => err);

    const {data} = await response.data;
    const {data : averageRatingData} = await averageRating.data;
    return {
        props : {
            data,
            averageRatingData
        }
    };
}