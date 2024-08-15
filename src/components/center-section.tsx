import React from 'react'
import TweetCard from './tweet-card'

const CenterSection = () => {
  return (
    <div className='flex items-center flex-col'>
      <TweetCard profilePicture={'https://avatarfiles.alphacoders.com/222/thumb-1920-222663.jpg'} name={'Aryan'} username={'@aryan'} content=' Lorem Ipsum has been the industry standard dummy text ever since the, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum' likedCount={5} commentCount={1}/>
      <TweetCard profilePicture={'https://avatarfiles.alphacoders.com/222/thumb-1920-222663.jpg'} name={'Aryan'} username={'@aryan'} content=' Lorem Ipsum has been the industry standard dummy text ever since the, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum' likedCount={2} commentCount={3}/>
    </div>
  )
}

export default CenterSection
