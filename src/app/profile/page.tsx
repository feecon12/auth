"use client"
import React, { useState } from "react"

export default function ProfilePage() {
    const [count, setCount] = useState(0);

    const clickhandle = () => {
        setCount(count + 1);
    }

    const clickResetHandle = () => {
        setCount(0);
    }



    return (
        <>
            <div className = "flex flex-col items-center justify-center min-h-screen py-2">
                <h1>Profile</h1>
                <p>Profile page</p>

                <button className="bg-dark  text-light w-50 h-auto p-3 mt-4" onClick={clickhandle}>
                    Clicked for {count} times
                </button>

                <button className="bg-dark text-light w-50 h-auto p-3 mt-4 " onClick={clickResetHandle}>
                    Reset
                </button>
            </div>
        
        </>
    )
}