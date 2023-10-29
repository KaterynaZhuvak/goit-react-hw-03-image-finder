import { Component } from "react";

export class SearchBar extends Component {
        state = {
            input: ''
        };

        handleChange = e => {
            this.setState({ [e.target.name]: e.target.value });
        };

        handleSubmit = e => {
            e.preventDefault();
            const contact = e.currentTarget.elements.input.value;
            this.props.onSubmit(contact);
        };
    
    render() {
        return (
            <header className="searchbar">
                <form className="form" onSubmit={this.handleSubmit}>
                    <button type="submit" class="button">
                        <span className="button-label">Search</span>
                    </button>

                    <input
                        name='input'
                        onChange={this.handleChange}
                        className="input"
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        );
    };
    };
