import React from 'react';

class Search extends React.Component {

    render() {
        return(
            <div>
            <form>
            <label>
        Find a holiday:
            <input type="text" 
            name="name" 
            placeholder="Find a holiday..."
            value={this.props.searchTerm}
            onChange={event => this.props.handleOnChange(event.target.value)}
            />
            </label>
            </form>
            <br></br>
            </div>
            )
    }
}

export default Search
