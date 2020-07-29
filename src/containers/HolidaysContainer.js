import React from 'react';
import HolidayCard from '../components/HolidayCard';
import './HolidayContainer.css';

class HolidaysContainer extends React.Component {

    state = {
        //shows all cards in this postion
        showCard: false
    }

    toggleCard = () => {
        this.setState ({
            //change the card's state
            showCard: !this.state.showCard
        })
    }

    renderHolidayCard = () => {
        //show all the cards
        if(this.state.showCard === false) {
            const filteredHolidays = this.props.holidays.filter(holiday => holiday.description.includes(this.props.searchTerm))
        return filteredHolidays.map (holiday =>
            <HolidayCard 
            key={holiday.id}
            image={holiday.image}
            date={holiday.date}
            description={holiday.description}
            />
        ) //show one random card
        } else {
            const shuffledCard = this.props.holidays
            let randomIndex = Math.floor(Math.random() * shuffledCard.length)
            let randomImage = shuffledCard[randomIndex].image
            let randomDescription = shuffledCard[randomIndex].description
            return <div><center><img src={randomImage} alt={randomDescription} width="214" height="302" /> 
            <br></br>
            <b>Decription</b>: {randomDescription}</center></div>
            }
        }

        //button to toggle card - in render

    render() {
        return(

            <div className="render">
            <center> 
                <button className="myButton" onClick={this.toggleCard}>Get a random holiday</button>
            </center>
                <div className="parent">
                        <div class="flex-container">
                {this.renderHolidayCard()}
                    </div>
                </div>
                <p>© art by Julia Nikitina</p>
            </div>
        )
    }
}

export default HolidaysContainer
