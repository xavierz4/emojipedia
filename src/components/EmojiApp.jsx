import {Footer} from './Footer'
import {Entry} from './Entry'
import {emojipedia} from './emojipedia'




const createEntry = (props) => {
  return (
    <Entry 
      key={props.id}
      emoji={props.emoji}  
      name={props.name}
      description={props.meaning}  
    />
  )
}

export const EmojiApp = () => {
  return (
    <>
    <div className='flex-container'>
     
      <h1>
        <span>Emojipedia</span>
      </h1>
      
      <dl className="dictionary">
      
       {emojipedia.map(createEntry)}
        
      </dl>
      
    </div>
    <div><Footer/></div>
   
    </>
    
  )
}
