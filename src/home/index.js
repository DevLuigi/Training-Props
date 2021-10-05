import { Container } from './styled.js'
import Produto from '../produto'
import { useEffect, useState } from 'react'

export default function Home(){

    const [produtos, setProdutos] = useState([]);

    function listar(){
        const r = [
            {
                id: 1000,
                imagem: "https://http2.mlstatic.com/D_NQ_NP_755842-MLB47599396706_092021-O.webp",
                titulo: "PC Gamer",
                preco: "R$ 1550.00",
                descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!", 
                especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!" 
            },
            {
                id: 1001,
                imagem: "https://a-static.mlcdn.com.br/1500x1500/cadeira-gamer-fox-racer-rgb-preta-com-iluminacao-led/foxonline/33/e73793d24d8bafd852e052f9b7dab0ea.jpg",
                titulo: "Cadeira Gamer",
                preco: "R$ 1250.00",
                descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!", 
                especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!" 
            },
            {
                id: 1002,
                imagem: "https://gmedia.playstation.com/is/image/SIEPDC/ps4-slim-image-block-01-en-24jul20?$native--t$",
                titulo: "PS4",
                preco: "R$ 1150.00",
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
            <h1> Sejam Bem vindos!! </h1>

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