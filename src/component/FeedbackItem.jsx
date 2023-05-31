
import { useState } from "react";
import Card from "./shared/card";
import{FaTimes} from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function FeedbackItem({item, handleDelete}) {

    const handlelike = ()=>{
        <>
        <i class="fa-regular fa-heart"></i>
        <FaHeart color="pink"/>
        </>
    }
    return(
        <Card>
            
            <button onClick={handlelike(item.id)}
            className="like">
                <FaHeart color="purple"/>
            </button>
            
            <div className="num-display">{item.rating}</div>
            
            <button onClick={() => handleDelete(item.id)}
             
            className='close'>
                <FaTimes color ="purple" />
            </button>
            
            <div className="text-display">{item.text}</div>
        </Card>
       
    )
}

export default FeedbackItem