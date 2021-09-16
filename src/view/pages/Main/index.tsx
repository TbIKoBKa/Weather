// Core
import React, { FC } from 'react';

// Containers
import { Header } from '../../containers';

// Components
import { Current, Forecast } from '../../components';

// Elements
import { Spinner } from '../../elements';

// Styles
import { Container, StyledMain } from './styles';

// Instruments
import { useWeather } from '../../../bus/weather';

const Main: FC = () => {
    const { data } = useWeather();
    const today = data[ 0 ];

    return (
        <StyledMain>
            {
                data
                    ? (
                        <Container>
                            <Header day = { today }/>
                            <Current />
                            <Forecast />
                        </Container>
                    )
                    : <Spinner />

            }
        </StyledMain>
    );
};

export default Main;
