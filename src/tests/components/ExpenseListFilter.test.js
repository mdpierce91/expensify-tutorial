import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';
import { wrap } from 'module';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    )
});

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt date correctly', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    wrapper.find('input').simulate('change', { target: { value: altFilters.text}});
    expect(setTextFilter).toHaveBeenLastCalledWith(altFilters.text);
});

test('should sort by date', () => {
    wrapper.find('select').simulate('change', { target: { value: 'amount'}});
    wrapper.find('select').simulate('change', { target: { value: 'date'}});
    expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
    wrapper.find('select').simulate('change', { target: { value: 'amount'}});
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
    wrapper.find('DateRangePicker').prop('onDatesChange')({
        startDate: altFilters.startDate, 
        endDate: altFilters.endDate 
    });
    expect(setStartDate).toHaveBeenLastCalledWith(altFilters.startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(altFilters.endDate);
});

test('should handle focus changes', () => {
    let focus = 'startDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(focus);
    expect(wrapper.state('calendarFocused')).toBe(focus);
    focus = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(focus);
    expect(wrapper.state('calendarFocused')).toBe(focus);
    focus = null;
    wrapper.find('DateRangePicker').prop('onFocusChange')(focus);
    expect(wrapper.state('calendarFocused')).toBe(focus);
})