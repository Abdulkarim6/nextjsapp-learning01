"use client"
import { useSession} from "next-auth/react"

const UserInfoShow = () => {
     const session  = useSession();

    return (
        <div className="my-5 font-semibold text-xl">
            <p>{JSON.stringify(session)}</p>
            <p>Signed in as {session?.data?.user?.email}; showing by client component</p>
        </div>
    );
};

export default UserInfoShow;