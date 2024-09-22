"use client"
import { useSession, signIn, signOut } from "next-auth/react"

export default function SamplePage() {
  const { data: session } = useSession();
  if (session) {
    return (
      <main className="flex justify-center items-center">
        Signed in <br />
        <button className="p-1 bg-blue-600 text-white border" onClick={() => signOut()}>Sign out</button>
      </main>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn("github")}>Sign in with Github</button>
      <button onClick={() => signIn("google")}>Sign in with Google</button>
    </>
  )
}