import { useRouter } from 'next/navigation';
import PocketBase from 'pocketbase';
import { useState } from 'react';

export default function useLogin(){
    const url = 'https://fit-engineer.pockethost.io'
const pb = new PocketBase(url)
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