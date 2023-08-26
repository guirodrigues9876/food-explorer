import { useState, useEffect } from  'react';
import { useNavigate, useParams } from "react-router-dom";
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

import { api } from "../../services/api";

export function Edit() {

    const [imageFile, setImageFile] = useState(null);
    const [ name, setName ] = useState("");
    const [ category, setCategory ] = useState("meals");
    const [ ingredients, setIngredients ] = useState([]);
    const [ newIngredient, setNewIngredient ] = useState("");
    const [ price, setPrice ] = useState(0);
    const [ description, setDescription ] = useState("");

    function handleImageChange(event) {
        const file = event.target.files[0];
        setImageFile(file);
    }
    
    const params = useParams();
    const navigate = useNavigate();

    function handleAddIngredient(){
        setIngredients(prevState => [...prevState, newIngredient]);
        setNewIngredient("");
    }
    
    function handleRemoveIngredient(deleted){
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
    }

    async function handleDeleteDish(){
       
        try{
            await api.delete(`/dishes/${params.id}`);
            alert("Prato excluído com sucesso!")
            navigate("/")
        }catch (error){
            if (error.response) {
                return alert(error.response.data.message);
              }
              return alert("Erro ao carregar informações");
          }
    }

    async function handleUpdateDish(){

        if(!name || !category || !price || !ingredients || !description){
            return alert("Preencha todos os campos de texto!");
        }

        if(newIngredient){
            return alert("Você deixou um ingrediente no campo para adicionar, mas não adicionou")
        }

        try {
            const form = new FormData();

            form.append("name", name);
            form.append("category", category);
            form.append("price", price);
            form.append("ingredients", JSON.stringify(ingredients));
            form.append("description", description);
            form.append("image", imageFile);
      
            await api.put(`/dishes/${params.id}`, form)
      
      
            alert("Prato editado com sucesso!");
            navigate(-1);
        }catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível atualizar o prato.");
            }
        }
    }

    function handleBack() {
        navigate(-1);
    }
    
    useEffect(() => {
        async function fetchDish() {
          try {
            const response = await api.get(`/dishes/${params.id}`);
    
            const dish = response.data;
    
            setName(dish.name);
            setCategory(dish.category);
            setPrice(dish.price);
            setIngredients(dish.ingredients.map(ingredient => ingredient.name));
            setDescription(dish.description);
    
          } catch (error) {
            if (error.response) {
              return alert(error.response.data.message);
            } else {
              return alert("Erro ao carregar informações do prato.");
            }
          }
        }
    
        fetchDish();
      }, [])

    return(

        <Container>
            <Header />
            <Content>
                <ButtonText onClick={handleBack}>
                    <RxCaretLeft />
                    voltar
                </ButtonText>

                <h1>Editar prato</h1>

                <Form>
                    <div>
                        <InputImage
                            icon={BsUpload}
                            title="Imagem do prato"
                            text={imageFile ? imageFile.name : "Selecione a imagem do prato"}
                            id="image"
                            onChange={handleImageChange}
                        />

                        <Input
                            type="text"
                            placeholder="Ex.: Salada Ceasar"
                            title="Nome"
                            id="name"
                            value={name} 
                            onChange={e => setName(e.target.value)}
                        />

                        <Select 
                            title="Categoria" 
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                        />

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
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                        />

                    </div>

                    <Textarea
                        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                        title="Descrição"
                        id="description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />

                    <div>
                        <Button
                            title={'Excluir Prato'}
                            className="deleteButton"
                            onClick={handleDeleteDish}
                        />
                        <Button
                            title={'Salvar alterações'}
                            className="saveButton"
                            onClick={handleUpdateDish}
                        />
                    </div>
            

                </Form>
            </Content>
            <Footer />
        </Container>
    )
}