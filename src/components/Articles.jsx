import React from 'react'

const Articles = () => {


  return (
    <div>
      <div className="status-banner">Articles</div>
      <div className='carousel-container'>
        <div className='article-one'>
          <a href='https://www.vinylrecordday.org/blog/clean-vinyl-records-with-soap-and-water/' target="_blank">
            <h3>Can I Clean Vinyl Records With Soap and Water?</h3>
          </a>
          <img src='https://www.vinylrecordday.org/wp-content/uploads/2022/08/can-i-clean-vinyl-records-with-soap-and-water-1536x768.jpg' alt='article-one' />
        </div>
        <div className='article-two'>
          <a href='https://www.vinylrecordday.org/blog/how-does-a-record-player-work/' target="_blank">
            <h3>How Does a Record Player Work?</h3>
          </a>
          <img src='https://www.vinylrecordday.org/wp-content/uploads/2022/05/a-record-player-1536x768.jpg' alt='article-two' />
        </div>
        <div className='article-three'>
          <a href='https://www.vinylrecordday.org/blog/how-to-skip-songs-on-turntable/' target="_blank">
            <h3>A Guide To Changing Songs On a Record Player</h3>
          </a>
          <img src='https://www.vinylrecordday.org/wp-content/uploads/2021/06/how-to-skip-songs-on-a-record-player-1536x768.jpg' alt='article-three' />
        </div>
        <div className='article-four'>
          <a href='https://www.vinylrecordday.org/blog/top-selling-vinyl-records/' target="_blank">
            <h3>The Most Selling Vinyl Records</h3>
          </a>
          <img src='https://www.vinylrecordday.org/wp-content/uploads/2022/07/vinyl-records-1536x768.jpg' alt='article-four' />
        </div>
      </div>
    </div >
  )
}

export default Articles