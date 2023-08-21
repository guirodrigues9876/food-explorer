import { Container, Header, Content, Search } from "./styles";
import { AiOutlineClose, AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Footer } from "../Footer";
import { useAuth } from "../../hooks/auth";

export function MenuMobile({ showMenu, setShowMenu, isAdmin, filterDishes }) {
  const { signOut } = useAuth();

  return (
    <Container isvisible={showMenu ? 1 : 0} isadmin={isAdmin ? 1 : 0}>
      <Header>
        <button onClick={() => setShowMenu(false)}>
          <AiOutlineClose size={28} />
        </button>
        <span>Menu</span>
      </Header>


      <Content >
        <Search>
          <AiOutlineSearch size={24} />
          <input
            type="search"
            placeholder="Busque por pratos ou ingredientes"
            onChange={filterDishes}
          />
        </Search>

        {
          isAdmin &&
          <Link to="/new">Novo prato</Link>
        }
        <Link onClick={signOut} to="/">Sair</Link>
      </Content>

      <Footer />
    </Container>
  )
}