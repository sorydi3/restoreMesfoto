import Image from "next/image";
import Link from "next/link";
import { withAuthUser, AuthAction } from 'next-firebase-auth'
import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Router from "next/router"
import app from "../pages/api/firebase";



function LoginButton() {
  const auth = getAuth(app);
  const [user] = useAuthState(auth);
  return ( <>
    {!user ? <button onClick={() => Router.push("/login")}
    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
    >Signin</button>  : <LoginButton/> }
    </>
  )
}
  



function LogoutButton() {
  const auth = getAuth(app);
  const [user] = useAuthState(auth);
  return (<>
    {user ? <button onClick={() => signOut(auth)}
    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
    >Signout</button>  : <LoginButton/> }
  </>
    
  )
}

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full mt-3 border-b-2 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex space-x-2">
        <Image
          alt="header text"
          src="/imageIcon.png"
          className="sm:w-14 sm:h-14 w-9 h-9"
          width={36}
          height={36}
        />
        <h1 className="sm:text-5xl text-3xl font-bold ml-2 tracking-tight">
          RestoradorFotos.io
        </h1>
      </Link>
      <a
        href="https://vercel.com/templates/next.js/ai-photo-restorer"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          alt="Vercel Icon"
          src="/vercelLogo.png"
          className="sm:w-10 sm:h-[34px] w-8 h-[28px]"
          width={32}
          height={28}
        />
      </a>
      <LogoutButton />
    </header>
  );
}
