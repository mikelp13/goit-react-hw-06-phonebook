import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../../redux/actions/phonebookActions";
import { FilterWrapper, FilterInput} from "./FilterStyled"


const Filter = ({ value, setFilter }) => {
  return (
    <FilterWrapper>
      <label>
        Find contacts by name
      <FilterInput
        type="text"
        value={value}
        onChange={setFilter}
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
