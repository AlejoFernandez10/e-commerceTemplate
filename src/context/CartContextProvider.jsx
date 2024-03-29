import React, { useEffect } from 'react'


import { createContext, useState } from 'react';

import { useContext } from 'react';



import {createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged

 } from 'firebase/auth'

import { auth } from '../main'


export const CartContext =  createContext(null) ;

const UserContext = createContext()


export const CartContextProvider = ({children}) => {


  const [cart, setCart] = useState(() => {
    const localCart = localStorage.getItem("cart");
    return localCart ? JSON.parse(localCart) : [];
  });


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);



  const [ user , setUser] = useState({})

  
  
    // NEW USER

  const createUser = (email, password, displayName, secondName) =>{


    return createUserWithEmailAndPassword(auth, email, password, displayName, secondName)

}




  //LOGOUT

  const logout=()=>{
    return signOut(auth)
  }

  //SIGNIN
    const signIn = (email, password)=>{
      return signInWithEmailAndPassword(auth, email, password)
    }

    
//SI HAY USUARIO .....
useEffect(()=>{

  const currentUser = onAuthStateChanged(auth, (currentUser)=>{

    setUser(currentUser)
    

  })
  return ()=>{
    currentUser()
  }

}, [])

  return (
    <UserContext.Provider value={{createUser, user, logout , signIn}}>

    <CartContext.Provider value={ [cart, setCart]   }>

      {children}
    
    </CartContext.Provider>
    </UserContext.Provider>
  )
}

export const UserAuth = () =>{

  return useContext(UserContext)
}