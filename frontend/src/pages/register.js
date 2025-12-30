import React, {useEffect, useState} from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

//TODO: maybe a confirm password input with validation to make sure they match
// make sure password and username have a maximum length

export function Register() {

    const [name,setName] = useState("")
    const [password,setPassword] = useState("")

    const [output, setOutput] = useState("")
    const navigate = useNavigate()

    const handleSubmit =  async (e) => {
        e.preventDefault()
        
        const res = await axios.post('http://localhost:8080/auth/register',
            {

                username: name,
                password: password,

            }
        ).then( res => {

                if (res.status == 200) {
                    setOutput("Registration success!")
                    navigate('/')
                }

            }
        ).catch(err => {

                if (err.response) {
                    setOutput("Registration failure")
                }
            }
        )
    }

    const handlePassChange = (e) => {
        setPassword(e.target.value)
    }

    const handleUsernameChange = (e) => {
        setName(e.target.value)
    }

    return (
        <>
            <div className="form">
                Register
                <form className="login" onSubmit={handleSubmit}>
                    <div className="input">
                        <input type="text" value={name} placeholder="username"  required onChange={handleUsernameChange}/>
                    </div>
                    <div className="input">
                        <input type="text" value={password} placeholder="password" required onChange={handlePassChange}/>
                    </div>     
                    <div className="submit">
                        <input type="submit"/>
                    </div>
                    <Link to={'/'}>Login page</Link>
                </form>
                {output}
            </div>
            
        </>
    )
}