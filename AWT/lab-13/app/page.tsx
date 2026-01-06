import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home page</h1>
      <Link href='/users' prefetch>Users</Link>
    </>
  );
}
