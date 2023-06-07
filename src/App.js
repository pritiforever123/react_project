
import { useState } from 'react';
import Header from  './component/header';


import FeedbackList from './component/FeedbackList';
import FeedbackStats from './component/Feedbackstate';
import FeedbackForm from './component/FeedbackForm';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Aboutpage from './component/pages/Aboutpage';
import Aboutlinkicon from './component/Aboutlinkicon';
import { FeedbackProvider } from './component/shared/context/Feedbackcontext';

function App(){
    
    
   
   
    return(
        <>
        <FeedbackProvider>
       
        <Header  />
       
        <div className='container'>
            <Routes>
                <Route path='/' element={
            <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList  />
                <Aboutlinkicon />
            </>
                }></Route>
                <Route path='/about' element={<Aboutpage/>} />

               

           </Routes> 
           
        </div>
      
        </FeedbackProvider>
        </>
       
       
     
       
        
    )
    
}
export default App;