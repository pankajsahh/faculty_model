import './Home.css';
import LeftNav from '../../components/LeftNav/LeftNav.jsx'
import TopNav from '../../components/TopNavbar/TopNav.jsx'
import HomeContent from '../../components/Home_content/HomeContent.jsx'
const Home = () => {

    return (
        <div className="body_view">
            <div className="left_nav">
                <LeftNav />
            </div>
            <div className='flex_col'>
                <div className="top_nav">
                    <TopNav />
                </div>
                <div className="content_Box">
                    <HomeContent />
                </div>
            </div>

        </div>
    )
}

export default Home;