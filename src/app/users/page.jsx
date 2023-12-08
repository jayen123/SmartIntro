import Link from "next/link";

export const getUsers = async ()=> {
    let data = await fetch("http://localhost:3000/api/users");
     data = await data.json();
    return data;
}
export default async function Users() {
    const users = await getUsers();
  return (
    <>
    <h1>Users</h1>
            {
                users.map(({name})=>(
                    <div>
                        <Link className="text-teal-500 text-xl font-bold" href={`users/${name}`}>{name}</Link>
                    </div>
                ))
            }
    </>
  )
}
