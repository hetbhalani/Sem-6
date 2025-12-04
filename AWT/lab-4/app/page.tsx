"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/scrap")  
      .then((res) => res.json())
      .then((result) => setData(result.data))
      .catch((err) => console.error(err));
  }, []);
  
  return (
    <>
      <h1>Hello JAGAT</h1>
      <pre>
        this is data: {data}
      </pre>
    </>
  );
}
