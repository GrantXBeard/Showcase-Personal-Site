import React from 'react'
import PropTypes from 'prop-types';

const Form = ({ getType }) => {
    return (
        <form>
          <select onChange={event => getType(event)} name='type' id='type'>
            <option defaultValue=''>Select a Medium</option>
            <option value='collage'>Collage</option>
            <option value='drawing'>Drawing</option>
            <option value='mixed media'>Mixed Media</option>
            <option value='painting'>Painting</option>
            <option value='sculpture'>Sculpture</option>
            <option value='all'>All</option>
      </select>
      </form>
    )
}
export default Form

Form.propTypes = {
  getType: PropTypes.function
};