import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

class ExpenseListFilters extends React.Component {
    state = {
        calenderFocused: null
    };
    onDatesChange = ({ startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };
    onFocusChange = (calenderFocused) => {
        this.setState(() => ({calenderFocused}));
    }
    render() {
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={(e) => {
                    this.props.dispatch(setTextFilter(e.target.value));
                }}/>
                <select value={this.props.filters.sortBy} onChange={(e) => {
                    console.log(e.target.value);
                    switch(e.target.value){
                        case "date":
                        console.log("sort by Date!");
                        this.props.dispatch(sortByDate());
                            break;
                        case "amount":
                            console.log("sort by Amount!");
                            this.props.dispatch(sortByAmount());
                            break;
                    }
                }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calenderFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                />
            </div>
        )
    }
}

// const ExpenseListFilters = (props) => (
//     <div>
//         <input type="text" value={props.filters.text} onChange={(e) => {
//             props.dispatch(setTextFilter(e.target.value));
//         }}/>
//         <select value={props.filters.sortBy} onChange={(e) => {
//             console.log(e.target.value);
//             switch(e.target.value){
//                 case "date":
//                 console.log("sort by Date!");
//                     props.dispatch(sortByDate());
//                     break;
//                 case "amount":
//                     console.log("sort by Amount!");
//                     props.dispatch(sortByAmount());
//                     break;
//             }
//         }}>
//             <option value="date">Date</option>
//             <option value="amount">Amount</option>
//         </select>
//     </div>
// );

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);