'use client'

// In a Server Component or Server Action
import { redirect } from 'next/navigation';
import React, { useState } from 'react'

function login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function check(e: React.FormEvent) {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);

        if(email == "admin@123"){
            redirect('/admin/dashboard')
        }
        else{
            redirect('/client/dashboard')
        }
    }

  return (
    <>
        <div>Login Page</div>
        
        <form className="max-w-sm mx-auto" onSubmit={check}>
        <div className="mb-5">
            <label className="block mb-2.5 text-sm font-medium text-heading">Your email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="name@flowbite.com" required />
        </div>
        <div className="mb-5">
            <label className="block mb-2.5 text-sm font-medium text-heading">Your password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="••••••••" required />
        </div>
        <button type="submit" className="text-black bg-brand box-border border focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Submit</button>
        </form>

    </>
    )
}

export default login