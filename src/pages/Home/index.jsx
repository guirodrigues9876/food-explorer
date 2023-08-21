import { Container, Content, Banner, Main } from "./styles";

import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";
import { Slider } from "../../components/Slider";

import banner from "../../assets/flavors.png"

export function Home(){

    const [search, setSearch] = useState("");
    const[meals, setMeals] = useState([]);
    const[desserts, setDesserts] = useState([]);
    const[drinks, setDrinks] = useState([]);

    const { user } = useAuth();
    const isAdmin = user && user.isAdmin ? true : false;

    useEffect(() => {
        async function fetchDishes() {
            
            try{

                const response = await api.get(`/dishes?search=${search}`);
                
                setMeals(response.data.filter((dish) => dish.category === 'meals'));
                setDesserts(response.data.filter((dish) => dish.category === 'dessert'));
                setDrinks(response.data.filter((dish) => dish.category === 'drinks'));    
                
            } catch(error){
                return (error.response.data.message);
            }
        }
        
        fetchDishes();
    }, [search])

    return(
        <Container>
            <Header filterDishes={e => setSearch(e.target.value)}/>

            <Main>
                <Content>

                    <Banner>
                        <img 
                            src={banner} 
                            alt="Macarons coloridos despencando com folhas verdes e frutas vermelhas." 
                        />
                    
                        <div>
                            <h1>Sabores inigualáveis</h1>
                            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                        </div>
                    </Banner>    
                    
                    {
                      meals.length > 0 && (
                        <Section title="Refeições">
                          <Slider>
                            {
                              meals.map(dish => (
                                <Card
                                  key={String(dish.id)}
                                  data={dish}
                                  admin={isAdmin}
                                />
                              ))
                            }
                          </Slider>
                        </Section>
                      )
                    }


                    {
                      desserts.length > 0 && (
                        <Section title="Sobremesas">
                          <Slider>
                            {
                              desserts.map(dish => (
                                <Card
                                  key={String(dish.id)}
                                  data={dish}
                                  admin={isAdmin}
                                />
                              ))
                            }
                          </Slider>
                        </Section>
                      )
                    }

                    {
                      drinks.length > 0 && (
                        <Section title="Bebidas">
                          <Slider>
                            {
                              drinks.map(dish => (
                                <Card
                                  key={String(dish.id)}
                                  data={dish}
                                  admin={isAdmin}
                                />
                              ))
                            }
                          </Slider>
                        </Section>
                      )
                    }

                </Content>
            </Main>

            <Footer />
        </Container>
    )
}