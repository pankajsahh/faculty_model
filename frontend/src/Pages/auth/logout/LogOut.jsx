import { Link } from "react-router-dom";
import { MDBDropdownToggle,MDBDropdownItem,MDBDropdownMenu,MDBDropdown,MDBIcon } from "mdb-react-ui-kit";
import Context from "../../../components/context/Context";
import { useContext } from "react";
import './Logout.css'
import axios from "axios";
const LogoutButton =()=>{

    const {Faculty}=useContext(Context);

    function LogOutReqTOServer(){
        const MyProfileTokenID =  JSON.parse(localStorage.getItem("myid"));
        console.log(MyProfileTokenID.token)
        axios.post(`http://127.0.0.1:8000/account/logout/`,{},{
            headers: {
                'Authorization': `token ${MyProfileTokenID.token}`
            }
        })
        .then(function (response) {
            localStorage.clear("myid");
            console.log(response,"success fully removed user from browser")
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return(
        <>
        <MDBDropdown group className='shadow-0 '>
        <MDBDropdownToggle className="Logout w-2" color='blue' outline rounded>{Faculty.Name}</MDBDropdownToggle>
        <MDBDropdownMenu  className="w-2">
        <Link to="/login" onClick={LogOutReqTOServer}>
          <MDBDropdownItem className="w-2" >
          <MDBIcon fas icon="sign-out-alt" />
          <button className="LogoutButton" >LogOut</button>
          <button className="LogoutButton" >LogIn</button>
          </MDBDropdownItem>
          </Link>
        </MDBDropdownMenu>
      </MDBDropdown>
        </>
    )
}
export default LogoutButton;