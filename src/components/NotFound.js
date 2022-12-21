import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

function NotFound() {

    const navigate = useNavigate()

    // Le useEffect, avbec Navigate, qui retourne au home page quand une erreur survient
    useEffect(() => {
        setTimeout(() => {
            navigate("/", { state: "***********<br/>{☠️}Error{☠️}<br/>***********"})
        }, 1000)
    }, [navigate])


    return <h1>NotFound</h1>
}

export default NotFound