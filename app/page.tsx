'use client'

import Auth from "@/components/auth"
import PocketBase from 'pocketbase';
import { useRouter } from "next/navigation"

// import { Separator } from "@/components/ui/separator"
// import { Switch } from "@/components/ui/switch"
function addCounterCard() {

}


export function Home() {
  const pb = new PocketBase('http://139.59.6.59:80');
  const isLoggedIn = pb.authStore.isValid
  const router = useRouter()
  
  if (isLoggedIn)
  return(
    router?.push('/counters')
  )

  
  


  return (
    <main className="m-24" >
      <Auth/>
    </main>
  )
  
}
export default Home;