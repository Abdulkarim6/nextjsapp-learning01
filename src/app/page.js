
import { authOptions } from "../lib/authOptions";
import UserInfoShow from "./components/UserInfoShow/UserInfoShow";
import { getServerSession } from "next-auth/next"

export default async function Home() {
  const session = await getServerSession(authOptions);
  
  return (
    <section>
       <h1>This is home page</h1>
       <h1>This is home page</h1>
       <h1>This is home page</h1>
       <h1>This is home page</h1>
       <UserInfoShow/>
       <h1>This is home page</h1>
       <h1>This is home page</h1>
       <h1>This is home page</h1>
       <h1>This is home page</h1>
       <div className="my-5 font-semibold text-xl">
          <p>showing by server component:</p>
          <p>user: {session?.user?.name}</p>
          <p>role: {session?.user?.role}</p>
       </div>
       <h1>This is home page</h1>
       <h1>This is home page</h1>
       <h1>This is home page</h1>
       <h1>This is home page</h1>
    </section>
  );
}
