import React from 'react';
import { Paper, TextField } from '@material-ui/core';



class SearchBar extends React.Component {
    state = {
        searchTerms: '',
    }
    handleChange = (event) => {
        this.setState({ searchTerms: event.target.value });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const { searchTerms } = this.state;
        const { onFormSubmit } = this.props;
        
        onFormSubmit(searchTerms);
    }
    render() {
        return (
            <Paper elevation={6} style={{ padding: '25px' }}>
                <form onSubmit={this.handleSubmit} >
                    <TextField fullWidth label="Search..." onChange={this.handleChange} />
                </form>
            </Paper>
        )
    }
}

export default SearchBar;