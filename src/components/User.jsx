"use client";

const User = ({ user }) => {
    return (
        <div
            key={user.id}
            className="flex flex-col justify-center items-center bg-teal-600 rounded-md p-4 my-2 space-y-3"
        >
            <p className="font-bold text-xl">{user.first_name}</p>
            <img className="rounded-full w-36" src={user.avatar} />
            <button
                className="bg-teal-800 p-4 rounded-md"
                onClick={(e) => {
                    alert("hola");
                }}
            >
                Ver Info
            </button>
        </div>
    );
};

export default User;
