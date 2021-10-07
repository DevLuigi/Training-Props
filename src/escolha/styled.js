import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100vh;

    font-family: sans-serif;
    
    .titulo{
        font-size: 1.5em;
    }

    .titulo, .router {
        margin: .5em;
    }

    .router{
        color: black;
        text-decoration: unset;
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