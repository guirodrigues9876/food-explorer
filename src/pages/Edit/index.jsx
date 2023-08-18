import { Container, Content, Form, Ingredients } from "./styles";

import { RxCaretLeft } from "react-icons/rx";
import { BsUpload } from "react-icons/bs";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { InputImage } from "../../components/InputImage";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { Ingredient } from "../../components/Ingredient";
import { Textarea } from "../../components/Textarea";

export function Edit() {
    return(

        <Container>
            <Header />
            <Content>
                <ButtonText>
                    <RxCaretLeft />
                    voltar
                </ButtonText>

                <h1>Editar prato</h1>

                <Form>
                    <div>
                        <InputImage
                            icon={BsUpload}
                            title={"Imagem do prato"}
                            text={"Selecione imagem para alterá-la"}
                            id="image"
                        />

                        <Input
                            type="text"
                            placeholder="Ex.: Salada Ceasar"
                            title="Nome"
                            id="name"
                        />

                        <Select title="Categoria" />

                    </div>

                    <div>
                        <Ingredients>
                            <label htmlFor="ingredients" >Ingredientes</label>
                            <div>

                                <Ingredient 
                                    placeholder="Adicionar"
                                    id="ingredients"
                                    value="Pão naan"
                                />

                            {
                                
                                <Ingredient 
                                    placeholder="Adicionar"
                                    isNew
                                    id="ingredients"
                                />
                            }
                            </div>
                        </Ingredients>

                        <Input 
                            type="number"
                            placeholder="R$ 00,00"
                            title="Preço"
                            id="price"
                        />

                    </div>

                    <Textarea
                        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                        title="Descrição"
                        id="description"
                    />

                    <div>
                        <Button
                            title={'Excluir Prato'}
                            className="deleteButton"
                        />
                        <Button
                            title={'Salvar alterações'}
                            className="saveButton"
                        />
                    </div>
            

                </Form>
            </Content>
            <Footer />
        </Container>
    )
}