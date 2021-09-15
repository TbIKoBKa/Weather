// Core
import React, { FC } from 'react';

// Components
import { Current } from '../../components';

// Elements
//import { Spinner } from '../../elements';

// Styles
import { Container, Header } from './styles';

const Main: FC = () => {
    return (
        <Container>
            <Header>Kiev</Header>
            {/* <Spinner /> */}
            <Current />
        </Container>
    );
};

export default Main;
