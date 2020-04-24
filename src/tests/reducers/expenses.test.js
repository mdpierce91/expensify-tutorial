import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remvove expense by id', () => {
    const action ={
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action ={
        type: 'REMOVE_EXPENSE',
        id: -1
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: '4',
        description: 'new expense',
        note: '',
        amount: 1,
        createdAt: 0
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const updates = {
        description: 'new desc',
        note: 'new note',
        amount: 123,
        createdAt: 1200
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates,
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0], { id:expenses[1].id, ...updates}, expenses[2]])
});

test('should not edit expense if id not found', () => {
    const updates = {
        description: 'new desc',
        note: 'new note',
        amount: 123,
        createdAt: 1200
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: -2,
        updates,
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses)
});


test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]])
})