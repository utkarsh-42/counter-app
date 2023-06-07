'use client'
import CounterCard from '@/components/counter-card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import PocketBase from 'pocketbase';

export default async function Counters() {
    const pb = new PocketBase('http://139.59.6.59:80');
    const isLoggedIn = pb.authStore.isValid
    const router = useRouter()
    async function addComponent() {
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
    async function getNotes() {
        const resultList = await pb.collection('counter').getList(1, 50, {
            sort: 'created',
        });
        const data = resultList.items;
        return data
    }

    const notes = await getNotes();
    if (!isLoggedIn) {
        router?.push('/')
    }



    return (
        <main className='m-24'>
            <Button variant="ghost" onClick={addComponent}> Add Counter<Plus /></Button>
            <div>
                <h1>My Counters</h1>
                <div>
                    {notes?.map((note) => {
                        return <Note key={note.id} note={note} />;
                    })}
                </div>
            </div>
        </main>
    )

    function Note({ note }: any) {
        const { name, count, desc, id } = note || {};

        return (
            <CounterCard name={name} desc={desc} count={count} id={id} />
        );
    }
}


