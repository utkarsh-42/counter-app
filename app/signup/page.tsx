'use client'
import Auth from '@/components/auth';
import { useRouter } from 'next/navigation';
import PocketBase from 'pocketbase';
import { useState } from 'react';
import { useForm } from 'react-hook-form';


export default function Signup(){
    const pb = new PocketBase('http://139.59.6.59:80');
    const [loading,setLoading] = useState(false);
    const isLoggedIn = pb.authStore.isValid
    const router = useRouter()
    const {register,handleSubmit} = useForm();

    async function onSubmit(data: any){
        setLoading(true)
        try{
            const record = await pb.collection('users').create(data);
            console.log(record)

        }
        catch(e){
        console.log(e)
}}
if (isLoggedIn){
    router.push("/counters")
}


    return(
        <main className='m-24'>
            <Auth/>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type='email' placeholder='email' {...register('email')}/>
            <input type='password' placeholder='password' {...register('password')}/>
            <input type='password' placeholder='password' {...register('passwordConfirm')}/>
            <button type='submit' disabled={loading}>{loading ? "Loading" : "Login"}</button>
        </form>
        </main>
    )
}


