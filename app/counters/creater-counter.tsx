
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import PocketBase from 'pocketbase';
import { useForm } from 'react-hook-form';

export default function CreateCounter() {
    const url = 'https://fit-engineer.pockethost.io'
    const pb = new PocketBase(url)
    const isLoggedIn = pb.authStore.isValid
    const router = useRouter()
    const create = async() => {
        const data = {
            "name": "test",
            "count": 0,
            "desc": "test",
            "field": pb.authStore.model.id
        };

        const record = await pb.collection('counter').create(data);
        // setComponents([...components, <CounterCard/>]) 
        router.refresh()

    }

      
    return (
        <main className='m-24'>
           <Button variant="ghost" onClick={create}> Add Counter<Plus /></Button>
        </main>

    )
}