// Core
import styled from 'styled-components';

// Elements
import { Label } from '../../elements';

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 60px;
    padding-bottom: 83px;
`;

export const Logo = styled.img`
    margin-right: 30px;
    background-size: contain;
    background-repeat: no-repeat;
    width: 114px;
`;

export const CurrentDate = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CurrentDayOfWeek = styled(Label)`
    text-transform: lowercase;
`;
