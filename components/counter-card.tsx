'use client'
import { BellRing, Check, Delete, Minus, Plus } from "lucide-react"
import EasyEdit, { Types } from 'react-easy-edit';
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
import PocketBase from 'pocketbase';

import { useState } from "react"
import { useRouter } from "next/navigation";
// import { Separator } from "@/components/ui/separator"
// import { Switch } from "@/components/ui/switch"




export function CounterCard({ name = "My Counter", desc = "Card description", count = 0, id }) {

  const [counter, setCounter] = useState(count);
  const [cardtitle, setCardtitle] = useState("My Card")
  const pb = new PocketBase('http://127.0.0.1:8090');
  const isLoggedIn = pb.authStore.isValid
  const router = useRouter()
  const increaseCounter = async () => {
    count = count + 1
    // pb.collection('counter').subscribe('*', function (e) {
    //   console.log(e.record);
    // });
    await pb.collection('counter').update(id, { count });
    router.refresh()
  }

  const decreaseCounter = async () => {
    count = count - 1
    // pb.collection('counter').subscribe('*', function (e) {
    //   console.log(e.record);
    // });
    await pb.collection('counter').update(id, { count });
    router.refresh()
  }

  
  const deleteCounter = async () => {

    await pb.collection('counter').delete(id);

    // pb.collection('counter').subscribe('*', function (e) {
    //   console.log(e.record);
    // });
    router.refresh()
  }
  const save = () => { alert("text"); }
  const cancel = () => { alert("Cancelled") }

  return (
    <main>
      <Card className={cn("w-[380px]")}>
        <CardHeader>
        <Button onClick={deleteCounter}>Delete<Delete/></Button>

          <CardTitle>
            <EasyEdit
              type={Types.TEXT}
              onSave={save}
              saveButtonLabel="Save Me"
              cancelButtonLabel="Cancel Me"
              attributes={{ name: "awesome-input", id: 1 }}
            />
          </CardTitle>
          <CardDescription>{desc}</CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between">
          <Button variant="ghost" onClick={decreaseCounter}><Minus /></Button>
          {counter}
          <Button onClick={increaseCounter}><Plus /></Button>
          
        </CardFooter>
      </Card>
    </main>
  )

}
export default CounterCard;