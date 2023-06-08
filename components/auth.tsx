import PocketBase from 'pocketbase';
import { useForm } from 'react-hook-form';
import useLogout from './hooks/useLogout';
import useLogin from './hooks/useLogin';

export default function Auth(){
    const pb = new PocketBase('http://139.59.6.59:80');
    const logout = useLogout();
    const {login,loading} = useLogin();
    const isLoggedIn = pb.authStore.isValid
    const {register,handleSubmit} = useForm();
    console.log(register("email"));

    async function onSubmit(data: any){
        login({email:data.email, password: data.password})
}
if (isLoggedIn)
    return(<>
    <button onClick={logout}>Log Out</button>
    </>)
    return(
        <>
        <h1>Logged in: {isLoggedIn && pb.authStore.model!.email}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type='email' placeholder='email' {...register('email')}/>
            <input type='password' placeholder='password' {...register('password')}/>
            <button type='submit' disabled={loading}>{loading ? "Loading" : "Login"}</button>
        </form>
        </>
    )
}


