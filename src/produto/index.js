import { Container } from "./styled";
import { Link } from "react-router-dom";

export default function Produtos(props){
    return(
        <Container>
            <img src={props.info.imagem} alt=""/>
            <div className="titulo"> {props.info.titulo} </div>
            <div> {props.info.preco} </div>
            <Link to={{
                pathname:"/detalhes",
                state: props.info 
            }}>
                <button> Ver Detalhes </button>
            </Link>
        </Container>
    )
}