import { createStore } from 'redux';
import reducers from './reducer';
export default function configureStore () {
    return createStore(reducers);
}