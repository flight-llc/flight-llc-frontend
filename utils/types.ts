import { StaticImageData } from "next/image";

export interface SpecialOffersInterface{
    image : StaticImageData;
    name : string;
    rating : number;
    comment : string;
    price : number
}
export type ReviewRowType = {
    created_at : string,
    name : string,
    rating : string,
    review : string,
    status : string,
    uuid : string,
    __v : number,
    _id : string
}
export interface UserReviewsResponseType{
    count : number;
    rows : ReviewRowType[];
    totalPages : number;
}

export interface ContactUsObjectInterface{
    name :string;
    message : string;
    email : string;
    phone : string;
    smsQuote : boolean;
}
export interface HttpRequestParametersInterface{
    url : string;
    data? : any;
    method : string;
    baseUrl? : string; 
    contentType ?: string 
}

export interface IAverageRatingResponseBody{
    status : boolean;
    message : string;
    extra_data : any[];
    code : number;
    data : number;
}