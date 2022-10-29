import {Footer} from './Footer'
import {Entry} from './Entry'

export const EmojiApp = () => {
  return (
    <>
    <div className='flex-container'>
     
      <h1>
        <span>Emojipedia</span>
      </h1>
      
      <dl className="dictionary">
       <Entry />
       
        
      </dl>
      
    </div>
    <div><Footer/></div>
    </>
    
  )
}
