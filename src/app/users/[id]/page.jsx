import Link from "next/link";

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
        <div className="p-4">
            <div
                key={user.id}
                className="container mx-auto flex justify-center items-center bg-teal-600 rounded-md p-4 my-2 space-y-3 cursor-pointer space-x-7 w-6/6 md:w-3/6"
            >
                <div className="">
                    <img className="rounded-full w-28" src={user.avatar} />
                </div>
                <div>
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
                </div>
            </div>
            <div className="container mx-auto text-center">
                <Link href="/">Regresar</Link>
            </div>
        </div>
    );
};

export default page;
