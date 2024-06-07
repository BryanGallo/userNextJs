import User from "@/components/User";
async function fetchUsers() {
    const res = await fetch("https://reqres.in/api/users");
    const { data } = await res.json();
    return data;
}

export default async function HomePage() {
    const users = await fetchUsers();
    console.log(users);
    return (
        <main className="container mx-auto h-screen w-4/6 md:w-3/6">
            <h2 className="text-center text-3xl">Usuarios</h2>
            <div>
                {users.length === 0
                    ? "No existen Usuarios"
                    : users.map((user) => <User key={user.id} user={user} />)}
            </div>
        </main>
    );
}
