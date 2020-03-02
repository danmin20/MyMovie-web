import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    body {
        font-family:'Song Myung', sans-serif;
    }
    a {
        color: black;
        text-decoration:none;
    }
    input:focus {
        outline:none;
    }
`;
