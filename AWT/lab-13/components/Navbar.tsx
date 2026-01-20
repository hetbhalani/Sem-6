import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">Lab 13</Link>
        <div className="space-x-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/users" className="hover:underline">Users</Link>
          <Link href="/todo" className="hover:underline">Todos</Link>
        </div>
      </div>
    </nav>
  );
}
