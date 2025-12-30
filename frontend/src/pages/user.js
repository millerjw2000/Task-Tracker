import React, {useEffect, useState} from "react"
import axios from "axios"
import { Link, useLocation } from "react-router-dom"
import { Logout } from './logout'

export function User() {

    const location = useLocation()
    const token = localStorage.getItem('token')
    const [message,setMessage] = useState('')

    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {

        const headers = {
            'Authorization' : `Bearer ${token}`
        }

        const res = axios.get('http://localhost:8080/tasks/getAll', { headers })
            .then(res => {

                if (res.status == 200) {
                    setMessage('received info')
                    setLoggedIn(true)
                }

            }).catch(err => {

                if (err.response) {
                    setMessage("No info or not logged in")
                }

            })

    },[token])

    // TODO: add form to add a task
    // display exisiting tasks with buttons to delete and change status

    return (
        <>
            {(loggedIn) ? (
                <>
                    You are logged in!
                    <Logout/>
                </>
            ) : (
                <>
                    You are not logged in yet! (link login page here)
                </>
            )}
        </>
    )
}