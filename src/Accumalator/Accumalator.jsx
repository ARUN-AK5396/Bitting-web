import React,{useState,useEffect} from 'react'

import './Accumalator.css'

function Accumalator() {
  const [activeTab, setActiveTab] = useState('yesterday'); 
  const [showContainers, setShowContainers] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  useEffect(() => {
   
    const delay = 500; 
    const timeoutId = setTimeout(() => {
      setShowContainers(true);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const getContentForTab = () => {
    switch (activeTab) {
      case 'yesterday':
        return "We don't Have Accumulator Yesterday";
      case 'today':
        return 'Today Accumulator are comming soon';
      default:
        return 'No Accumulator available at the moment';
    }
  };
  return (
    <div className='main_container_accumalator'>
        <h2 className='main_container_header_accumulator'>FREE BETTING TIPS & ACCUMULATOR</h2>

        <div className={`prediction-container ${showContainers ? 'show' : ''}`}>
            <div className="tab-bar">
                <div
                    className={`tab ${activeTab === 'yesterday' ? 'active' : ''}`}
                    onClick={() => handleTabClick('yesterday')}
                >
                    Yesterday's Accumulator
                </div>
                <div
                    className={`tab ${activeTab === 'today' ? 'active' : ''}`}
                    onClick={() => handleTabClick('today')}
                >
                    Today's Accumulator
                </div>
            </div>
            <div className="content">
                 {getContentForTab()}
            </div>
      </div>

      <div className={`content_component_prediction ${showContainers ? 'show1' : ''}`}>
         <h3 className='content_prediction_text'>Betting accumulators, also known as accas, are a popular way to increase the excitement and potential winnings of sports betting. However, they can also be risky if not approached with a solid strategy. In this guide, we'll cover the basics of accumulator betting and provide tips to help you make profitable bets.</h3>
      </div>

      <div  className={`body_prediction_text ${showContainers ? 'show2' : ''}`}>
        <div className="prediction_layers">
            <h2 className='layer_header'>UNDERSTAND THE BASICS OF ACCUMULATORS.</h2>
            <h4 className='layer_content'>Before diving into accumulator betting, it's important to understand the basics. An accumulator bet is a type of bet that combines multiple selections into one bet. Each selection must win for the bet to be successful, but the potential payout is much higher than a single bet. Accumulators can include selections from different sports or events, and the odds for each selection are multiplied together to determine the overall odds and potential payout.</h4>
        </div>

        <div className="prediction_layers">
            <h2 className='layer_header'>CHOOSE THE RIGHT EVENTS TO BET ON.</h2>
            <h4 className='layer_content'>When it comes to accumulator betting, choosing the right events to bet on is crucial. You want to look for events where the odds are in your favor, but also where there is potential for multiple outcomes. For example, a soccer match where both teams are evenly matched and have a history of high-scoring games could be a good choice for an accumulator bet. On the other hand, a tennis match where one player is heavily favored may not be the best choice, as the odds for that selection will be low and won't contribute much to the overall payout. Do your research and look for events with potential for multiple outcomes and favorable odds.</h4>
        </div>

        <div className="prediction_layers">
            <h2 className='layer_header'>USE BETTING TOOLS AND RESOURCES TO YOUR ADVANTAGE.</h2>
            <h4 className='layer_content'>There are many betting tools and resources available online that can help you make informed decisions when placing accumulator bets. For example, odds comparison websites can help you find the best odds for your selections across multiple bookmakers. You can also use statistical analysis tools to research past performance and trends for the teams or players you are betting on. Additionally, many bookmakers offer promotions and bonuses for accumulator bets, so be sure to take advantage of these offers to maximize your winnings.</h4>
        </div>

        <div className="prediction_layers">
            <h2 className='layer_header'>UNDERSTAND THE BASICS OF ACCUMULATOR BETTING.</h2>
            <h4 className='layer_content'>Accumulator betting involves combining multiple bets into one, with the potential for higher payouts if all of the bets are successful. The more bets you include in your accumulator, the higher the potential payout, but also the higher the risk of losing. It's important to carefully consider your selections and the odds before placing an accumulator bet. Additionally, it's important to have a budget and stick to it, as accumulator betting can be addictive and lead to financial problems if not done responsibly.</h4>
        </div>

        <div className="prediction_layers">
            <h2 className='layer_header'>CHOOSE THE RIGHT SPORTS AND MARKETS.</h2>
            <h4 className='layer_content'>When it comes to accumulator betting, choosing the right sports and markets is crucial. Some sports and markets are more predictable than others, and it's important to do your research and analyze the statistics before making your selections. For example, football (soccer) is a popular sport for accumulator betting, but it's important to consider factors such as team form, injuries, and head-to-head records before placing your bets. Additionally, some markets, such as the over/under or both teams to score, may be more predictable than others, such as the correct score or first goalscorer.</h4>
        </div>
      </div>

    </div>
  )
}

export default Accumalator