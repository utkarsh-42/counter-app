import { useRouter } from 'next/navigation';
import PocketBase from 'pocketbase';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function useLogout(){
    const pb = new PocketBase('http://127.0.0.1:8090');
    const [refresh,setRefresh] = useState(0)
    const router = useRouter()

function logout(){
    pb.authStore.clear();
    setRefresh(Math.random)
    router.refresh()
}
return logout;
}