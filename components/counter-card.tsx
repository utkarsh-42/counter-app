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
  const url = 'https://fit-engineer.pockethost.io'
const pb = new PocketBase(url)
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

  const editName = async (value: any) => {
    await pb.collection('counter').update(id, { name: value });
    router.refresh()
  }

  const editDesc = async (value: any) => {
    await pb.collection('counter').update(id, { desc: value });
    router.refresh()
  }



  const deleteCounter = async () => {

    await pb.collection('counter').delete(id);

    // pb.collection('counter').subscribe('*', function (e) {
    //   console.log(e.record);
    // });
    router.refresh()
  }

  return (
    <main>
      <Card className={cn("w-[380px]")}>
        <CardHeader>
          <Button onClick={deleteCounter}>Delete<Delete /></Button>

          <CardTitle>
            <EasyEdit
              type={Types.TEXT}
              onSave={editName}
              saveButtonLabel="Save"
              cancelButtonLabel="Cancel"
              attributes={{ name: "awesome-input", id: 1 }}
              placeholder={name}
            />
          </CardTitle>
          <CardDescription><EasyEdit
            type={Types.TEXT}
            onSave={editDesc}
            saveButtonLabel="Save"
            cancelButtonLabel="Cancel"
            attributes={{ name: "awesome-input", id: 1 }}
            placeholder={desc}
          /></CardDescription>
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