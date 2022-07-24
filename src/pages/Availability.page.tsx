import axios, { AxiosError, AxiosResponse } from 'axios';
import React, {useState, useEffect} from 'react';
import { useLocation, useNavigate, useParams  } from 'react-router-dom'
import { STREAMING_SOURCES_BY_ID } from '../constants/apiUrls.constant';
import { ITypeResult } from '../interfaces/home.interface';

const Availablity = () => {
    const navigate = useNavigate();
    const params = useParams();
    const location = useLocation();
    const {titleId} = params;
    const [data, setData] = useState<ITypeResult[]>([]);

    const getTitleAvailablity = () => {
        axios.get(STREAMING_SOURCES_BY_ID(titleId || ""))
        .then((res: AxiosResponse) => {
            console.log("Res: ", res);
        })
        .catch((err: AxiosError) => {
            console.log("Err: ", err);
        })
    }

    useEffect(() => {
        // if(!titleId){
        //     navigate("/");
        //     return;
        // }
        getTitleAvailablity();
    }, [titleId]);

    console.log("Params: ", params);
    console.log("Title id: ", titleId)

    return(
        <div className="availability-page">
            <h1>Availability</h1>
        </div>
    )
}

export default Availablity;