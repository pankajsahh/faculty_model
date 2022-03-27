import axios from 'axios';
import { useState } from 'react';
import './Register.css'
import { Link } from 'react-router-dom';

const Register = () => {

    const defaultData = {
        Name:"",
        username: "",
        email: "",
        password: "",
        password2: "",
        department:"",
        designation:"",

    }
    const [data, setdata] = useState(defaultData);
    const [sucess, setsucess] = useState(false);
    const [error,seterror] = useState("please remember your username for future login")
    
        function handelRegisterChanges(props) {
            const { name, value } = props.target;
            setdata({
                ...data,
                [name]: value
            });
        };

    function createFacultytodatabase(res){
        
        axios.post(`http://127.0.0.1:8000/faculty/`,{Name:data.Name,Department:data.department,Designation:data.designation,Email:data.email},
        {
            headers: {
                'Authorization': `token ${res.token}`
        }}).then((response)=>{
        console.log(response,"db created");
        localStorage.setItem("myid",JSON.stringify({key:response.data.id,token:res.token,email:response.data.Email}))
        })
    }

    function MakeAnewUser() {
        
        axios.post(`http://127.0.0.1:8000/account/register/`, { username: data.username, email: data.email, password: data.password, password2: data.password2})
            .then(resp => {
                
                if(resp.data.username[0].length<2){ // this trigger only if register sucess
                    setsucess(true);
                    console.log(resp.data,"user created")
                    createFacultytodatabase(resp.data)
                }else{
                    seterror(resp.data.username)
                }
            }
            )
            .catch(error => { 
                seterror(error.response.data.Error);
                console.log(error.response.data) })
    }


    return (
        <>{
            sucess ?<>
            <div>register sucess</div>
            <div>Go to home page</div>
            <Link to="/"><button>home page</button></Link>
            </>
            
            :
            <div className="Register">
                <h2>Register</h2>
                <p>{error}</p>
                <p>always remember your username for login</p>
                <div className="Register_form">

                    <label htmlFor="Name">Full Name</label>
                    <input value={data.Name} placeholder="Full Name" onChange={handelRegisterChanges} type="text" name='Name' />
                    <label htmlFor="username">username</label>
                    <input value={data.username} placeholder="Username" onChange={handelRegisterChanges} type="text" name='username' />
                    <label htmlFor="email">Email</label>
                    <input value={data.email} placeholder="Email" onChange={handelRegisterChanges} type="text" name='email' />
                    
                    <label htmlFor="department">Department</label>
                    <input value={data.department} placeholder="Department" onChange={handelRegisterChanges} type="text" name='department' />
                    <label htmlFor="designation">Designation</label>
                    <input value={data.designation} placeholder="Designation" onChange={handelRegisterChanges} type="text" name='designation' />
                    
                    <label htmlFor="password">Passwod</label>
                    <input value={data.password} placeholder="Passwod" onChange={handelRegisterChanges} type="text" name='password' />
                    <label htmlFor="password2">confirm Password</label>
                    <input value={data.password2} placeholder="confirm Password" onChange={handelRegisterChanges} type="text" name='password2' /></div>
                <input type="submit" onClick={MakeAnewUser} />
            </div >
        }
        </>
    );
};

export default Register;