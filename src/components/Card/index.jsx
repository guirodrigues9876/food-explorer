import { Container, Title, Description, Order, Picker} from "./styles";
import { FiHeart } from "react-icons/fi";
import { RxCaretRight } from "react-icons/rx";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { Button } from "../Button";

import prato1 from "../../assets/prato1.png";

export function Card() {
    return(
        <Container>
            
                {/* <BiPencil size={"2.4rem"}/> */}

                <FiHeart
                    size={"2.4rem"}
                />

                <img
                   src={prato1}
                   alt="Imagem do prato." 
                
                />

                <Title>
                    <h2>Salada Ravanello</h2>
                    <RxCaretRight size={24} />
                </Title>

                <Description>
                    <p>Descrição do prato de salad</p>
                </Description>

                <span>R$49,97</span>


                <Order>
                    <Picker>
                        <AiOutlineMinus size={24} />
                        <span>01</span>
                        <AiOutlinePlus size={24} />
                    </Picker>  

                    <Button title="incluir" />
                </Order>
                
        </Container>
    );
}