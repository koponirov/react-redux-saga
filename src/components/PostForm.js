import React from "react";

export default class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }

    changeInputHandler = event => {
        this.setState( prev => ({...prev,...{
            [event.target.name]: event.target.value
        }}))
    }

    submitHandler = event => {
        event.preventDefault()
        console.log(this.state.title)
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Заголовок поста</label>
                    <input
                        value={this.state.title}
                        onChange={this.changeInputHandler}
                        name='title'
                        type="text"
                        className="form-control"
                        id="title"/>
                </div>
                <button className='btn btn-success' type='submit'>Создать</button>
            </form>
        )
    }
}
