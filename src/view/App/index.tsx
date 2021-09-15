// Core
import React, { FC, Suspense } from 'react';

// Pages
import { Main } from '../pages';

// Elements
import { Spinner } from '../elements';

// Styles
import { GlobalStyles } from './styles';

export const App: FC = () => (
    <>
        <GlobalStyles />
        <Suspense fallback = { <Spinner /> }>
            <Main />
        </Suspense>
    </>
);
