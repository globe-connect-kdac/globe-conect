import { useNavigate } from 'react-router-dom'
import './ExploreCommunity.css'

const ExploreCommunity = () => {

    const navigate = useNavigate()

    const communityGrid = ()=>{
        
        navigate('/explore-communities')

    }

    return <>
        

        <div className="mainCommunityExplorer">
            <h2>Explore Communities</h2>
            <p>Create or join community and start sharing your ideas</p>

            <div className='exploreCommunityButtonHolder'>
                <button>Create Community</button>
                <button onClick={communityGrid}>Join Community</button>
            </div>
        </div>

    </>

}

export default ExploreCommunity