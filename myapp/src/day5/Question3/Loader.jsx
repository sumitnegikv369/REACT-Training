import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import './styles.css';

const Loader = () => {
const [comments, setComments] = useState([]);
const [isLoading, setIsLoading] = useState(true);
    const getComments = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/comments');
            const data = await res.json();
            setComments(data.splice(0,2));
            setIsLoading(false);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
      const timer = setTimeout(() => {
        getComments();
      }, 2000);
    
      return () => {
        clearTimeout(timer)
      }
    }, [])
    
  return (
    <div className='ques3'>
        <button onClick={()=>window.location.reload()}>Reload</button>
       <div className='container'>
       {
           isLoading ? <Spinner/> : <>
           {comments.map((comment)=>(
            <div key={comment.id} className='commment'>
                <p>{comment.body}</p>
                <h2>{comment.email}</h2>
            </div>
           ))}
           </>
        }
       </div>
    </div>
  )
}

export default Loader