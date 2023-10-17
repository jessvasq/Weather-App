export const API_URL = process.env.REACT_APP_API_URL;

export const options = {
	method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_GEO_KEY,
		'X-RapidAPI-Host': process.env.REACT_APP_GEO_HOST
	}
};
