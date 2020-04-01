import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';
import moment from 'moment';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage 
        expense={ expenses[0] } 
        editExpense={ editExpense } 
        removeExpense={ removeExpense } 
        history={ history } 
        />
    );
});

test('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
    const editedExpense = {
        id: expenses[0].id,
        description: expenses[0].description + ' this is new description text',
        note: expenses[0].note + ' this is new note text',
        amount: '22.22',
        createdAt: moment()
    }
    wrapper.find('ExpenseForm').prop('onSubmit')(editedExpense);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, editedExpense);
});

test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({id: expenses[0].id});
})