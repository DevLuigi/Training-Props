import { Container } from "./styled";

export default function Produtos(props){
    return(
        <Container>
            <img src={props.info.imagem}/>
            <div> {props.info.titulo} </div>
            <div> {props.info.preco} </div>
        </Container>
    )
}