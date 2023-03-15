// export interface UserExperienceRatingsInterface{
//     name : string;
//     time : number;
//     rating : number;
//     comment : string
// }

export interface SpecialOffersInterface{
    image : string;
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