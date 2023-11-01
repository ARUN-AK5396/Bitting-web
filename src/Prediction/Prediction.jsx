import React, { useState,useEffect } from 'react';
import './PredictionStyle.css';

function Prediction() {
  const [activeTab, setActiveTab] = useState('yesterday'); 
  const [showContainers, setShowContainers] = useState(false);
  useEffect(() => {
   
    const delay = 500; 
    const timeoutId = setTimeout(() => {
      setShowContainers(true);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const getContentForTab = () => {
    switch (activeTab) {
      case 'yesterday':
        return 'Yesterday Prediction are not available at the moment';
      case 'today':
        return 'Today Prediction are comming soon';
      case 'tomorrow':
        return 'Check tomorrow after the afternoon';
      default:
        return 'No prediction available at the moment';
    }
  };

  return (
    <div>
      <div className={`prediction-container ${showContainers ? 'show' : ''}`}>
        <h2 className='header_prediction'>FREE BETTING TIPS & PREDICTIONS</h2>
        <div className="tab-bar">
          <div
            className={`tab ${activeTab === 'yesterday' ? 'active' : ''}`}
            onClick={() => handleTabClick('yesterday')}
          >
            Yesterday Prediction
          </div>
          <div
            className={`tab ${activeTab === 'today' ? 'active' : ''}`}
            onClick={() => handleTabClick('today')}
          >
            Today Prediction
          </div>
          <div
            className={`tab ${activeTab === 'tomorrow' ? 'active' : ''}`}
            onClick={() => handleTabClick('tomorrow')}
          >
            Tomorrow Prediction
          </div>
        </div>
        <div className="content">
          {getContentForTab()}
        </div>
      </div>
      <div className={`content_component_prediction ${showContainers ? 'show1' : ''}`}>
         <h3 className='content_prediction_text'>Are you a sports fan looking to place some bets on the upcoming season? Our betting predictions can help you make informed decisions and increase your chances of winning. From football to basketball to baseball, we've got you covered with expert analysis and insights. So, get ready to place your bets and potentially win big!</h3>
      </div>
      <div  className={`body_prediction_text ${showContainers ? 'show2' : ''}`}>
        <div className="prediction_layers">
            <h2 className='layer_header'>ANALYZE TEAM AND PLAYER STATISTICS.</h2>
            <h4 className='layer_content'>One of the most important factors in making informed betting decisions is analyzing team and player statistics. This includes looking at past performance, current form, injuries, and other relevant factors. By doing so, you can get a better understanding of which teams and players are likely to perform well in the upcoming season, and make more accurate predictions. There are many online resources available for accessing this information, including sports news websites, betting forums, and statistical analysis tools.</h4>
        </div>

        <div className="prediction_layers">
            <h2 className='layer_header'>ANALYZE TEAM AND PLAYER STATISTICS.</h2>
            <h4 className='layer_content'>One of the most important factors in making informed betting decisions is analyzing team and player statistics. This includes looking at past performance, current form, injuries, and other relevant factors. By doing so, you can get a better understanding of which teams and players are likely to perform well in the upcoming season, and make more accurate predictions. There are many online resources available for accessing this information, including sports news websites, betting forums, and statistical analysis tools.</h4>
        </div>

        <div className="prediction_layers">
            <h2 className='layer_header'>ANALYZE TEAM AND PLAYER STATISTICS.</h2>
            <h4 className='layer_content'>One of the most important factors in making informed betting decisions is analyzing team and player statistics. This includes looking at past performance, current form, injuries, and other relevant factors. By doing so, you can get a better understanding of which teams and players are likely to perform well in the upcoming season, and make more accurate predictions. There are many online resources available for accessing this information, including sports news websites, betting forums, and statistical analysis tools.</h4>
        </div>

        <div className="prediction_layers">
            <h2 className='layer_header'>ANALYZE TEAM AND PLAYER STATISTICS.</h2>
            <h4 className='layer_content'>One of the most important factors in making informed betting decisions is analyzing team and player statistics. This includes looking at past performance, current form, injuries, and other relevant factors. By doing so, you can get a better understanding of which teams and players are likely to perform well in the upcoming season, and make more accurate predictions. There are many online resources available for accessing this information, including sports news websites, betting forums, and statistical analysis tools.</h4>
        </div>

        <div className="prediction_layers">
            <h2 className='layer_header'>ANALYZE TEAM AND PLAYER STATISTICS.</h2>
            <h4 className='layer_content'>One of the most important factors in making informed betting decisions is analyzing team and player statistics. This includes looking at past performance, current form, injuries, and other relevant factors. By doing so, you can get a better understanding of which teams and players are likely to perform well in the upcoming season, and make more accurate predictions. There are many online resources available for accessing this information, including sports news websites, betting forums, and statistical analysis tools.</h4>
        </div>
      </div>
    </div>
  );
}

export default Prediction;
