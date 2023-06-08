'use client'
import CounterCard from '@/components/counter-card';
import PocketBase from 'pocketbase';
import CreateCounter from './creater-counter';

export default async function Counters() {
    const pb = new PocketBase('http://139.59.6.59:80');
    const isLoggedIn = pb.authStore.isValid
    async function getNotes() {
        const resultList = await pb.collection('counter').getList(1, 50, {
            sort: 'created',
        });
        const data = resultList.items;
        return data
    }

    const notes = await getNotes();
   



    return (
        <main className='m-24'>
   <CreateCounter/>
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


