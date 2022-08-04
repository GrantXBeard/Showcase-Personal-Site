import React from 'react'

const Form = ({ getType }) => {
    return (
        <form>
      <select onChange={event => getType(event)} name='type' id='type'>
       <option defaultValue=''>Select a Medium</option>
       <option value='collage'>Collage</option>
       <option value='drawing'>Drawing</option>
       <option value='mixed-media'>Mixed Media</option>
       <option value='painting'>Painting</option>
       <option value='sculpture'>Sculpture</option>
      </select>
      </form>
    )
}
export default Form