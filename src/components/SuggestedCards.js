import React from 'react'

const SuggestedCards = ({res}) => {
    console.log(res);
    
  return (
    <div className='flex h-28 my-5'>
     <div  >
        <img className='max-w-56 h-28 rounded-2xl' src={res.snippet.thumbnails.high.url} alt='thumbnail' />
     </div>
     <div className='grid mx-2 '>
        <div className='font-bold h-[50px] flex flex-wrap overflow-hidden'>{res.snippet.title}...</div>
        <div className='h-full grid'>
            <div  className='italic font-bold'>{res.snippet.channelTitle}</div>
            <div>{res.snippet.publishTime
            }</div>
        </div>
     </div>
    </div>
  )
}

export default SuggestedCards
