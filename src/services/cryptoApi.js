// in redux toolkit there are steps to fetch the api data.these steps are easy steps to fetch the api data
import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const cryptoApiHeaders={
          'X-RapidAPI-Key': 'f10026bb87mshded5819076140d0p1a6d1djsn8019041a383a',
          'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }

const baseUrl='https://coinranking1.p.rapidapi.com';

const createRequest=(url)=>{
    console.log('dkk');
    return {url,headers:cryptoApiHeaders}
};

export const cryptoApi1=createApi({
    reducerPath:'cryptoApi',
    // reducerpath is just a name for the api you fetching

    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query:(count)=> {
                return createRequest(`/coins?limit=${count}`)}
            // this query want a object with full url and headers.
            // (count)=> createRequest(`/coins?limit=${count}`) this function indicates the custom hook
            // this is actions for the reducer
        }),
        getCryptodetails:builder.query({
            query:(uuid)=> {
                return createRequest(`/coin/${uuid}`)}
        }),
        getCryptopriceHistory:builder.query({
            query:({uuid,timeperiod})=> {
                return createRequest(`/coin/${uuid}/history?timePeriod=${timeperiod}`)}
        }),
        getCryptopriceexchange:builder.query({
            query:()=> {
                return createRequest(`/coin/Qwsogvtv82FCd/exchanges?limit=20`)}
        })
    })
})
// ye createApi se hmne data fetch krne try kiye api se aur vo continuosly fetch kra hai jabtak api data return ny krega.ye createApi se data fetch kara hai vo hmne cryptoApi1 ka andar dla,vo cryptoApi1 store mai jama kiya aur abhi vo store ke andar data fetch krte regha

// useGetCryptoQuery is function which use to get the data fetched from api.

export const {
    useGetCryptosQuery,
    useGetCryptodetailsQuery,
    useGetCryptopriceHistoryQuery,
    useGetCryptopriceexchangeQuery
}=cryptoApi1;

// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       'X-RapidAPI-Key': 'f10026bb87mshded5819076140d0p1a6d1djsn8019041a383a',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   };