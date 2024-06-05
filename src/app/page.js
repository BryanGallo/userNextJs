async function fetchUsers() {
    const res = await fetch("https://reqres.in/api/users");
    const { data } = await res.json();
    return data;
}

export default async function HomePage() {
    const users = await fetchUsers();
    console.log(users);
    return (
        <main className="container mx-auto">
            <h2>Usuarios</h2>
            <div>
                {users.length === 0
                    ? "No existen Usuarios"
                    : users.map((user) => (
                          <div
                              key={user.id}
                              className="bg-teal-600 rounded-md p-4 my-2"
                          >
                              <p>{user.first_name}</p>
                              <p>{user.email}</p>
                              <img className="rounded-full" src={user.avatar} />
                          </div>
                      ))}
            </div>
        </main>
    );
}
