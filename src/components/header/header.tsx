import React from 'react'
import { Link } from 'react-router-dom'


type Props = {}

export default function header({ }: Props) {
    return (
        <nav className='bg-green-200'>
            <div className='container mx-auto'>
                <ul className='flex justify-between items-center py-4'>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/login"}>Login</Link>
                    </li>
                    <li>
                        <Link to={"/register"}>Register</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}