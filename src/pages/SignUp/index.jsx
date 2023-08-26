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
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    function handleSignUp(){
        if(!name || !email || !password){
            return alert("Preencha todos os campos.");
        }
        
        if(password.length < 6){
            return alert("A senha deve ter no mínimo 6 caracteres");
        }
        
        setLoading(true);
        api.post("users", { name, email, password })
        .then(() => {
            setLoading(false);
            alert("Usuário cadastrado com sucesso!");
            navigate("/");
        })
        .catch( error => {
            if(error.response){
                alert(error.response.data.message);
            }else {
                alert("Não foi possível cadastrar");
            }
            setLoading(false);
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
                                id= {"nome"} 
                                title={"Seu nome"}
                                placeholder="Nome completo"
                                onChange={e => setName(e.target.value)}
                            />

                            <Input 
                                type= "email"
                                id= {"email"} 
                                title={"Email"}
                                placeholder="exemplo@exemplo.com"
                                onChange={e => setEmail(e.target.value)}
                            />
                            <Input 
                                type= "password"
                                id= {"password"} 
                                title={"Senha"}
                                placeholder="No mínimo 6 caracteres"
                                onChange={e => setPassword(e.target.value)}

                            />
                        </div>
                    <Button 
                        title="Criar conta"
                        onClick={handleSignUp}
                        loading={loading}
                    />

                    <Link to="/">
                        Já tenho uma conta
                    </Link>
                </div>
            </Form>
        </Container>
    )
}