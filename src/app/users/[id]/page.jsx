async function getUsers(id) {
    const res = await fetch(`https://reqres.in/api/users/${id}`);
    const { data } = await res.json();
    console.log(data);
    return data;
}

const page = async ({ params }) => {
    const { id } = params;
    const user = await getUsers(id);
    return (
        <div
            key={user.id}
            className="flex justify-between items-center bg-teal-600 rounded-md p-4 my-2 space-y-3 cursor-pointer"
        >
            <p className="font-bold text-xl">
                Nombre:
                <span> {user.first_name}</span>
            </p>
            <p className="font-bold text-xl">
                Apellido:
                <span> {user.last_name}</span>
            </p>
            <p className="font-bold text-xl">
                Correo:
                <span> {user.email}</span>
            </p>
            <img className="rounded-full w-28" src={user.avatar} />
        </div>
    );
};

export default page;
