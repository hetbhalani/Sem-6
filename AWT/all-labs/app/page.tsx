"use client"

import { redirect } from "next/navigation";

export default function Home() {
  return (
    <>
      <h1>Home page</h1>
      <button onClick={()=>redirect('/login')} className="btn btn-blue">Login</button>
    </>
  );
}
