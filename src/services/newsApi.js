import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { useEffect } from "react";


const NewsApiHeaders= {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': 'f10026bb87mshded5819076140d0p1a6d1djsn8019041a383a',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
      }

const baseUrl='https://bing-news-search1.p.rapidapi.com/news';

const createRequest=(url)=>{
    console.log(url);
    return {url,headers:NewsApiHeaders}
};

// this NewsApi1 is export to add inside the middleware which will going to add in store
export const NewsApi1=createApi({
    reducerPath:'NewsSlice',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        GetCryptosNews:builder.query({
            query:({count,categories})=> {
                if(categories===undefined){
                    categories="cryptocurrency";
                }
                return createRequest(`/search?q=${categories}&count=${count}&freshness=Day&textFormat=Raw&safeSearch=Off`)
            }
            // request mai api ka param dlneka ek format mai
        })
    })
})

export const {useGetCryptosNewsQuery}=NewsApi1;

// create api return object and in the object there is custom hook,when this custom hook trigger,again api call is happen and change the state of the api slice.

// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://bing-news-search1.p.rapidapi.com/news/search',
//   params: {
//     q: '<REQUIRED>',
//     freshness: 'Day',
//     textFormat: 'Raw',
//     safeSearch: 'Off'
//   },
//   headers: {
//     'X-BingApis-SDK': 'true',
//     'X-RapidAPI-Key': 'f10026bb87mshded5819076140d0p1a6d1djsn8019041a383a',
//     'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);