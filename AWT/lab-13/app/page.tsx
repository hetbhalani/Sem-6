import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center py-10">
      <h1 className="text-4xl font-bold mb-4">Welcome to Lab 13</h1>
      <p className="mb-8">A simple resource management system.</p>

      <div className="flex justify-center gap-4">
        <Link href="/users" className="bg-blue-500 text-white px-4 py-2 rounded">
          User Management
        </Link>
        <Link href="/todo" className="bg-green-500 text-white px-4 py-2 rounded">
          Task Tracking
        </Link>
      </div>
    </div>
  );
}
