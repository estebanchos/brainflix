import { dynamicDateFormatter } from '../../utils/dataFormater';
import viewIcon from '../../assets/images/icons/views.svg'
import likeIcon from '../../assets/images/icons/likes.svg'
import './CurrentInfo.scss';

function CurrentInfo({ activeVideo }) {
    return (
        <article className='current-video__info info'>
            <h1 className='info__title'>{activeVideo.title}</h1>
            <div className='info__details details'>
                <div className='details__meta'>
                    <p className='details__author'>{`By ${activeVideo.channel}`}</p>
                    <p className='details__date'>{dynamicDateFormatter(activeVideo.timestamp)}</p>
                </div>
                <div className='details__stats'>
                    <div className='details__views views'>
                        <img className='views__icon' src={viewIcon} alt='views icon' />
                        <p className='views__text'>{activeVideo.views}</p>
                    </div>
                    <div className='details__likes likes'>
                        <img className='likes__icon' src={likeIcon} alt='likes icon' />
                        <p className='likes__text'>{activeVideo.likes}</p>
                    </div>
                </div>
            </div>
            <p className='info__description'>{activeVideo.description}</p>
        </article>
    );
}

export default CurrentInfo;

const sampleVideo = {
    "title": "BMX Rampage: 2021 Highlights",
    "channel": "Red Cow",
    "image": "https://i.imgur.com/l2Xfgpl.jpg",
    "description": "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
    "views": "1,001,023",
    "likes": "110,985",
    "duration": "4:01",
    "video": "https://project-2-api.herokuapp.com/stream",
    "timestamp": 1626032763000,
    "comments": [
        {
            "name": "Micheal Lyons",
            "comment": "They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.",
            "likes": 0,
            "timestamp": 1628522461000
        },
        {
            "name": "Gary Wong",
            "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
            "likes": 0,
            "timestamp": 1626359541000
        },
        {
            "name": "Theodore Duncan",
            "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Every time I see him I feel instantly happy! He’s definitely my favorite ever!",
            "likes": 0,
            "timestamp": 1626011132000
        }
    ],
    "id": "84e96018-4022-434e-80bf-000ce4cd12b8"
}