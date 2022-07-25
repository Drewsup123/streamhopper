import axios, { AxiosError, AxiosResponse } from 'axios';
import React, {useState, useEffect} from 'react';
import { useLocation, useNavigate, useParams  } from 'react-router-dom'
import WaterBackground from '../components/WaterBackground.component';
import { STREAMING_SOURCES_BY_ID } from '../constants/apiUrls.constant';
import CheckIcon from '../icons/check.icon';
import { ISearchResult, ITypeResult } from '../interfaces/home.interface';
import "../styles/availability.css"

const Availablity = () => {
    const navigate = useNavigate();
    const params = useParams();
    const location: any = useLocation();
    const {titleId} = params;
    const [titleData, setTitleData] = useState<ISearchResult | null>(location.state || null)
    const [data, setData] = useState<ITypeResult[]>([]);

    const getTitleAvailablity = () => {
        axios.get(STREAMING_SOURCES_BY_ID(titleId || ""))
        .then((res: AxiosResponse) => {
            console.log("Res: ", res);
            setData(res.data);
        })
        .catch((err: AxiosError) => {
            console.log("Err: ", err);
        })
    }

    useEffect(() => {
        if(!titleId){
            navigate("/");
            return;
        }
        if(titleId && !location.state){
            //? Make a call to the endpoint to get movie/show info
        }
        getTitleAvailablity();
    }, [titleId]);

    console.log("Params: ", params);
    console.log("Title id: ", titleId);
    console.log("Location State: ", location.state);

    return(
        <div className="availability-page">
            <WaterBackground />
            <div className="availablity-image-wrapper">
                <img src={titleData?.image_url || "placeholder"} alt="Poster" />
            </div>
            <div className="title-info-wrapper">
                <div className="title-info">
                    <h1>{titleData?.name}</h1>
                </div>
                <div className="availability-info">
                    {
                        data.map((avail: ITypeResult) => (
                            <div className="availability-card">
                                <CheckIcon className="checkIcon" />
                                <h3>{avail.name}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Availablity;