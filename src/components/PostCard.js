import React from 'react';
import './PostCard.css';

class PostCard extends React.Component {

    state = {
        title: "",
        body: "",
        form: false
    }

    componentDidMount() {
        this.setState({
            title: this.props.title,
            body: this.props.body
        })
    }


    handleUpdate = (event) => {
        event.preventDefault()
        fetch(`http://localhost:3001/posts/${this.props.id}`, {
        method: "PATCH",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        },
        body: JSON.stringify({
            title: this.state.title,
            body: this.state.body
        })
        })
        .then(r => r.json())
        .then(updatedPost => {
        this.props.updatePost(updatedPost)
        })
    }

    handleDelete = () => {
    fetch(`http://localhost:3001/posts/${this.props.id}`, {
    method: "DELETE",
    })
    this.props.deletePost(this.props.id)
    }

    toggleForm = () => {
        this.setState ({
            form: !this.state.form
        })
    }

    handleOnChange = (event) => {
        this.setState({
    [event.target.name]: event.target.value
    })
    }

    renderCard = () => {
        if(this.state.form === false) {
            const { title, body, user } = this.props
            return (
            <div> 
            <h3>{title}</h3>
            <i>{user}</i>
            <p>{body}</p>
            <button className="update" onClick={this.toggleForm}>Update</button>
            <button className="delete" onClick={this.handleDelete}>Delete</button>
            </div>
            )
        } else {
            return <div>
            <form onSubmit={this.handleUpdate}>
            <label htmlFor="title">Title: </label>
            <input id="title" 
            name="title" 
            type="title" 
            value={this.state.title}
            onChange={this.handleOnChange}
            />
            <br></br>
            <br></br>
            <label htmlFor="body">Post: </label>
            <input id="body" 
            className="text"
            name="body" 
            type="body" 
            value={this.state.body}
            onChange={this.handleOnChange}/>
            <button className="update">Update story!</button>
            </form>
            <button onClick={this.toggleForm}>Close update</button>
            </div>
        }
    }
    
    render() {
        return (<div>
            {this.renderCard()}
        </div>)
    }
}

export default PostCard



