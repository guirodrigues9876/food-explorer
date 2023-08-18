import { Container, Form } from './styles';
import { Link } from 'react-router-dom';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import brand from "../../assets/logo.svg";

export function SignIn(){

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
                                id= {'email'} 
                                title={'Email'}
                                placeholder="exemplo@email.com"
                            />

                            <Input 
                                type= "password"
                                id= {'password'} 
                                title={'password'}
                                placeholder="No mínimo 6 caracteres"
                            />
                        </div>
                    <Button 
                        title="Entrar"
                    
                    />
                    <Link to="/register">
                        Criar conta
                    </Link>
                </div>
            </Form>
        </Container>
    )
}