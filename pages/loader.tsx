import { Loader } from "@/components/Loader/Loader"
import { NextPage } from "next"

const LoaderPage : NextPage = () => {
    return <Loader fromIATA="" toIATA="" percentage={50}/>
} 

export default LoaderPage;