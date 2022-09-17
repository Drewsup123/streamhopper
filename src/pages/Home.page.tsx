import axios, { AxiosError, AxiosResponse } from "axios";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import WaterBackground from "../components/WaterBackground.component";
import { AUTOCOMPLETE_API_URL } from "../constants/apiUrls.constant";
import useDebounce from "../hooks/useDebounce";
import { ISearchResult } from "../interfaces/home.interface";
import LilyPad1 from "../images/lilyPad1.png";
import LilyPad2 from "../images/lilyPad2.png";
import LilyPadRed from "../images/lilyPadRed.png";
import LilyPadPink from "../images/lilyPadPink.png";

const Home = () => {
    const [search, setSearch] = useState<string>("");
    const [results, setResults] = useState<ISearchResult[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const debouncedValue = useDebounce(search, 500);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("Search value: ", e.target.value);
        setSearch(e.target.value);
    }

    const onSubmitSearch = () => {
        setLoading(true);
        axios.get(AUTOCOMPLETE_API_URL + `&search_value=${debouncedValue}`)
        .then((res: AxiosResponse) => {
            console.log("results response: ", res);
            setResults(res.data.results);

        }).catch((err: AxiosError) => {
            console.log(err);
        }).finally(() => {
            setLoading(false);
        })
    }

    useEffect(() => {
        if(!debouncedValue) return;
        onSubmitSearch();
        //es-lint-disable-next-line
    }, [debouncedValue])

    return (
        <div className="homepage">
            <WaterBackground />
            <img src={LilyPadPink} alt="lily pad" id="lily_pad_1" />
            <img src={LilyPad1} alt="Likly Pad" id="lily_pad_2" />
            <img src={LilyPad2} alt="Likly Pad" id="lily_pad_3" />
            <img src={LilyPadRed} alt="Likly Pad" id="lily_pad_4" />
            <img src={LilyPadPink} alt="Likly Pad" id="lily_pad_5" />
            <img src={LilyPad1} alt="Likly Pad" id="lily_pad_6" />
            <img src={LilyPad2} alt="Likly Pad" id="lily_pad_7" />
            <div className="homepage-search-wrapper">
                <input 
                    className="homepage-search-input"
                    value={search}
                    onChange={handleSearchChange}
                    placeholder="Search for any movie or tv show..."
                    onSubmit={onSubmitSearch}
                />
                {
                    search
                    ?
                    <div className="homepage-search-results">
                        {
                            loading
                            ?
                            <span>Loading...</span>
                            :results.map((result: ISearchResult) => (
                                <Link to={`/${result.id}`} state={result} className="homepage-search-result" key={result.id}>
                                    {/* TODO: Add placeholder image if null */}
                                    <img src={result.image_url || ""} style={{height: 50, width: 50}} alt="movie" />
                                    <div className="search-result-info">
                                        <h6>{result.name}</h6>
                                        <span>{result.type === "movie" ? "Movie" : "Series"} - {result.year}</span>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                    :null
                }
            </div>
        </div>
    );
};

export default Home;
