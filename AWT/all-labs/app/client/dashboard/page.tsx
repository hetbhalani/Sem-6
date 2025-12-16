"use client"
import { redirect } from "next/navigation";

async function fetchData() {
  const res = await fetch(
    "https://67c70421c19eb8753e7845fe.mockapi.io/Matrimony_app");
  return res.json();
}

export default async function ClientDash() {
  const data = await fetchData();

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">ClientDash Page</h2>

      <div className="overflow-x-auto bg-neutral-primary-soft shadow-sm rounded-lg border border-gray-200">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="text-sm bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-3 font-medium">ID</th>
              <th className="px-6 py-3 font-medium">Name</th>
            </tr>
          </thead>

          <tbody>
            {data.map((user: any) => (
              <tr
                key={user.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4">{user.id}</td>
                <td className="px-6 py-4 font-medium">{user.name}</td>
                <td className="px-6 py-4 font-medium"><button onClick={()=>redirect(`/client/${user.id}`)}>Show more</button></td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
