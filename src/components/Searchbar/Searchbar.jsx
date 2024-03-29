import { Component } from 'react';

import css from './Searchbar.module.css';

export class SearchBar extends Component {
  state = {
    input: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const input = e.currentTarget.elements.input.value;
    this.props.onSubmit(input);
  };

  render() {
    return (
      <header className={css.wrapper}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <input
            name="input"
            onChange={this.handleChange}
            className={css.searchInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit" className={css.searchButton}>
            <span className={css.buttonLabel}>Search</span>
          </button>
        </form>
      </header>
    );
  }
}
