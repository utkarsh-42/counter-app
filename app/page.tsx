"use client"

import PocketBase from 'pocketbase';
import { useRouter } from "next/navigation"

export default function IndexPage() {
  const url = 'https://fit-engineer.pockethost.io'
const pb = new PocketBase(url)
  const isLoggedIn = pb.authStore.isValid
  const router = useRouter()
  if (isLoggedIn)
  return(
    router?.push('/counters')
  )
  
  

  
  


  return (
    <main className="m-24" >
      <h1>Hello</h1>
    </main>
  )
}
