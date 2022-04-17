import './TopNav.css'
import { MDBIcon } from 'mdb-react-ui-kit';
import { useContext } from 'react';
import  Context  from '../context/Context.js'
import LogoutButton from '../../Pages/auth/logout/LogOut';
const TopNav = () => {

    
    const {Faculty} = useContext(Context);
    
    return (
        <>
            <div className='nav_detail'>
                <h5>Hey {Faculty.Name} welcome to your dashboard </h5>
                <h6>Let's add some publications</h6>
            </div>
            <div className="signinLogo">
                <MDBIcon far icon="circle" />
                <LogoutButton/>
            </div>
        </>
    )
}

export default TopNav;