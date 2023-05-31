
import { useState } from 'react';
import Header from  './component/header';

import Feedbackdata from './component/data/Feedbackdata';
import FeedbackList from './component/FeedbackList';
import FeedbackStats from './component/Feedbackstate';
import FeedbackForm from './component/FeedbackForm';
import {v4 as uuidv4} from 'uuid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Aboutpage from './component/pages/Aboutpage';
import Aboutlinkicon from './component/Aboutlinkicon';
function App(){
    const[feedback,setfeedback]=useState(Feedbackdata);
    
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')){
            setfeedback(feedback.filter((item) => item.id != id));
        }
    }
    const addFeedback = (newFeedback)=>{
        newFeedback.id = uuidv4();
        setfeedback([newFeedback,...feedback]);
    }
    return(
        <Router>
        <Header  />
       
        <div className='container'>
            <Routes>
                <Route path='/' element={
            <>
                <FeedbackForm handleAdd={addFeedback}/>
                <FeedbackStats feedback={feedback}/>
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
                <Aboutlinkicon />
            </>
                }></Route>
                <Route path='/about' element={<Aboutpage/>} />

               

           </Routes> 
           
        </div>
       
        </Router>
     
       
        
    )
    
}
export default App;