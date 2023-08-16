"use client"

import Link from 'next/link'
import React, { useState,useEffect } from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast';
import axios from 'axios'

export default function LogInPage() {

  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("api/users/login", user);   
      console.log("Login success", response.data);
      toast.success("Login Success");
      router.push("/profile");
    } catch (error: any) {
      console.log("Login Failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0 && user.email.length > 0) {
      setButtonDisabled(false);
    }
    else {
      setButtonDisabled(true);
    }
  }, [user]);




  return (
    <>
      <div className='grid grid-cols-2'>
        <form className="flex flex-col items-center justify-center min-h-screen text-dark">
          <h1 className='p-2 text-2xl'>{loading ? "Processing" : "LogIn"}</h1>
          <hr />

          <label htmlFor="email"> Email </label>
          <input
            className='p-2 mb-4 border rounded-lg
             focus:outline-none '
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder='email'
          />

          <label htmlFor="password"> Password </label>
          <input
            className='p-2 mb-4 border rounded-lg focus:outline-none '
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder='password'
          />

          <button
            onClick={onLogin}
            className='p-2 border mb-4 rounded-lg bg-light text-dark hover:bg-dark hover:text-light  focus:outline-none focus:outline-gray-600  '
          >Login here</button>
          <Link href={'/signup'} >New user? <span className='hover:underline hover:underline-offset-3'>Signup here</span></Link>

        </form>

        <div className='bg-dark items-center flex justify-center text-secondary'>

        </div>



      </div>



    </>
  )
}
