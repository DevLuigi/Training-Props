import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 3em;

    h1 {
        font-family: sans-serif;
    }

    .voltar{
        height: 2em;
        width: 2em;
    }

    .lista-produtos {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .conteudo{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 2em 0em;
    }
  
`

export { Container }