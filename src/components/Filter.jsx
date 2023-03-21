import { Component } from 'react';

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
          type="text"
          onChange={this.filterChange}
          name="filter"
          title="Contacts will be filtered by this input value"
        ></input>
      </>
    );
  }
}

export default Filter;
