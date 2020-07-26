import React from 'react';
import HolidaysContainer from './HolidaysContainer';
import Search from '../components/Search';

class HolidaysPage extends React.Component {

    state = {
        holidays: [],
        searchTerm: []
    }

    componentDidMount() {
        fetch(`http://localhost:3001/holidays`)
        .then(r => r.json())    
        .then(holidays => {
            this.setState({ holidays })
        })
    }

    handleOnChange = (searchTerm) => {
        this.setState ({
            searchTerm
        })
    }

    render() {
        return(
            <div>
            <h1>PAGAN SANCTUARY</h1>
            <Search searchTerm={this.state.searchTerm} handleOnChange={this.handleOnChange}/>
            <HolidaysContainer searchTerm={this.state.searchTerm} holidays={this.state.holidays}/>
            </div>
        )
    }
}


export default HolidaysPage