import React, { useState, useEffect } from 'react';
import './HomeScreen.css'

function HomeScreen() {
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

  return (
    <div className='main_container'>
      <div className="body_container">
      <div className={`body_first_container ${showContainers ? 'show' : ''}`}>
          <h1 className='text_header'>The No.1 Betting Predictions Provider</h1>
          <h3 className='text_para'>If you're a fan of cricket and enjoy betting on the sport, you'll want to read this guide. We'll share some expert tips and strategies to help you make more informed bets, increase your chances of winning, and avoid common mistakes that can cost you money. Whether you're a seasoned bettor or just starting out, these tips will help you take your cricket betting to the next level.</h3>
      </div>
        <div className={`body_first_container ${showContainers ? 'show1' : ''}`}>
            <h4  className='text_para_second'>Sports betting is an activity that has a long history and is popular in numerous cultures. It involves predicting the results of various sports and placing a bet on the result. Popular sports which are generally focussed on include football - both association and American, basketball, baseball, hockey, track cycling, auto racing, mixed martial arts and boxing - professional or otherwise. Additionally, it may also incorporate non-physical events like reality shows competitions or political elections as well as animal activities like horse racing or greyhound racing.</h4> 
            <h4  className='text_para_second'>Sports betting offers bettors a choice of either placing their wagers through legal, regulated bookmakers/sportsbooks or clandestine private companies known as bookies. These entities use books to monitor bets, disbursements and obligations. In some instances, online sportsbooks may be based in different jurisdictions to the punters they serve, in an attempt to get around gambling legislation.</h4> 
            <h3 className='types_bets_header'>Types of Bets</h3>
            <ul className='text_para_second'>
              <li>There is no spread or handicap on moneyline bets, and the chosen team must win the game outright. Favored teams pay lower odds than underdogs; thus, they serve mostly as an incentive to take the underdogs. In order to increase the payout of a parlay, some bettors pair this type of bet with the favored team.</li> <br></br>
              <li>Bookmakers assign a spread, or line, to handicap one team and favor another when two teams face each other and one is viewed as more likely to win. Spread betting is when you wager against the spread. As a result, the favorite "gives" the final score, and the underdog "takes". To avoid the possibility of a tie, this number can also be expressed in half-point increments (.5), even though very few sports have a .5 point scoring system (i.e., The Ryder Cup).</li>
            </ul>
        </div>

        <div className="join_container">
          <h2>JOIN OUR TELEGRAM CHANNEL FOR MORE FREE PREDICTIONS AND TIPS</h2>
          
          <a href='http://akindustries-master-arun.netlify.app' target='blank'>
            <div className="button_container">
              <h3 className='telegram_link'>  JOIN US FOR FREE</h3>
            </div>
          </a>
        </div>
        <div className={`body_first_container ${showContainers ? 'show2' : ''}`}>
          <h2 className='bet_place_list' style={{textAlign:'center'}}>How to Place a Bet</h2>
          <h4 className='bet_place_header'>Now that you understand what each bet means, how do you place it? Most sportsbooks make it simple.</h4>
          <ul>
            <li className='bet_place_list'>Choose the game and bet type you wish to play</li>
            <li className='bet_place_list'>Click the “bet cell”</li>
            <li className='bet_place_list'>Your bet slip will show the bet</li>
            <li className='bet_place_list'>Enter your bet amount</li>
            <li className='bet_place_list'>Submit bet</li>
          </ul>
          <div className="how_much_bet_container">
            <h2 style={{textAlign:'center'}}>How Much to Bet ?</h2>
            <h4>Ultimately, it's up to you how much you want to risk on a game, but a good rule is to risk only what you can afford to lose. Sports betting is a marathon, not a sprint. There will be good days and bad days.</h4>
            <h4>In other words, you should bet the same amount on every game and risk no more than 1% to 5% of your bankroll per round (the bankroll is what you have at your disposal to bet with). For example, if you have $100 at your disposal, you should risk no more than $5 per round.</h4>
            <h4>When betting flat, bettors guard against losing their entire bankroll during a bad stretch, while also setting themselves up for a positive return on investment (ROI) when things are going well.</h4>
          </div>
        </div>
       
       <div className="final_container">
          <h2 className='header_of_conatiner'>UNDERSTAND THE BASICS OF CRICKET BETTING.</h2>
          <h4 className='body_text'>Before diving into advanced strategies, it's important to understand the basics of cricket betting. This includes understanding the different types of bets available, such as match winner, top batsman, and total runs. It's also important to know how odds work and how to read them, as well as understanding the importance of bankroll management. By mastering these basics, you'll be better equipped to make informed and successful bets.</h4>
       </div>

       <div className="final_container">
          <h2 className='header_of_conatiner'>USE DIFFERENT BETTING MARKETS TO YOUR ADVANTAGE.</h2>
          <h4 className='body_text'>One of the keys to successful cricket betting is to take advantage of the different betting markets available. This includes not only the traditional match winner and top batsman markets, but also more niche markets such as highest opening partnership, total wickets, and even player performance props. By diversifying your bets across different markets, you can increase your chances of finding value and making profitable bets. However, it's important to do your research and only bet on markets that you have a good understanding of.</h4>
       </div>

       <div className="final_container">
          <h2 className='header_of_conatiner'>RESEARCH THE TEAMS AND PLAYERS.</h2>
          <h4 className='body_text'>Before placing any bets on a cricket match, it's important to do your research on the teams and players involved. Look at their recent form, their head-to-head record, and any injuries or suspensions that may affect their performance. You should also consider the pitch conditions and how they may impact the game. By taking the time to research and analyze the data, you can make more informed betting decisions and increase your chances of success.</h4>
       </div>

       <div className="final_container">
          <h2 className='header_of_conatiner'>ANALYZE THE PITCH AND WEATHER CONDITIONS.</h2>
          <h4 className='body_text'>One of the most important factors to consider when betting on cricket is the pitch and weather conditions. The condition of the pitch can have a significant impact on the outcome of the game, with some pitches favoring spin bowlers while others are better suited to fast bowlers. Similarly, the weather conditions can also play a role, with rain and overcast conditions often favoring swing bowlers. By analyzing these factors and taking them into account when placing your bets, you can increase your chances of success and make more informed decisions.</h4>
       </div>

       <div className="final_container">
          <h2 className='header_of_conatiner'>USE BETTING TOOLS AND RESOURCES.</h2>
          <h4 className='body_text'>To take your cricket betting to the next level, it’s important to use all the tools and resources available to you. This includes using online betting calculators to help you calculate your potential winnings and losses, as well as accessing expert analysis and predictions from reputable sources. Additionally, many online sportsbooks offer live streaming of cricket matches, allowing you to watch the action unfold in real-time and make more informed betting decisions. By utilizing these resources, you can improve your chances of success and make smarter bets.</h4>
       </div>
      </div>
    </div>
  )
}

export default HomeScreen