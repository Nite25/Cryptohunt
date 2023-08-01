import React from 'react'
import millify from "millify";
import { Typography,Row,Col,Statistic } from 'antd';
import {Link} from "react-router-dom";
import { useGetCryptosQuery} from "../services/cryptoApi";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";

// SINGLE DOT MEANS SAME DIRECTORY
// DOUBLE DOT MEANS PARENT DIRECTORY


const Homepage = () => {
  const {data}=useGetCryptosQuery(10);
  console.log(data);
  console.log(data?.data.stats);

  return (
    <>
    <Typography.Title level={2} className='heading'>
      
        <span className='heading1'>Global Cryptocurrencies Statistics</span>
        <br></br>
        <br></br>
        <Row>
            {/* here span is a space between the column */}
            {/* statistic of antdesign is use to display the statistic number in card type format */}
            <Col span={12}><Statistic title="Total Cryptocurrencies" value={(data===undefined) ? "Loading...":millify(data?.data?.stats.total)}></Statistic></Col>
            <Col span={12}><Statistic title="Total Exchanges" value={(data===undefined) ? "Loading...":millify(data?.data?.stats.totalExchanges)}></Statistic></Col>
            <Col span={12}><Statistic title="Total Market Cap" value={(data===undefined) ? "Loading...":millify(data?.data?.stats.totalMarketCap)}></Statistic></Col>
            <Col span={12}><Statistic title="Total 24h volume" value={(data===undefined) ? "Loading...":millify(data?.data?.stats.total24hVolume)}></Statistic></Col>
            <Col span={12}><Statistic title="Total Market" value={(data===undefined) ? "Loading...":millify(data?.data?.stats.totalMarkets)}></Statistic></Col>
        </Row>
    </Typography.Title>

    <div className='home-heading-container'>
      <Typography.Title level={2} className='home-title'>
        <span>Top 10 Cryptocurrencies coins in the world</span>
        </Typography.Title>

      <Typography.Title level={5} className='show-more'><Link to="/cryptocurrencies">Show more...</Link></Typography.Title>
    </div>
<Cryptocurrencies simplified={true}></Cryptocurrencies>

    <div className='home-heading-container'>
      <Typography.Title level={2} className='home-title'>Latest Crypto News</Typography.Title>

      <Typography.Title level={5} className='show-more'><Link to="/news">Show more...</Link></Typography.Title>
    </div>
    <News status={true} category="cryptocurrency" ></News>
    </>
  )
}

export default Homepage