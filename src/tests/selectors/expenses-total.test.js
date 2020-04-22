import expenses from '../fixtures/expenses';
import expensesTotal from '../../selectors/expenses-total';

test('should return 0 if no expenses', () => {
    expect(expensesTotal([])).toBe(0);
});

test('should currectly add up a single expense', () => {
    expect(expensesTotal([expenses[0]])).toBe(expenses[0].amount);
}) 

test('should correctly add up multiple expenses', () => {
    expect(expensesTotal(expenses)).toBe(114195);
})