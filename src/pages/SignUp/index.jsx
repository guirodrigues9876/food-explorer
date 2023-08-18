import { useState } from 'react';
import { Container, Form } from './styles';

import { api } from "../../services/api";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Link, useNavigate } from 'react-router-dom';


import brand from "../../assets/logo.svg";


export function SignUp(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp(){
        if(!name || !email || !password){
            return alert("Preencha todos os campos.");
        }

        api.post("users", { name, email, password })
        .then(() => {
            alert("Usuário cadastrado com sucesso!");
            navigate("/");
        })
        .catch( error => {
            if(error.response){
                alert(error.response.data.message);
            }else {
                alert("Não foi possível cadastrar");
            }
        });
    }

    return(
        <Container>
            <Form>
                <div className='brand'>
                    <img src={brand} alt="Logo" />
                </div>

                <div className="wrapper">
                    <h1>Crie sua conta</h1>
                        <div className="inputs">   
                            <Input 
                                type= "text"
                                id= {'nome'} 
                                title={'Seu nome'}
                                placeholder="Nome completo"
                                onChange={e => setName(e.target.value)}
                            />

                            <Input 
                                type= "email"
                                id= {'email'} 
                                title={'Email'}
                                placeholder="exemplo@exemplo.com"
                                onChange={e => setEmail(e.target.value)}
                            />
                            <Input 
                                type= "password"
                                id= {'password'} 
                                title={'Password'}
                                placeholder="No mínimo 6 caracteres"
                                onChange={e => setPassword(e.target.value)}

                            />
                        </div>
                    <Button 
                        title="Criar conta"
                        onClick={handleSignUp}
                    />
                    <Link to="/">
                        Já tenho uma conta
                    </Link>
                </div>
            </Form>
        </Container>
    )
}