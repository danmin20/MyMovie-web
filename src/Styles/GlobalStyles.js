import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    body {
        font-family:'Song Myung', sans-serif;
    }
    a {
        text-decoration:none;
    }
    input:focus {
        outline:none;
    }
    .modal-dialog{
        margin-left: 50px;
        background-color: black;
        width: 50%;
        border: 0px;
        align-items: center;
        justify-content: center;
    }
    .modal-wrap{
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: red;
    }
    .modal-content{
        margin-left: 50px;
        background-color: green;
    }
`;
