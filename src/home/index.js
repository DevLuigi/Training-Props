import { Container } from './styled.js'
import Produto from '../produto'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Home(){

    const [produtos, setProdutos] = useState([]);

    function listar(){
        const r = [
            {
                id: 1000,
                imagem: "/assets/images/pc.jpg",
                titulo: "PC Gamer",
                preco: "R$ 9.550.00",
                descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!", 
                especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!" 
            },
            {
                id: 1001,
                imagem: "/assets/images/cadeira.jpg",
                titulo: "Cadeira Gamer",
                preco: "R$ 1.250.00",
                descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!", 
                especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!" 
            },
            {
                id: 1002,
                imagem: "/assets/images/ps4.png",
                titulo: "PS4",
                preco: "R$ 1.150.00",
                descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!", 
                especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!" 
            },
            {
                id: 1003,
                imagem: "/assets/images/ps5.png",
                titulo: "PS5",
                preco: "R$ 3.999.00",
                descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!", 
                especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!" 
            },
            {
                id: 1004,
                imagem: "/assets/images/mouse.jpeg",
                titulo: "Mouse Gamer",
                preco: "R$ 250.00",
                descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!", 
                especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!" 
            },
            {
                id: 1005,
                imagem: "/assets/images/xboxone.png",
                titulo: "Xbox One",
                preco: "R$ 1.150.00",
                descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!", 
                especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!" 
            },
            {
                id: 1006,
                imagem: "/assets/images/xboxnovo.jpg",
                titulo: "Xbox Series X",
                preco: "R$ 3.850.00",
                descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!", 
                especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!" 
            },
            {
                id: 1007,
                imagem: "/assets/images/monitor.jpg",
                titulo: "Monitor Tela Curva",
                preco: "R$ 14.150.00",
                descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!", 
                especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!" 
            },
            {
                id: 1008,
                imagem: "/assets/images/teclado.jpg",
                titulo: "Teclado redragon",
                preco: "R$ 219.00",
                descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!", 
                especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!" 
            },
            {
                id: 1009,
                imagem: "/assets/images/microfone.jpg",
                titulo: "Microfone HyperX",
                preco: "R$ 899.00",
                descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!", 
                especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!" 
            }
        ]


        setProdutos(r);  
    }

    useEffect(() => {
        listar();
      }, [])

    return(
        <Container>
            <Link to="/"> <img className="voltar" src="/assets/images/voltar.svg" alt="" /> </Link>
            <h1> Sejam Bem vindos ao Carrinho!! </h1>
            <div className="listar-produtos">
                <div className="conteudo"> 
                    {produtos.map(item =>
                        <Produto info={item} />
                    )}
                </div>
            </div>
        </Container>
    )
}