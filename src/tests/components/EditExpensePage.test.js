import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';
import moment from 'moment';

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage 
        expense={ expenses[0] } 
        startEditExpense={ startEditExpense } 
        startRemoveExpense={ startRemoveExpense } 
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
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[0].id, editedExpense);
});

test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id: expenses[0].id});
})