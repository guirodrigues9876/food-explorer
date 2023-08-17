import { Container, Content, Description, Order, Picker, ButtonPurchase, Ingredients } from "./styles";

import { PiReceipt } from "react-icons/pi";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { RxCaretLeft } from "react-icons/rx";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";
import { IngredientTag } from "../../components/IngredientTag";



import prato1 from "../../assets/prato1.png";


export function Details(){
    return(
        <Container>
            <Header />

            <Content>

                <ButtonText>
                    <RxCaretLeft />
                    voltar
                </ButtonText>

                <img src={prato1} alt="" />

                <Description>                
                    <h2>Salada Ravanello</h2>

                    <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>

                    <Ingredients>
                        <IngredientTag title="Alface"></IngredientTag>
                        <IngredientTag title="Alface"></IngredientTag>
                        <IngredientTag title="Alface"></IngredientTag>
                    </Ingredients>
                    

                    

                    <Order>
                        <Picker>
                            <AiOutlineMinus size={27} />
                            <span>01</span>
                            <AiOutlinePlus size={27} />
                        </Picker>  

                        <ButtonPurchase title="incluir">
                            <PiReceipt size={21} />
                            <span> pedir - R$ 25,00</span>

                        </ButtonPurchase>
                    </Order>

                </Description>




            </Content>

            <Footer />
        </Container>
    )
};