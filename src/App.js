import './App.css';
import HomeScreen from './Home/HomeScreen';
import Prediction from './Prediction/Prediction';
import Accumalator from './Accumalator/Accumalator';
import Contact from './ContactUS/Contact';
import PrivacyPolicy from './Privacy and Terms/PrivacyPolicy';
import TermsCondition from './Privacy and Terms/Terms&Condition';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

import { BrowserRouter, Routes,Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
      
         <Route path='/' element={<HomeScreen/>} />
         <Route path='/prediction' element={<Prediction/>}/>
         <Route path='/accumalator' element={<Accumalator/>}/>
         <Route path='/contactus' element={<Contact/>}/>
         <Route path='/privacy' element={<PrivacyPolicy/>} />
         <Route path='/terms' element={<TermsCondition/>} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
