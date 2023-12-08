export const getUsers = async () => {
    let data = await fetch("http://localhost:3000/api/users");
    data.json();
    return data.result;
}

export default function page() {
  return (
    <>
        <h1>User Detail</h1>
    </>
  )
}
