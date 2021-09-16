// Core
import React, { FC, Suspense } from 'react';
import { Provider } from 'react-redux';

// Pages
import { Main } from '../pages';

// Elements
import { Spinner } from '../elements';

// Styles
import { GlobalStyles } from './styles';

// Instruments
import { store } from '../../init';

export const App: FC = () => (
    <Provider store = { store }>
        <GlobalStyles />
        <Suspense fallback = { <Spinner /> }>
            <Main />
        </Suspense>
    </Provider>
);
