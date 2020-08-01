import React from 'react';
import HolidaysContainer from './HolidaysContainer';
import Search from '../components/Search';
import header from './Header.png';

class HolidaysPage extends React.Component {

    state = {
        holidays: [],
        searchTerm: []
    }

    componentDidMount() {
        fetch(`http://pagan-sanctuary-backend.herokuapp.com/holidays`)
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
            <br></br>
            <br></br>
            <img src={header} alt="header" width="850" height="400" />
            <Search searchTerm={this.state.searchTerm} handleOnChange={this.handleOnChange}/>
            <HolidaysContainer searchTerm={this.state.searchTerm} holidays={this.state.holidays}/>
            </div>
        )
    }
}


export default HolidaysPage