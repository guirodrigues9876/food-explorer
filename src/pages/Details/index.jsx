import { Container, Content, Description, Order, Picker, Ingredients,AddButton } from "./styles";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import { PiReceipt } from "react-icons/pi";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { RxCaretLeft } from "react-icons/rx";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { IngredientTag } from "../../components/IngredientTag";

import dishPlaceholder from "../../assets/placeholder.png";


export function Details(){
    const [data, setData] = useState(null);

    const params = useParams();
    const { user } = useAuth();
    const isAdmin = user && user.isAdmin ? 1 : 0;

    const dishImage = data && data.image ? `${api.defaults.baseURL}/files/${data.image}` : dishPlaceholder;

    const navigate = useNavigate();


    function handleEdit() {
        navigate(`/edit/${params.id}`);
    }

    function handleBack() {
        navigate(-1);
    }

    useEffect(() => {
        async function fetchDish() {
          
          try {
            const response = await api.get(`dishes/${params.id}`);
    
            setData(response.data)
            
          } catch (error) {
            if (error.response) {
                return alert(error.response.data.message);
              }
              return alert("Erro ao carregar informações");
          }
        }
    
        fetchDish();
      }, []);

      if(!data)     
         return <div>Carregando...</div>
      
    return (
        <Container>
            <Header />

            <Content>

                <ButtonText className="backButton" onClick={handleBack}>
                    <RxCaretLeft />
                    voltar
                </ButtonText>

                <img src={dishImage} alt={"Imagem do prato,lanche, sobremesa ou bebida"} />

                <Description>                
                    <h2>{data.name}</h2>

                    <p>{data.description}</p>

                    {
                        data.ingredients &&
                        <Ingredients>
                            {
                                data.ingredients.map(ingredient => (
                                    <IngredientTag
                                        key={String(ingredient.id)}
                                        title={ingredient.name}
                                    />     
                                ))
                            }
                        </Ingredients>

                    }    

                    <Order>

                        {isAdmin ? (
                            <Button
                                title={'Editar prato'}
                                onClick={handleEdit}
                                className="editButton"
                            />

                        ) : (
                            <>
                                <Picker>
                                    <AiOutlineMinus size={27} />
                                    <span>01</span>
                                    <AiOutlinePlus size={27} />
                                </Picker>  

                                <AddButton>

                                    <PiReceipt size={27} />
                                    <span> pedir ∙ {(data.price)}</span>
                                    
                                </AddButton>
                            </> 
                        )}
                    </Order>

                </Description>

            </Content>

            <Footer />
        </Container>
    )
}