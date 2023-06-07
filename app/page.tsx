'use client'
import { BellRing, Check, Minus, Plus } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { useState } from "react"
import CounterCard from "@/components/counter-card"
import Auth from "@/components/auth"
import PocketBase from 'pocketbase';
import { useRouter } from "next/navigation"

// import { Separator } from "@/components/ui/separator"
// import { Switch } from "@/components/ui/switch"
function addCounterCard() {

}


export function Home() {
  const pb = new PocketBase('http://127.0.0.1:8090');
  const isLoggedIn = pb.authStore.isValid
  const router = useRouter()
  const [components, setComponents] = useState([<CounterCard/>]); 
  
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