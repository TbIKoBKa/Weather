// Core
import styled, {  } from 'styled-components';

// Images
import background from '../../../assets/images/bg.png';

export const StyledMain = styled.main`
    min-height: 100vh;
    //background: radial-gradient(circle, #79bfff 40%, #3788ff 100%);
    background-image: url(${background});
`;

export const Container = styled.div`
    box-sizing: border-box;
    color: #fff;
    font-family: 'Roboto';
    font-weight: 400;
    width: 910px;
    margin: 0 auto;
`;
