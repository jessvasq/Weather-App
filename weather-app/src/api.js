export const API_URL = process.env.REACT_APP_API_URL;

export const options = {
	method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_GEO_KEY,
		'X-RapidAPI-Host': process.env.REACT_APP_GEO_HOST
	}
};


export const WEATHER_API_URL = process.env.REACT_APP_WEATHER_API_URL
export const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY