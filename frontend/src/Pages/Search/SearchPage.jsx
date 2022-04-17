
import { Navigate, Outlet } from 'react-router-dom';
import LeftNav from '../../components/LeftNav/LeftNav';
import   SearchNavBar  from '../../components/Search_NavBar/Search_nav.jsx'
import './SearchPage.css';

const SearchPage = () => {
    if(localStorage.getItem("myid")===null){
        return <Navigate to="/login" />;
    }
    return (
        <div className="search_view">
            <div className="left_nav">
                <LeftNav />
            </div>
            <div className='flex_col_search'>
                <div className="top_search_nav">
                <SearchNavBar/>
                </div>
                
                <div className="search_content_Box">
                <Outlet/>
                </div>
            </div>

        </div>
    )
}

export default SearchPage;