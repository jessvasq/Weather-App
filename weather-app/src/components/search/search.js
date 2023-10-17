import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate';
import { API_URL, options } from '../../api';

function Search({onSearchChange}) {

    const [search, setSearch] = useState(null);
    
    //SEARCH COMPONENT
    //search by city and get latitude and longitude of the query
    const loadOptions = async (input) => {
        try {
            const response = await fetch(
                `${API_URL}/?minPopulation=1000000&namePrefix=${input}`,
                options
            );
    
            const result = await response.json();
    
            return {
                options: result.data.map((city) => ({
                    value: `${city.latitude} ${city.longitude}`,//we need the latitude and longitude so we can use it on the weatherApi
                    label: `${city.name}, ${city.countryCode}`,//these variables are being called from the api, make sure the name matches with the API
                })),
            };
        } catch (error) {
            console.error(error);
            return { options: [] }; 
        }
    };
    
    
    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }
    return (
        //component
        <AsyncPaginate 
            placeholder="Search by City"
            debounceTimeout={600}
            value = {search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />

    )
}

export default Search;
