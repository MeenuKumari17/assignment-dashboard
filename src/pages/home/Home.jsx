import React from 'react';
import "./home.scss";
import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components/header/Header';
import Widget from '../../components/widget/Widget';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
import Table from '../../components/table/Table';
import More from '../../components/more/More';
import Feedback from '../../components/feedback/Feedback';




const Home = () => {
  return (
    <div>
      {/* <Header/> */}
      <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        <div className='left-container'>
        <div className="widgets">
            <Widget type="order"/>
            <Widget type="delivery"/>
            <Widget type="cancelled"/>
            <Widget type="revenue"/>
          </div>
          <div className="charts">
            <Chart/>
          </div>
          <div className="listContainer">
            <div className="listTitle">Recent Orders
            <Table className="table" />
            </div>
          </div>
        </div>
        <div className="right-container">
        <div className="charts">
            <Featured />
          </div>
        <div className="explore">
          <More type="goal" />
          <More type="dish"/>
          <More type="menu"/>
        </div>
        <div className="feedback">
          <p>Customer's Feedback</p>
          <Feedback type="goal"/>
        </div>
        </div>
        </div>
      </div>

    </div>
  );
};

export default Home;