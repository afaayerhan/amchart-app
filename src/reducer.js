import data from './data';

const initalDataState = data;

function dataReducer (state=initalDataState, action) {
    switch (action.type) {
        default:
        return state;
    }
}
export default dataReducer;