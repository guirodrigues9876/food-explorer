import { Container, Form } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import brand from "../../assets/brand.svg";

export function SignUp(){

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
                            />

                            <Input 
                                type= "email"
                                id= {'email'} 
                                title={'Email'}
                                placeholder="exemplo@exemplo.com"
                            />
                            <Input 
                                type= "password"
                                id= {'password'} 
                                title={'Password'}
                                placeholder="No mínimo 6 caracteres"
                            />
                        </div>
                    <Button 
                        title="Criar conta"
                    
                    />
                    <a href=''>Já tenho uma conta</a>
                </div>
            </Form>
        </Container>
    )
}