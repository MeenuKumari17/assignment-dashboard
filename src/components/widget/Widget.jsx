import React from 'react';
import "./widget.scss";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import BackpackIcon from '@mui/icons-material/Backpack';
import CancelIcon from '@mui/icons-material/Cancel';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';




const Widget = ({ type }) => {
  let data;

  switch (type) {
    case "order":
      data = {
        icon: <LocalMallIcon className='order'/>,
        title: "Total Orders",
        counter: "75",
        text: "+3%",
      };
      break;
    default:
      break;
  }
  switch (type) {
    case "delivery":
      data = {
        icon: <BackpackIcon className='delivery'/>,
        title: "Total Delivered",
        counter: "70",
        text: "-3%",
      };
      break;
    default:
      break;
  }
  switch (type) {
    case "cancelled":
      data = {
        icon: <CancelIcon className='cancelled'/>,
        title: "Total Cancelled",
        counter: "05",
        text: "+3%",
      };
      break;
    default:
      break;
  }
  switch (type) {
    case "revenue":
      data = {
        icon: <AttachMoneyIcon className='revenue'/>,
        title: "Total Revenue",
        counter: "$12k",
        text: "-3%",
      };
      break;
    default:
      break;
  }

  return (
    <div className='widget'>
      <div className="left">
        {data.icon}
        <span className="title">{data.title}</span>
      </div>
      <div className="right">
        <div className="percentage">
        <span className="counter">{data.counter}</span>
          <p className='text'> {data.text} </p>
        </div>
      </div>
    </div>
  )
}

export default Widget;
