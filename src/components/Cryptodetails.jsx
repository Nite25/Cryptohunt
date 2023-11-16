import React, { useState } from 'react'
import millify from 'millify';
import { useParams } from 'react-router-dom';
import {Col,Row,Typography,Select,Skeleton} from "antd";
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
import {useGetCryptodetailsQuery,useGetCryptopriceHistoryQuery} from "../services/cryptoApi";
import LineChart from './LineChart';
import News from './News';
const {Title,Text}=Typography;
const{Option}=Select;

const Cryptodetails = () => {
  const {uuid}=useParams();
  // use params is the react-router-hook which use to read the parameters of the url

  const [timeperiod,setTimeperiod]=useState('24h');
  const {data}=useGetCryptodetailsQuery(uuid)
  const {data:coinHistory}=useGetCryptopriceHistoryQuery({uuid:uuid,timeperiod:timeperiod})
  console.log(coinHistory);
  const cryptoDetails=data?.data?.coin;

  const time = ['3h', '24h', '7d', '30d', '3m', '1y', '3y', '5y'];

  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined /> },
    { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    { title: '24h Volume', value: `$ ${cryptoDetails?.["24hVolume"] && millify(cryptoDetails?.["24hVolume"])}`, icon: <ThunderboltOutlined /> },
    { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <FundOutlined /> },
    { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
    { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
  ];

  return (
    <Col className='coin-detail-container'>
      <Col className='coin-heading-container' style={{width:"100%"}}>
        {
      (cryptoDetails!==undefined) ? 
      <><Title level={2} className='coin-name'>
        <div className="heading">
        {cryptoDetails.name} ({cryptoDetails.symbol}) Price
        </div>
        </Title>
      <p className='heading'>
        {cryptoDetails.name} live price in US dollars. Views Value Statistics,Market-Cap and Supply
      </p>
      </>
      :<Skeleton active className='skelthon1' />
        }
      </Col>
      <br></br>
      <Select
       placeholder='Select Time Period'
       className='select-timeperiod'
       defaultValue="24h"
       onChange={(value)=>{
        setTimeperiod(value);
       }}
       optionFilterProp='children'
      >
        {time.map((period)=>{
          return (<Option key={period}>{period}</Option>)
        })}
      </Select>
<br></br>
<br></br>
<LineChart coinHistory={coinHistory} coinname={cryptoDetails?.name} currentPrice={millify(cryptoDetails?.price)} formatfortime={timeperiod}></LineChart>
     { (cryptoDetails!==undefined) ? <Col className='stats-container' style={{width:"100%",margin:"auto"}}>
        <Col className='coin-value-statistics'>
          <Col className="coin-value=statistics-heading">
            <Title level={3} className='coin-detailes-heading'>
              <div className='heading'>
              {cryptoDetails?.name} Value statistics
              </div>
            </Title>
            <p className='heading'>
              An overviewing showing the stats of {cryptoDetails?.name}
            </p>
          </Col>
          {stats.map(({icon,title,value})=>{
            return (<Col className='coin-stats'>
            <Col className="coin-stats-name">
              <Text>{icon}</Text>
              <Text>
                {title}
                </Text>
            </Col>
            <div className='heading'>
            <Text className="stats">
              {value}
              </Text>
            </div>
            </Col>
            )
          })
          }
          <br></br>
          <br></br>
        </Col>
        <Col className='other-stats-info'>
          <Col className="coin-value=statistics-heading">
            <Title level={3} className='coin-detailes-heading'>
              <div className='heading'>
              Other Statistics
              </div>
            </Title>
            <p>
              An overviewing showing the stats of all cryptocoins
            </p>
          </Col>
          {genericStats.map(({icon,title,value})=>{
            return (<Col className='coin-stats'>
            <Col className="coin-stats-name">
              <Text>{icon}</Text>
              <Text>{title}</Text>
            </Col>
            <Text className="stats">{value}</Text>
            </Col>
            )
          })
          }
        </Col>
        <Col className='coin-desc-link'>
          <Row className='coin-desc'>
            <Title level={3} className='coin-details-heading'>
              <div className='heading'>
              Latest News of {cryptoDetails.name}
              </div>
              <br></br>
              <br></br>
            </Title>
              <News status={true} category={cryptoDetails?.name} ></News>
          </Row>
          <Col className='coin-links'>
            <Title level={3} className='coin-details-heading'>
              <div className='heading'>
              {cryptoDetails?.name + " Links:"}
              </div>
            </Title>
            {cryptoDetails?.links.map((links)=>(
              <Row className='coin-link' key={links?.name}>
                <Title className='link-name' level={5}>
                  {links.type}
                </Title>
                <a href={links.url} target="_blank" title={links.url}>
                  {links.name}
                </a>
              </Row>
            ))}
          </Col>
        </Col>
      </Col> : <><Skeleton active className='skelthon1' /><Skeleton active className='skelthon1' /></>
     }
    </Col>
  )
}

export default Cryptodetails