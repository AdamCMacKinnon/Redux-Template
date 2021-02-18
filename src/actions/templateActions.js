//DELETE THIS WHEN YOU START A PROJECT


//this is an action creator and returns an object
export const increment = (n) => {
  return{
      type: "INCREMENT",
      data: n
  }

}

// THIS IS NOT A NAMED EXPORT.  WHEN WE IMPORT INTO OUR COMPONENT WE HAVE TO IMPORT LIKE THIS:

/**
 *  import {increment} from './path
 * 
 * named export:
 * export default increment
 * 
 * import increment from './path'
 */