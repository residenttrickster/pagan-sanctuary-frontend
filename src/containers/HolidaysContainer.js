import React from 'react';
import HolidayCard from '../components/HolidayCard';

class HolidaysContainer extends React.Component {

    renderHolidayCard = () => {
    const filteredHolidays = this.props.holidays.filter(holiday => holiday.description.includes(this.props.searchTerm))
        return filteredHolidays.map (holiday =>
            <HolidayCard 
            key={holiday.id}
            image={holiday.image}
            date={holiday.date}
            description={holiday.description}
            />
        )
    }

    randomCard = () => {
        const shuffledCard = this.props.holidays
        let randomIndex = Math.floor(Math.random() * shuffledCard.length)
        return shuffledCard[randomIndex];
    }


    render() {
        return(
            <div>
            <button onClick={this.randomCard}>Get a random holiday</button>
            {this.renderHolidayCard()}
            </div>
        )
    }
}

export default HolidaysContainer

