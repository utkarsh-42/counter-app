import { useRouter } from 'next/navigation';
import PocketBase from 'pocketbase';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function useLogout(){
    const pb = new PocketBase('http://139.59.6.59:80');
    const [refresh,setRefresh] = useState(0)
    const router = useRouter()

function logout(){
    pb.authStore.clear();
    setRefresh(Math.random)
    router.refresh()
}
return logout;
}