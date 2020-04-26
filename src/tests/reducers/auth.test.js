import authReducer from '../../reducers/auth';

test('should set uid to state on login', () => {
    const action = {
        type: 'LOGIN',
        uid: '12'
    };
    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
})

test('should clear uid to state on logout', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({}, action);
    expect(state).toEqual({});
})