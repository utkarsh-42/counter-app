import { useRouter } from 'next/navigation';
import PocketBase from 'pocketbase';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function useLogin(){
    const pb = new PocketBase('http://127.0.0.1:8090');
    const [loading,setLoading] = useState(false);
    const router = useRouter()

    async function login({email,password}){
        setLoading(true)
        try{
        const authData = await pb.collection('users').authWithPassword(email, password);
        }
        catch(e){
        console.log(e)
    }
setLoading(false)
router?.push("/counters")
router.refresh()
}
return {login,loading};
}