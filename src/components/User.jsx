import Link from "next/link";

const User = ({ user }) => {
    return (
        <Link href={`/users/${user.id}`}>
            <div
                key={user.id}
                className="flex justify-between items-center bg-teal-600 rounded-md p-4 my-2 space-y-3 cursor-pointer"
            >
                <p className="font-bold text-xl">
                    {user.id}. {user.first_name}
                </p>
                <img className="rounded-full w-28" src={user.avatar} />
            </div>  
        </Link>
    );
};

export default User;
