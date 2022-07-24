import axios from "axios";
import React, {useState, useEffect} from "react";

const Home = () => {
    const [search, setSearch] = useState<string>("");

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("Search value: ", e.target.value);
        setSearch(e.target.value);
    }

    const onSubmitSearch = () => {
        const options = {
            method: 'POST',
            url: 'https://watch-here.p.rapidapi.com/wheretowatch',
            params: {title: 'stranger things', mediaType: 'tv show'},
            headers: {
              'content-type': 'application/json',
              'X-RapidAPI-Key': '9658954ef1msh71351ef6bc24b36p12c541jsn1a9e28b64ec6',
              'X-RapidAPI-Host': 'watch-here.p.rapidapi.com'
            },
            data: {mediaType: "movie", title: search}, //'{"mediaType":"movie","title":"Incredibles 2"}'
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data);
          }).catch(function (error) {
              console.error(error);
          });
    }

    useEffect(() => {
        console.log("Search: ", search);
        onSubmitSearch()
    }, [search])

    return (
        <div className="homepage">
            <div id="wave-animation">
                {/* <div className="drop"></div> */}
                <div className="wave"></div>
            </div>
            <input 
                className="homepage-search-input"
                value={search}
                onChange={handleSearchChange}
                placeholder="Search for any movie or tv show..."
                onSubmit={onSubmitSearch}
            />
        </div>
    );
};

export default Home;
