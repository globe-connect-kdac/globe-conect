import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Guidline from '../Components/Guidlines/Guidlines'
import NavBar from '../Components/NavBar/NavBar'
import Popular from '../Components/PopularCommunities/Popular'
import { addpost } from '../Services/Post'
import './AddPost.css'

const AddPost = () => {

    
    const [content, setContent] = useState('')
    const navigate = useNavigate();
    const addPost = async()=>{

        if(content.length === 0)
        {
            toast.warn("Please type something before submitting...!!!")
        }
        else
        {
            const userIdFromSessionStorage = sessionStorage.getItem("userId")
            console.log(userIdFromSessionStorage);
            const result = await addpost(content, userIdFromSessionStorage)
            console.log(result);
            if(result.affectedRows == 1)
            {
                toast.success('Posted Content Successfully...!!!');
                navigate('/home');
            }
            else
            {
                toast.error(result['error']);
            }
        }


    }
    
    return <>
     
                <div className='addPostMainHolder'>
                    <textarea 
                    onChange={(e) => {
                    setContent(e.target.value)
                    }} 
                    placeholder='Share your thoughts... '></textarea>
     
                    <div className='postButtonHolder'>
                        <button onClick={addPost}>Post</button>
                    </div>
                </div>
            {/* </div> */}
            
            

    </>

}

export default AddPost