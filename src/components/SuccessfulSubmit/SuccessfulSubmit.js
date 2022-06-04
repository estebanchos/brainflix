import './SuccessfulSubmit.scss'

function SuccessfulSubmit({ title }) {
    return ( 
        <div className='success'>
            <p className='success__title'>{title}</p>
            <p className='success__message'>Successfully Uploaded!</p>
            <p className='success__message'>Returning to homepage...</p>
        </div>
     );
}

export default SuccessfulSubmit;