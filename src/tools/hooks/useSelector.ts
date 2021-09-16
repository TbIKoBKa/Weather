// Core
import { useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux';

// Types
import { AppState } from '../../init/redux/rootReducer';

export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;
