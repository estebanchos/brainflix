import Button from '../../components/Button/Button';
import './UploadVideoPage.scss';
import publishIcon from '../../assets/images/icons/publish.svg';
import uploadPreview from '../../assets/images/upload-video-preview.jpg';
import { Component } from 'react';
// import SuccessfulSubmit from '../../components/SuccessfulSubmit/SuccessfulSubmit';

class UploadVideoPage extends Component {
    state = {
        title: '',
        description: '',
        validTitle: true,
        validDescription: true
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    titleIsInvalid = () => {
        this.setState({
            validTitle: false
        })
    }

    titleIsValid = () => {
        this.setState({
            validTitle: true
        })
    }

    descriptionIsInvalid = () => {
        this.setState({
            validDescription: false
        })
    }

    descriptionIsValid = () => {
        this.setState({
            validDescription: true
        })
    }

    returnHome = () => {
        this.props.history.push('/')
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.isFormValid()) {
            alert("Upload successful! \r\nReturning to Homepage");
            this.returnHome();
        } else {
            !e.target.title.value ? this.titleIsInvalid() : this.titleIsValid();
            !e.target.description.value ? this.descriptionIsInvalid() : this.descriptionIsValid();
        }
    }

    isFormValid = () => {
        if (!this.state.title || !this.state.description) {
            return false
        }
        return true
    }

    render() {
        return (
            <main className='main-upload'>
                <h1 className='page-title'>Upload Video</h1>
                <form className='upload-video' onSubmit={this.handleSubmit}>
                    <div className='upload-video__inputs-container'>
                        <div className='upload-video__image-container'>
                            <label className='upload-video__label' htmlFor='image' >VIDEO THUMBNAIL</label>
                            <img className='upload-video__image' src={uploadPreview} alt='preview thumbnail' />
                        </div>
                        <div className='upload-video__text-container'>
                            <div className='upload-video__title-container'>
                                <label className='upload-video__label' htmlFor='title' >TITLE YOUR VIDEO</label>
                                <input
                                    className={this.state.validTitle ? 'upload-video__text-input' : 'upload-video__text-input--error'}
                                    name='title'
                                    id='title'
                                    placeholder='Add a title to your video'
                                    value={this.state.title}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className='upload-video__description-container'>
                                <label className='upload-video__label' htmlFor='description' >ADD A VIDEO DESCRIPTION</label>
                                <textarea
                                    className={this.state.validDescription ? 'upload-video__text-input' : 'upload-video__text-input--error'}
                                    name='description'
                                    id='description'
                                    placeholder='Add a description to your video'
                                    rows='4'
                                    value={this.state.description}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='upload-video__actions-container'>
                        <Button icon={publishIcon} action='PUBLISH' />
                        <button className='upload-video__cancel-button' onClick={this.returnHome}>CANCEL</button>
                    </div>
                </form>
                {/* <SuccessfulSubmit /> */}
            </main>
        );
    }
}

export default UploadVideoPage;