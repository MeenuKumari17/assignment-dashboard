import React from 'react';
import "./featured.scss";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';




const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
            <h1 className="title">Net Profit</h1>
            <p className="amount">$6759.25</p>
            <div className="itemResult">
                <ArrowDropUpIcon fontSize="medium"/>
                <div className="resultAmount">3%</div>
            </div>
        </div>
        <div className="bottom">
            <div className="featuredChart">
            <CircularProgressbar value={70} text={"70%"} strokeWidth={10}/>
            </div>
            <p className="desc">The values here has been rounded off.</p>
        </div>
    </div>
  )
}

export default Featured;
