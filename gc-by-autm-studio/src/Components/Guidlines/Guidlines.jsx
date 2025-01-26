import ExploreCommunity from '../ExploreCommunities/ExploreCommunity'
import './Guidlines.css'

const Guidline = ()=>{

    return <>

<ExploreCommunity/>
        <div className='guidLinesHolder'>
            <div className='guidLineBlock'>
                <h2>Respect privacy</h2>
                <p>Do not share any personal information, yours or someone else's.</p>
            </div>
            <div className='guidLineBlock'>
                <h2>No hate speech or discrimination</h2>
                <p>Any confession promoting hate or discrimination based on race, gender, religion, nationality, disability, sexual orientation, or age will be removed.</p>
            </div>
            <div className='guidLineBlock'>
                <h2>No inappropriate content</h2>
                <p>Refrain from sharing adult-only content, including fantasies or wishes intended for mature audiences.</p>
            </div>
            <div className='guidLineBlock'>
                <h2>No threats or harm</h2>
                <p>Do not post confessions that contain threats or promote self-harm, harm to others, or any form of violence.</p>
            </div>
        
        </div>
    </>

}

export default Guidline