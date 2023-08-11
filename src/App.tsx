import React, { useState } from 'react'
import Header from './components/header/header';
import { Link, Routes, Route, Navigate } from "react-router-dom";
import Homepage from './components/pages/homepage/homepages';
import Loginpage from './components/pages/loginpage/loginpage';
import Registerpage from './components/pages/registerpage/registerpage';

type Props = {}

export default function App({}: Props) {
  const [data,setData]=useState(0);
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/login" element={<Loginpage/>}></Route>
        <Route path="/register" element={<Registerpage/>}></Route>
      </Routes>
    </div>
  )
}