import {React,useState} from 'react'
import {useGetCryptosNewsQuery} from "../services/newsApi";
import { useGetCryptosQuery } from '../services/cryptoApi';
import {Row,Col,Card,Typography, Avatar,Select,Skeleton} from "antd";
import moment from "moment";

const News = ({status,category}) => {
  const [Category,setCategory]=useState(category);
  console.log(Category);
  let count=0;

if(status==true){
  count=6;
}
else{
  count=50;
}
  const {data}=useGetCryptosNewsQuery({count:count,categories:Category});

  const {data:cryptocoin}=useGetCryptosQuery(20);
  console.log(cryptocoin?.data?.coins)
  const demo="https://media.istockphoto.com/id/1326770854/photo/cryptocurrency-on-binance-trading-app-bitcoin-btc-with-altcoin-digital-coin-crypto-currency.jpg?s=612x612&w=0&k=20&c=zDTdAkqrP7Er1MM2r25GNrTN7jygE-NzSgsVwWsnLKM="
  console.log(data);
  const {Option} =Select;
  return (
    <Row gutter={[24,24]}>
      {
      (status!==true) ? <Col span={24}>
        <Select  ShowSearch className='select-news' placeholder="Select Cryptocurrency" optionFilterProp='children' onChange={(value)=>{setCategory(value);console.log(value)}} 
       >

        <Option value="Cryptocurrency">Cryptocurrency</Option>
        {cryptocoin?.data?.coins.map((coinsm)=>{
          return(
          <Option value={`${coinsm.name}`}>{`${coinsm.name}`}</Option>
          )
        })
        }

        </Select>
      </Col>: ""
}
   { 
   (data!==undefined) ?
   <>
   {data.value.map((value)=>
   {
     return(
      <Col xs={24} sm={12} lg={8}>
        <Card hoverable className='news-card'>
      <a href={`${value.url}`} target="_blank" rel="noreferrer">
          <div className="news-image-container">
            <Typography.Title className='news-title' level={5}>
            {
              <span>{(value.name.length>40)?`${value.name.substring(0,40)}....`:`${value.name}`}</span>
            }
            </Typography.Title>
            <img alt="news" className="imageooff" src={`${value?.image?.thumbnail?.contentUrl || demo}`}/>
          </div>
          <p className="para" style={{fontsize:"1vw"}}>
            {
              <span>{(value.description.length>100)?`${value.description.substring(0,100)}....`:`${value.description}`}</span>
            }
          </p>
          <br></br>
          <div className="provider-container">
            <div>
              <Avatar src={value.provider[0]?.image?.thumbnail?.contentUrl || demo} className='avatar'></Avatar>
              <Typography.Text className='provider-name'>{value.provider[0]?.name}</Typography.Text>
            </div>
            <Typography.Text>
              <span>{moment(value.datePublished).startOf("ss").fromNow()}</span>
              </Typography.Text>
          </div>
      </a>
        </Card>
      </Col>
     )
    })
  }
  </> : <><Skeleton active className='skelthon1' /><Skeleton active className='skelthon1' /><Skeleton active className='skelthon1' /></>
  }
  </Row>
  )
}

export default News