import './VideoPage.scss';
import Comments from '../../components/Comments/Comments';
import CurrentVideo from '../../components/CurrentVideo/CurrentVideo';
import CurrentInfo from '../../components/CurrentInfo/CurrentInfo';
import NextVideos from '../../components/NextVideos/NextVideos';

function VideoPage({ poster, activeVideo, addCommentHandler, comments, changeVideoHandler }) {
    return (
        <>
            <CurrentVideo poster={poster} />
            <main className='main'>
                <section className='main__current-video'>
                    <CurrentInfo activeVideo={activeVideo} />
                    <Comments clickHandler={addCommentHandler} comments={comments} />
                </section>
                <aside className='main__side-bar'>
                    <NextVideos activeVideo={activeVideo.id} clickHandler={changeVideoHandler} />
                </aside>
            </main>
        </>
    );
}

export default VideoPage;