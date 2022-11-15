// import { useNavigate } from 'react-router-dom'

// const CommentForm = ({ user, authenticated, handleCommentSubmit, commentFromState, commentFromState, handleCommentChange }) => {

//     let navigate = useNavigate()

// return (user && authenticated) ? (
//     <div className="comment-container">
//         <h1 className='comment-section'>Leave a comment below!</h1>
//         <form className='comment-form' onSubmit={handleSubmit}>
//             <textarea
//                 className='comment-body'
//                 id='comment'
//                 cols='55'
//                 rows='8'
//                 value={commentFromState.body}
//                 onChange={handleCommentChange}
//                 name='body'
//                 placeholder={'Leave a Comment!'}
//             />
//         <button className="submit-button">Post Comment</button>
//         </form>
//         </div>
//     ) : (
//         <div className="Protected">
//             <h3 className="must-login">You must be logged in to comment.</h3>
//             <button className="login-button" onClick={() => navigate('/login')}>Login</button>
//             </div>
//     )
//     }
// export default CommentForm