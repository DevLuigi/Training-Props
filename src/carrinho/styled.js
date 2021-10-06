import styled from "styled-components";


const Container = styled.div`

    font-family: sans-serif;
    padding: 2em;

    .cabecalho{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 50vw;
        margin: 2em 0em;
    }

    .voltar{
        height: 2em;
        width: 2em;
    }

    .titulo{
        font-weight: bold;
        font-size: 1.5em;

        margin: .5em 0em;
    }

`

export { Container }