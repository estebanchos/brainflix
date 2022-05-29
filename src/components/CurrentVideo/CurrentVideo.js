import './CurrentVideo.scss';

function CurrentVideo({ poster }) {
    return (
        <article className='current-video'>
            <video className='current-video__video' poster={poster} controls></video>
        </article>
    );
}

export default CurrentVideo;
