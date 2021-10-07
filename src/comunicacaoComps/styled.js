import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100vh;

    .voltar{
        height: 2em;
        width: 2em;
    }

    .fonte, button{
        margin: .5em;
    }

    .fonte{
        font-family: sans-serif;
        font-size: 1.5em;
    }

    button {
        border-radius: 2em;
        border: none;
        outline: none;
        padding: .5em 1.5em;
        
        font-family: sans-serif;
        background-color: #f837b2;
        color: #fff;
        cursor: pointer;
    }
`
export { Container }