
import PocketBase from 'pocketbase';
import { useForm } from 'react-hook-form';

export default function CreateCounter() {
    const pb = new PocketBase('http://139.59.6.59:80');
    const isLoggedIn = pb.authStore.isValid
    const { register, handleSubmit } = useForm();

    async function onSubmit(data: any){
        console.log(data)
        const record = await pb.collection('counter').create(data);

    }
    return (
        <main className='m-24'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type='text' placeholder='counter name' value='My Counter' {...register('name')} />
                <input type='number' placeholder='password' {...register('count')} />
                
            </form>
        </main>

    )
}