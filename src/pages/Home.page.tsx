import React, {useState} from "react";

const Home = () => {
    const [search, setSearch] = useState<string>("");

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setSearch(e.target.value);
    }

    return (
        <div className="homepage">
            <div id="wave-animation">
                <div className="drop"></div>
                <div className="wave"></div>
            </div>
            <input 
                className="homepage-search-input"
                value={search}
                onChange={handleSearchChange}
                placeholder="Search for any movie or tv show..."
            />
        </div>
    );
};

export default Home;
