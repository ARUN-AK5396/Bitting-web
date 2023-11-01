import React,{useState,useEffect} from 'react'

function PrivacyPolicy() {
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
    <div>
      <div  className={`body_prediction_text ${showContainers ? 'show' : ''}`}>
      <h2 style={{textAlign:'center'}}>Privacy Policy</h2>
        <div className="prediction_layers">
            <h2 className='layer_header'>Data We Collect</h2>
            <h4 className='layer_content'>At UNIQ BETS, we consider your privacy to be of utmost importance. As such, we are committed to protecting any information that is collected on our website / app. This Privacy Policy describes the data gathered on the Website / app, and how it is used by us It should be noted that this Privacy Policy applies solely to information gathered through our Website / app . All of the user data collected by your app encrypted in transit, if the user is inactive for 90 days will be deleted automatically.</h4>
        </div>

        <div className="prediction_layers">
            <h2 className='layer_header'>Disclaimer</h2>
            <h4 className='layer_content'>The tips we provide are not guaranteed to be successful, We urge you to do your own research before betting.</h4>
        </div>

        <div className="prediction_layers">
            <h2 className='layer_header'>Visitors Info</h2>
            <h4 className='layer_content'>For logged-in users and those commenting on blog posts on SkullBetting App, Betting Tips Today also collects potentially personally-identifying information such as Name and E-Mail Address, In our android app we will collect Device ID to deliver App's Notification and we will also collect Advertisement ID if were to show Ads in out Apps or websites.</h4>
        </div>

        <div className="prediction_layers">
            <h2 className='layer_header'>Security</h2>
            <h4 className='layer_content'>It is important that we maintain the security of your Personal Information, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. In spite of our efforts to protect your Personal Information, we cannot guarantee its absolute security.</h4>
        </div>

      </div>
    </div>
  )
}

export default PrivacyPolicy;