import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const cryptoApiHeaders={
    'X-RapidAPI-Key': 'f10026bb87mshded5819076140d0p1a6d1djsn8019041a383a',
    'X-RapidAPI-Host': 'coinlore-cryptocurrency.p.rapidapi.com'
        }

const baseUrl='https://coinlore-cryptocurrency.p.rapidapi.com/';

const createRequest=(url)=>{
    return {url,headers:cryptoApiHeaders}
};

export const cryptoApi12=createApi({
    reducerPath:'cryptoExchangeApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptoexchan:builder.query({
            query:()=>{
                return createRequest(`api/exchanges/`);
            }
        })
    })
})

export const {useGetCryptoexchanQuery} =cryptoApi12;