import { Container, Title, Description, Order, Picker} from "./styles";
import { FiHeart } from "react-icons/fi";
import { RxCaretRight } from "react-icons/rx";
import { api } from "../../services/api";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import dishPlaceholder from "../../assets/dishPlaceholder.png";

import { Button } from "../Button";

export function Card({ data }) {


    const dishImage = data && data.image ? `${api.defaults.baseURL}/files/${data.image}` : dishPlaceholder;


    return(
        <Container>
            
                {/* <BiPencil size={"2.4rem"}/> */}

                <FiHeart
                    size={"2.4rem"}
                />

                <img
                   src={dishImage}
                
                
                />

                <Title>
                    <h2>{data.name}</h2>
                    <RxCaretRight size={24} />
                </Title>

                <Description>
                    <p>{data.description}</p>
                </Description>

                <span>{data.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                })}</span>


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