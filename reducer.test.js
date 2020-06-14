import reducer, { initialState } from './reducer';

describe('test reducer', () => {
    describe('FILTER_ART', () => {
        it ('should have no filteredArtwork when theres no artworkItems', () => {
        const action = {
            type: 'FILTER_ART',
            payload: 'th'
        };
        const nextState = reducer(initialState, action);
        expect(nextState).toEqual({
            ...initialState,
            search: 'th',
            filteredArtworks: []
        });
    });
    })
})