import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../../redux/actions/phonebookActions";
import { FilterWrapper, FilterInput} from "./FilterStyled"

const Filter = ({ value, setFilter }) => {

  const handleChange =(e)=>{
    const {value} = e.target
    setFilter(value);
  }

  return (
    <FilterWrapper>
      <label>
        Find contacts by name
      <FilterInput
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search..."
      ></FilterInput>
      </label>
    </FilterWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    value: state.contacts.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (value) => {
      dispatch(setFilter(value));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
