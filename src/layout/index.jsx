import React from 'react'
import Home from './Home/Home'
import Login from './Login/Login'
import useToken from './Login/store/useToken';

export default function HomePage() {
  const token = useToken((state) => state.token);

  if (token) {
    return <Home />
  }
  return <Login />

}
