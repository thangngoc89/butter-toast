import styled from 'styled-components';

const Div = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 11px;
    line-height: 14px;
    position: relative;
    background-color: #ffffff;
    min-height: 50px;
    width: 400px;
    padding: 10px 45px 10px 60px;
    box-sizing: border-box;
    box-shadow: 0 3px 15px #dfdfdf;
    border-radius: 5px;
    transition: box-shadow .3s;
    overflow: hidden;
    z-index: 1;

    strong.title {
        color: #757575;
        padding-bottom: 5px;
        font-size: 15px;
    }

    div.content {
        color: #BDBDBD;
    }

    button.btn-dismiss {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        width: 40px;
        text-align: center;
        text-decoration: none;
        font-size: 22px;
        color: #E0E0E0;
        transition: background-color .4s;
        border: none;
        outline: none;
        background: none;

        &:hover {
            background-color: #FAFAFA;
        }

        &:active {
            background-color: #F5F5F5;
        }
    }

`

export default Div;
