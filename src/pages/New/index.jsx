import { useState } from 'react';
import { Container, Content, Form, Ingredients } from "./styles";
import { useNavigate } from "react-router-dom";

import { api } from '../../services/api';

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



export function New() {
    const [imageFile, setImageFile] = useState(null);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("meals");
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    
    async function handleChangeImage(event) {
        const file = event.target.files[0];
        setImageFile(file);
      }
    

    const navigate = useNavigate();

    function handleBack() {
        navigate(-1);
    }

    function handleAddIngredient(){
        setIngredients(prevState => [...prevState, newIngredient]);
        setNewIngredient("");
    }
    
    function handleRemoveIngredient(deleted){
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
    }

    async function handleNewDish(){
        
        
        
        try{

            const formData =  new FormData();

            formData.append("name", name);
            formData.append("category", category);
            formData.append("price", price);
            formData.append("ingredients", JSON.stringify(ingredients));
            formData.append("description", description);
            formData.append("image", imageFile);


            await api.post("/dishes", formData);
            alert("Prato cadastrado com sucesso!");
        }catch ( error ) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
            alert("Não foi possível cadastrar o prato.");
            }
        }

    }


    return(

        <Container>
            <Header />
            <Content>
                <ButtonText onClick={handleBack}>
                    <RxCaretLeft />
                    voltar
                </ButtonText>

                <h1>Novo prato</h1>

                <Form>
                    <div>
                        <InputImage
                            icon={BsUpload}
                            title={"Imagem do prato"}
                            text={"Selecione imagem"}
                            id="image"
                            onChange={handleChangeImage}
                        />

                        <Input
                            type="text"
                            placeholder="Ex.: Salada Ceasar"
                            title="Nome"
                            id="name"
                            onChange={e => setName(e.target.value)}
                        />

                        <Select title="Categoria" onChange={e => setCategory(e.target.value)}/>

                    </div>

                    <div>
                        <Ingredients>
                            <label htmlFor="ingredients" >Ingredientes</label>
                            <div>
                                {
                                    ingredients.map((ingredient, index) => (
                                        <Ingredient 
                                            key={String(index)}
                                            value={ingredient}
                                            onClick={() => handleRemoveIngredient(ingredient)}
                                        />
                                    ))

                                }
                                
                                <Ingredient 
                                    isNew
                                    placeholder="Adicionar"
                                    id="ingredients"
                                    value={newIngredient}
                                    onChange= { e => setNewIngredient(e.target.value)}
                                    onClick={handleAddIngredient}
                                />

                            </div>
                        </Ingredients>

                        <Input 
                            type="number"
                            placeholder="R$ 00,00"
                            title="Preço"
                            id="price"
                            onChange={e => setPrice(e.target.value)}
                        />

                    </div>

                    <Textarea
                        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                        title="Descrição"
                        id="description"
                        onChange={e => setDescription(e.target.value)}
                    />

                    <div>
                        <Button
                            title={'Salvar alterações'}
                            className="saveButton"
                            onClick={handleNewDish}
                        />
                    </div>
            

                </Form>
            </Content>
            <Footer />
        </Container>
    )
}