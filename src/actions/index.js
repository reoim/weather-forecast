import axios from 'axios';

const API_KEY = '6d70a6b43b97857a806ae7d7e8d2cba4';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},au`;
	const request = axios.get(url);

	console.log('Request:', request);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}