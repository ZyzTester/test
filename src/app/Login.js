import React, { useState } from 'react'
import { useLogin, useNotify, Notification, TextField, SimpleForm, TextInput, Button, SaveButton } from 'react-admin';
import folderIcon from './../assets/folder.svg'
import beeLogo from './../assets/bee.svg'
const Folder = () => {
    return(
        <img src={folderIcon} alt='table' fill='white' id='svg' width='20' />
    )
}

export default function Login({variant, ...props}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin();
    const notify = useNotify();
    const submit = e => {
        e.preventDefault();
        // will call authProvider.login({ email, password })
        login({ email, password }).catch(() =>
            notify('Invalid email or password')
        );
    };

  return (
    <div id='login' >
       <div id='login-form' >
               <SimpleForm toolbar={false} onSubmitCapture={submit} id='form' >
               <section id='logo' >
                <img src={beeLogo} alt='bee pretty' fill='black' id='svg' width='20' />
                <p> Bee Pretty </p>
               </section>
                    <section id='inputs' >
                        <TextInput {...props}
                         id="outlined-basic"
                          label="Email"
                           variant="outlined"
                           name="email"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)} />
                         <br></br>
                        <TextInput {...props}
                         id="outlined-basic"
                          label="Password"
                           variant="outlined"
                           name="password"
                           type="password"
                           value={password}
                           onChange={e => setPassword(e.target.value)} />
               </section>
               <button type='submit' title='submit' >ZALOGUJ</button>
               </SimpleForm>
                <Notification />
       </div>
    </div>
  )
}
