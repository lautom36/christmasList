'use client'
import { signOut, useSession } from "next-auth/react";
import Header from "./components/Header/Header";

export default function Home() {
  const session = useSession();
  console.log(session)
  return (
    <main>
      <Header />
      <div >{session?.data?.user?.name }</div>
      <h1>Hello World</h1>
      <button onClick={() => signOut()}>Logout</button>
    </main>
  )
}
