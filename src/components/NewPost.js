import React from 'react';

class NewCard extends React.Component {

    state = {
        title: "",
        body: "",
        user: {
            "id": 1,
            "username": "GreenWitch",
            "bio": "At heart we are all powerful, beautiful, and capable of changing the world with our bare hands.\n        ― Dianne Sylvan, The Body Sacred"
        }
    }

    handleOnChange = (event) => {
        this.setState({
    [event.target.name]: event.target.value
    })
    }

    handleSubmit = (event) => {
        event.preventDefault() 

    fetch("http://localhost:3001/posts", {
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
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title</label>
        <input id="title" 
        name="title" 
        type="title" 
        value={this.state.title}
        onChange={this.handleOnChange}
        />
        <br></br>
        <br></br>
        <label htmlFor="body">Post</label>
        <input id="body" 
        name="body" 
        type="body" 
        value={this.state.body}
        onChange={this.handleOnChange}/>

        <button>Send story!</button>
        </form>
    </div>
        )
    }
}

export default NewCard