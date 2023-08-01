import React from 'react'
import { useGetCryptopriceexchangeQuery } from '../services/cryptoApi'
import { useGetCryptoexchanQuery } from '../services/coinexchanges'
import {Table} from "antd"

const Exchanges = () => {
  const columns = [
    {
      title:"",
      dataIndex:"icon",
      key:"icon"
    },
    {
      title: '24h trade volume',
      dataIndex: '24htradevolume',
      key: '24htradevolume',
    },
    {
      title: 'Market',
      dataIndex: 'market',
      key: 'market',
    },
    {
      title: 'Change',
      dataIndex: 'change',
      key: 'change',
    },
  ];

  const {data:data1}=useGetCryptopriceexchangeQuery();
  console.log(data1)
  let {data:data2}=useGetCryptoexchanQuery();
  // console.log(data2);
let abc=[];
let cd;
(data2!==undefined)? (data2=Object.values(data2)):(data2=[]);

// for(let i=0;(data1!==undefined && data2!==undefined);i++){
//     if(i===data1.length){
//       console.log(i)
//       console.log(data1.length)
//       break;
//     }

// cd=data2.filter((datas)=>{
//       return (data1?.data?.exchanges[i]?.name.toLowerCase()===datas?.name?.toLowerCase())
//     })
//     abc.push(cd[0]);
//   }

  console.log(abc);
  return (
    <div>Exchanges</div>
  )
}

export default Exchanges