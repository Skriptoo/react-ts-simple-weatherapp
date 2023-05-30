import { useState } from "react";
import { apiOptions } from "../api";

const SearchBarComponent = (props: {handleSearch: Function}) => {
    const [searchVal, setSearchVal] = useState('');
    const [dataList, setDataList] = useState<Object>();

    const handleSubmitEvent = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.handleSearch(searchVal);

    }
    const handleSearchingOnChange = (arg: string) =>{
        if(arg !== '' || arg === null)
        {
            return fetch(`${apiOptions.url}${arg}&limit=5&min_population=50000`, apiOptions)
            .then(res => res.json())
            .then(json => setDataList(Object.keys(json).map((k, i) =>
                <div key={i} className="bg-light cursor-pointer justify-content-start align-items align-items-start w-1 h-25"  onClick={() => props.handleSearch(json[i].name)}>
                    <p className="font-weight-bold"> {json[i].name} - {json[i].country}</p>
                </div>
            )))
            .catch(err => console.error('error:' + err));
        }
       
    }

    const searchForm =  <div className="border-dark d-block m-20">
        <form onSubmit={handleSubmitEvent}>
            <input type="text" value={searchVal} onChange={(e) => setSearchVal(e.target.value)} onInput={() => handleSearchingOnChange(searchVal)} />
            <button type="submit" className="btn btn-outline-primary">Search!</button>
        </form>
        </div>
        
    return (
        <>
            <div className="d-flex flex-column align-items-center justify-content-center">
                <>
                    {searchForm}
                    {dataList}
                </>
            </div>
        </>
        
    );
}

export default SearchBarComponent;