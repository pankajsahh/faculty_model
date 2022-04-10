
import { Outlet } from 'react-router-dom';
import LeftNav from '../../components/LeftNav/LeftNav';
import SearchEngine from '../../components/SearchEngine/SearchEngine';

import './SearchPage.css';

const SearchPage = () => {

    return (
        <div className="search_view">
            <div className="left_nav">
                <LeftNav />
            </div>
            <div className='flex_col_search'>
                <div className="top_search_nav">
                    <SearchEngine />
                </div>
                
                <div className="search_content_Box">
                <Outlet/>
                </div>
            </div>

        </div>
    )
}

export default SearchPage;