import React from 'react'
import {Line} from "react-chartjs-2"
import {Col,Row,Typography} from "antd";
import moment from "moment"; 
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
  );


const {Title}=Typography;
const LineChart = ({coinname,coinHistory,currentPrice,formatfortime}) => {
    let coinprice=[];
    let cointime=[];
    let declare1=0;
    let color1=0;
    console.log(coinHistory);
    if(coinHistory?.data?.change>0){
        declare1="up"
        color1="#0071bd"
      
    }
    else{
        declare1="down"
        color1="rgb(255, 26, 26)"
     
    }
    for(let i=coinHistory?.data?.history?.length-1;i>0;i--){
        coinprice.push(coinHistory?.data?.history[i].price);
    }

    for(let i=coinHistory?.data?.history?.length-1;i>0;i--){
    cointime.push(moment.unix(coinHistory?.data?.history[i].timestamp).format("DD MMM YYYY"));
    }
    console.log(cointime);

    const data={
        labels:cointime,
        datasets:[
          {
                fill:true,
                label:`Price of ${coinname}`,
                data:coinprice,
                backgroundColor:color1,
                borderColor: color1
            }
        ]
    }
    // const options = {
    //     responsive: true,
    //   };

  return (
    <>
        <Title level={2} className='chart-title'>Price Chart of {coinname}</Title>
        <Col className='price-container'>
<Title level={4} className='price-change'>Changes: <span className={declare1} style={{fontWeight:"400",fontSize:"20px"}}>{coinHistory?.data?.change}%</span></Title>

<Title level={4} className='current-price'> Current Price of {coinname}:${currentPrice}</Title>
        </Col>
 
<Line data={data}></Line>
    </>
  )
}

export default LineChart;