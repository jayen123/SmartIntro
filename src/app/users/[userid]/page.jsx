export const getUser = async (id) => {
    let data = await fetch(`http://localhost:3000/api/users/${id}`);
    data = await data.json();
    return data.result;
}

export default async function UserDetail({params}) {
  const user = await getUser(params.userid);
  return (
    <>
        <h1>User Detail</h1>
        
        <h2>Name : {user.name}</h2>
        <h2>Email : {user.email}</h2>
        <h2>Age : {user.age}</h2>
    </>
  )
}
