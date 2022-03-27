import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
const SignIn = () => {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const data = { password: password, username: username }
    const [sucess, setsucess] = useState(false)
    let [error, seterr] = useState("No Errors Go on Login with username and password");

    const handelChange = (e) => { //for input change in form
        const inputval = e.target.value;
        const name = e.target.placeholder;
        name === "username" ? setusername(inputval) : setpassword(inputval);
    }
    
    
    function email_to_id(loginres) { //email from login will find the data of that email in db and store to local storage
        setsucess(true);
        let id="";
        axios.get(`http://127.0.0.1:8000/faculty/`, {
            headers: {
                'Authorization': `token ${loginres.token}`
            }
        }).then(resp => {
            // console.log(resp.data)
            for (let key in resp.data) {
                if (resp.data[key].Email === loginres.email) {
                    // console.log(resp.data[key],loginres.email);
                    id = resp.data[key].id
                    break
                }
            }
            //store to local storage id and token
            const data = {
                key: id,
                token: loginres.token,
                email: loginres.email,
    
            }
            localStorage.setItem("myid", JSON.stringify(data))

        }).catch(err => { console.log(err) })


    }


    async function authinspector() { //will take data and from user and send to server and response email will sent to conversion into id for further use

        axios.post(`http://127.0.0.1:8000/account/login/`, data)
            .then(function (response) {
                email_to_id(response.data);
            })
            .catch(function (error) {
                if (!error?.response) {
                    seterr("NO response from server 404 maybe bad enter")
                } else if (error.response?.status === 400) {
                    seterr("missing username or password please enter valid username and password")
                } else {
                    seterr("login Failed")
                }
            });

    }


    return (
        <>{
            sucess ?
                <div className='SignIn__main'>
                    <h2>Sign In</h2>
                    <p>signIn sucessfully go to your dashboard</p>
                    <Link to="/"><button>home</button></Link>
                </div>
                :
                <div className='SignIn__main'>
                    <h2>Sign In</h2>
                    <p>{error}</p>
                    <div className='SignIn__form'>
                        <label>Username</label>
                        <input value={username} onChange={handelChange} type='email' placeholder='username'></input>
                        <label>Password</label>
                        <input value={password} onChange={handelChange} type='password' placeholder='Password'></input>
                        <br />
                        <button onClick={authinspector} className='SignIn__button'>SignIn</button><br />
                        <Link to='/register'><button> create New Account </button></Link>
                    </div>
                </div>
        }
        </>

    );
};

export default SignIn;