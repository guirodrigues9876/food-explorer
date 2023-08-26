import { useState } from 'react';
import { Container, Form } from './styles';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import brand from "../../assets/logo.svg";

export function SignIn(){
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ loading, setLoading ] = useState(false);

    const { signIn }= useAuth();

    function handleSignIn(){
        if( !email || !password ){
           return alert("Preencha todos os campos!");
        }

        setLoading(true);
        signIn({email, password }).finally(() => setLoading(false));
    }


    return(
        <Container>
            <Form>
                <div className='brand'>
                    <img src={brand} alt="Logo" />
                </div>

                <div className="wrapper">
                    <h1>Faça Login</h1>
                        <div className="inputs">   
                            <Input 
                                type= "email"
                                id= {"email"} 
                                title={"Email"}
                                placeholder="exemplo@email.com"
                                onChange={e => setEmail(e.target.value)}
                            />

                            <Input 
                                type= "password"
                                id= {"password"} 
                                title={"Senha"}
                                placeholder="Senha"
                                onChange={e => setPassword(e.target.value)}

                            />
                        </div>
                    <Button 
                        title="Entrar"
                        onClick={handleSignIn}
                        loading={loading}
                    />
                    <Link to="/register">
                        Criar conta
                    </Link>
                </div>
            </Form>
        </Container>
    )
}