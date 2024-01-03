import { Component } from 'react';


export class Contacts extends Component {
    render() {
        const { contacts, onDelete } = this.props;
       
    return (
      <>
        <ul>
          {contacts.map(({ name, number, id }) => (
            <li key={id}>
              {' '}
              {name}: {number}
              <button
                style={{
                  color: 'red',
                  margin: 5,
                }}
                className="contact-btn"
                onClick={() => onDelete(id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
