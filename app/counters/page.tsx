'use client'
import CounterCard from '@/components/counter-card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import PocketBase from 'pocketbase';
import { useState } from 'react';
import { useForm } from 'react-hook-form';


export default function Counters(){
    const pb = new PocketBase('http://127.0.0.1:8090');
    const isLoggedIn = pb.authStore.isValid
    const router = useRouter()
    const [components, setComponents] = useState([<CounterCard/>]); 

    function addComponent() { 
    
        setComponents([...components, <CounterCard/>]) 
        
      }
if (!isLoggedIn){
router?.push('/')
}


    return(
        <main className='m-24'>
       <Button variant="ghost" onClick={addComponent}> Add Counter<Plus/></Button>
    <div className="m-4 rounded-md grid grid-cols-4 gap-12">
       {/* <Button variant="ghost" onClick={AddButton}>Add Counter<Plus/> {components.map((item, i) => item)}</Button> */}
       {components.map((item, i) => item)}
       </div>
        </main>
    )
}


