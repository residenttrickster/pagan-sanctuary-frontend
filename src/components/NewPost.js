import React from 'react';
import Popup from '../components/Popup';  
import './NewPost.css';

class NewCard extends React.Component {

    state = {
        title: "",
        body: "",
        user: {
            "id": 1,
            "username": "GreenWitch",
            "bio": "At heart we are all powerful, beautiful, and capable of changing the world with our bare hands.\n        ― Dianne Sylvan, The Body Sacred"
        },
        showPopup: false
    }

    togglePopup = () => {  
        this.setState({  
            showPopup: !this.state.showPopup  
    });  
        } 

    handleOnChange = (event) => {
        this.setState({
    [event.target.name]: event.target.value
    })
    }

    handleSubmit = (event) => {
        event.preventDefault() 

    fetch("http://pagan-sanctuary-backend.herokuapp.com/posts", {
    method: "POST",
    headers: {
    "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: this.state.title,
        body: this.state.body,
        user: {
            "id": 1,
            "username": "GreenWitch",
            "bio": "At heart we are all powerful, beautiful, and capable of changing the world with our bare hands.\n        ― Dianne Sylvan, The Body Sacred"
        }
        })
    })
    .then(r => r.json())
    .then(newPost => {
        this.props.addNewPost(newPost)
    })
        
    }

    render() {
        return (
    <div>
    <button className="storyButton" onClick={this.togglePopup.bind(this)}> Tell a story</button>  

{this.state.showPopup ?  
<Popup  
closePopup={this.togglePopup}  
formSubmit={<form onSubmit={this.handleSubmit}>
<b><label htmlFor="title">Title:</label></b>
<br></br>
<br></br>
<input id="title" 
name="title" 
type="title" 
size="30"
value={this.state.title}
onChange={this.handleOnChange}
/>
<br></br>
<br></br>
<b><label htmlFor="body">Here goes a story:</label></b>
<br></br>
<br></br>
<input className="text" 
name="body" 
type="body" 
value={this.state.body}
onChange={this.handleOnChange}/>
<br></br>
<br></br>
<button className="myButton">Send story!</button>
<br></br>
<br></br>
</form> 
}
/>
: 
null
} 
    </div>
        )
    }
}

export default NewCard
