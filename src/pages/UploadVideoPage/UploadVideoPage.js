import Button from '../../components/Button/Button';
import './UploadVideoPage.scss';
import publishIcon from '../../assets/images/icons/publish.svg';
import uploadPreview from '../../assets/images/upload-video-preview.jpg';

function UploadVideoPage() {
    return (
        <main className='main-upload'>
            <h1 className='page-title'>Upload Video</h1>
            <form className='upload-video'>
                <div className='upload-video__inputs-container'>
                    <div className='upload-video__image-container'>
                        <label className='upload-video__label' htmlFor='image' >VIDEO THUMBNAIL</label>
                        <img className='upload-video__image' src={uploadPreview} alt='preview thumbnail' />
                    </div>
                    <div className='upload-video__text-container'>
                        <div className='upload-video__title-container'>
                            <label className='upload-video__label' htmlFor='title' >TITLE YOUR VIDEO</label>
                            <input className='upload-video__text-input' name='title' id='title' placeholder='Add a title to your video' />
                        </div>
                        <div className='upload-video__description-container'>
                            <label className='upload-video__label' htmlFor='description' >ADD A VIDEO DESCRIPTION</label>
                            <textarea className='upload-video__text-input' name='description' id='description' placeholder='Add a description to your video' rows='4' />
                        </div>
                    </div>
                </div>
                <div className='upload-video__actions-container'>
                    <Button icon={publishIcon} action='PUBLISH' />
                    <button className='upload-video__cancel-button'>CANCEL</button>
                </div>
            </form>
        </main>
    );
}

export default UploadVideoPage;