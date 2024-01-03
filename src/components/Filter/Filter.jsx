import { Component } from "react";

export class Filter extends Component {
    render() {
        const { filter, onChange } = this.props;
        return (
          <>
            <p>Find contacts by name</p>
            <input
              type="text"
              name="filter"
              onChange={e => onChange(e.target.value)}
              filter={filter}
            />
          </>
        );
    }
}