import React from 'react';

class HolidayCard extends React.Component {

    state = {
        showFront: true
    }

    toggleImage = () => {
        this.setState (prevState =>({
            showFront: !prevState.showFront
        }))
        }

    render() {

        const { image, date, description } = this.props
    return(
    <div onClick={this.toggleImage}>  
    {this.state.showFront ? 
    <img src={image} alt={description} width="214" height="302" /> 
        :
    <div>
    <br></br>
    <b>DATE</b>: {date}
    <br></br>
    <b>DESCRIPTION</b>: {description}</div>}
    </div>
    )
    }
}
export default HolidayCard

