'use client'
import { BellRing, Check, Minus, Plus } from "lucide-react"
import EasyEdit, {Types} from 'react-easy-edit';
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
// import { Separator } from "@/components/ui/separator"
// import { Switch } from "@/components/ui/switch"


const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
]

type CardProps = React.ComponentProps<typeof Card>

export function CounterCard({ className, ...props }: CardProps) {

  const [counter, setCounter] = useState(0);
  const [cardtitle,setCardtitle] = useState("My Card")

  function increaseCounter() {
    setCounter(counter + 1);
  }

  function decreaseCounter() {
    setCounter(counter - 1);
  }

  const save = () => {alert("text");}
  const cancel = () => {alert("Cancelled")}

  return (
    <main>  
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
      <CardTitle>
      <EasyEdit
      type={Types.TEXT}
      onSave={save}
      saveButtonLabel="Save Me"
      cancelButtonLabel="Cancel Me"
      attributes={{ name: "awesome-input", id: 1}}
    />
    </CardTitle>
        <CardDescription>My Counter</CardDescription>
      </CardHeader>
     <CardFooter className="flex justify-between">
        <Button variant="ghost" onClick={decreaseCounter}><Minus/></Button>
        {counter}
        <Button onClick={increaseCounter}><Plus/></Button>
      </CardFooter>
    </Card>
    </main>
  )
  
}
export default CounterCard;