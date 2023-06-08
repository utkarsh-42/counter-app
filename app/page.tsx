"use client"

import PocketBase from 'pocketbase';
import { useRouter } from "next/navigation"

export default function IndexPage() {
  const pb = new PocketBase('http://139.59.6.59:80');
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
