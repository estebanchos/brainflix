import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import addIcon from '../../assets/images/icons/add-comment.svg'
import './Form.scss';
import { Component } from 'react';
import axios from 'axios';

class Form extends Component {
    state = {
        comment: '',
        validInput: true
    }

    handleChange = (e) => {
        this.setState({
            comment: e.target.value
        })
    }

    isFormValid = () => {
        if (!this.state.comment) {
            return false
        }
        this.setState({
            validInput: true
        })
        return true
    }

    inputIsInvalid = () => {
        this.setState({
            validInput: false
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.isFormValid()) {
            // axios here
        } else {
            this.inputIsInvalid()
        }
    }

    render() {
        // const { addComment } = this.props
        return (
            <article className='form-container'>
                <Avatar />
                <form onSubmit={this.handleSubmit} className='new-comment'>
                    <div className='new-comment__container'>
                        <label className='new-comment__label' htmlFor='comment'>JOIN THE CONVERSATION</label>
                        <textarea
                            className={this.state.validInput ? 'new-comment__input' : 'new-comment__input--error'}
                            name='comment'
                            id='comment'
                            placeholder='Add a new comment'
                            onChange={this.handleChange}
                        >
                        </textarea>
                    </div>
                    <Button icon={addIcon} action="COMMENT" />
                </form>
            </article>
        );
    }
}
export default Form;