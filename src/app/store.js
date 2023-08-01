import {configureStore} from "@reduxjs/toolkit";
import {cryptoApi1} from "../services/cryptoApi";
import {NewsApi1 } from "../services/newsApi";
import { cryptoApi12 } from "../services/coinexchanges";

const store =configureStore({
    reducer:{
        [cryptoApi1.reducerPath]:cryptoApi1.reducer,
        [NewsApi1.reducerPath]:NewsApi1.reducer,
        [cryptoApi12.reducerPath]:cryptoApi12.reducer,
        // for every api slice,reducer is there,this reducer should be add to the reducer of the store
        // this means for every slice,reducer of the particular slice should be there4

        // createApi returns a object which consist of the custom hook as well as reducer.this reducer is create automatically by createApi.
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cryptoApi1.middleware).concat(NewsApi1.middleware).concat(cryptoApi12.middleware),
        // for every api calling through redux toolkit we should to add middleware in the store
})
export default store;