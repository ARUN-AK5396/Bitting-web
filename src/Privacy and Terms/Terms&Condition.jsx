import React,{useState,useEffect} from 'react'

function TermsAndCondition() {
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
        <div className="prediction_layers">
            <h2 className='layer_header'>Terms & Conditions</h2>
            <h4 className='layer_content'>It is your agreement to these terms and conditions in full if you are using the website or application and/or creating a Free Super Tips account now or in the future. We reserve the right to change these terms and conditions at any time, so you should check back regularly to ensure you are aware of any changes. If you don't agree to them, uninstall the application and close the website page</h4>
        </div>

        <div className="prediction_layers">
            <h2 className='layer_header'>Our Tips</h2>
            <h4 className='layer_content'>While Free Super Tips makes every effort to ensure the website/application provides accurate and up-to-date information, including but not limited to fixtures, team news, lineups, previous results, etc., no guarantees are made and Free Super Tips is not responsible for any losses resulting from the use of this information.There are links on the Free Super Tips website and application to third-party websites and businesses, but we are not responsible or liable for any dealings you may have with those sites. These 3rd parties are used at your own risk and you are responsible for reading their terms and conditions.</h4>
        </div>

        <div className="prediction_layers">
            <h2 className='layer_header'>Our Content</h2>
            <h4 className='layer_content'>Skull Bets owns the copyright to this website and its contents. All design, code, text, graphics, and other materials belong to us or our respective licensors, and may only be copied for personal, non-commercial use.</h4>
        </div>

        <div className="prediction_layers">
            <h2 className='layer_header'>Age Restrictions</h2>
            <h4 className='layer_content'>Free Super Tips does not condone illegal or underage gambling and you must be over 18 to bet. You are responsible for ensuring that gambling is legal in your jurisdiction. These applications and their information are solely for entertainment and informational purposes in these instances.</h4>
        </div>
        <div className="prediction_layers">
            <h2 className='layer_header'>The Tips We Provide</h2>
            <h4 className='layer_content'>Betting tips and advice are offered here with no expectation of gain. At Free Super Tips, we conduct extensive research to ensure our tips are as entertaining as possible, but bear in mind that using them is at your own risk. The results from previous tips are provided for informational purposes only and have been recorded and reported with the utmost precision; however, if you feel something is amiss, don't hesitate to reach out to us so that we can double-check it.</h4>
        </div>
        <div className="prediction_layers">
            <h2 className='layer_header'>Newsletter</h2>
            <h4 className='layer_content'>We may send you email about our website and application if you subscribe to our newsletter. Subscriptions are optional, but may include additional features and information.Email newsletter frequency and contents will be confirmed at the start of newsletter distribution, and all emails will include an opt-out/unsubscribe option.We reserve the right to begin and conclude our newsletter whenever we choose, without prior warning. We will make every effort to maintain accuracy in our newsletter contents, but human error and unexpected circumstances may lead to occasional mistakes or outdated information. By signing up for our newsletter, you agree that your email address, along with any additional data collected with your permission, may be utilised to provide you with an optimal service. We ensure that all personal details are safeguarded. Furthermore, we will never disclose your information to third parties without obtaining your consent first.</h4>
        </div>
        <div className="prediction_layers">
            <h2 className='layer_header'>User's Knowledge</h2>
            <h4 className='layer_content'>
                If you need support, information, or advice, visit the Gamcare website. Only bet what you can afford to lose.<br/> <br/>
                Information in this application, such as betting advice or betting tips, is provided at your own risk and no responsibility (financial or otherwise) is assumed. <br/><br/>
                Free Super Tips uses football site badges for informational purposes only, and all copyright remains with their owners.</h4>
        </div>

      </div>
    </div>
  )
}

export default TermsAndCondition