import { useRouter } from 'next/navigation';
import PocketBase from 'pocketbase';
import { useState } from 'react';

export default function useLogin(){
    const pb = new PocketBase('http://139.59.6.59:80');
    const [loading,setLoading] = useState(false);
    const router = useRouter()

    async function login({email,password}:any){
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