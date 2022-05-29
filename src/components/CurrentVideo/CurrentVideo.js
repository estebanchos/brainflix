import './CurrentVideo.scss';
import { dynamicDateFormatter } from '../../utils/dataFormater';

function CurrentVideo() {
    return (
        <section className='current-video'>
            <video className='current-video__video' ></video>
            <article className='current-video__info info'>
                <h1 className='info__title'></h1>
                <div className='info__details details'>
                    <div className='details__meta'>
                        <p className='details__author'></p>
                        <p className='details__date'></p>
                    </div>
                    <div className='details__stats'>
                        <p className='details__views'></p>
                        <p className='details__like'></p>
                    </div>
                </div>
                <p className='info__description'></p>
            </article>
        </section>
    );
}

export default CurrentVideo;