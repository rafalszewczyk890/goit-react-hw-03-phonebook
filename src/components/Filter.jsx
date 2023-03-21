import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

class Filter extends Component {
  filterChange = event => {
    const { onChange } = this.props;
    onChange(event.target.value);
  };

  render() {
    return (
      <>
        <p>Find contacts by name</p>
        <input
          className={css.input}
          type="text"
          onChange={this.filterChange}
          name="filter"
          title="Contacts will be filtered by this input value"
        ></input>
      </>
    );
  }
}

Filter.propTypes = {
  onChange: PropTypes.func,
};

export default Filter;
