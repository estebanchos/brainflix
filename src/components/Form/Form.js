import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import addIcon from '../../assets/images/icons/add-comment.svg'
import './Form.scss';
import { Component } from 'react';
import { videosUrl } from '../../utils/api';
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
        const { refreshComments, activeVideoId } = this.props
        const postUrl = `${videosUrl}/${activeVideoId}/comments`
        e.preventDefault()
        if (this.isFormValid()) {
            axios.post(postUrl, {
                name: 'Dwight K Schrute',
                comment: this.state.comment
            })
                .then(_res => {
                    refreshComments(videosUrl + '/' + activeVideoId)
                    e.target[0].value = ''
                    this.setState({
                        comment: ''
                    })
                })
                .catch(err => {
                    console.error('unable to post comment', err)
                })
        } else {
            this.inputIsInvalid()
        }
    }
    render() {
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
                    <Button icon={addIcon} action="COMMENT" onClick={this.resetForm} />
                </form>
            </article>
        );
    }
}
export default Form;