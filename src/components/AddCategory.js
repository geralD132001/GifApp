
import React, { useState } from 'react';
import ProTypes from 'prop-types';

export const AddCategory = ( { setCategorias } ) => {

  const [inputValue, setInputValue] = useState( '' ); // Cuando

  const handleInoutChange = (ld) => {
    setInputValue(ld.target.value);
  }

  const handleSubmit = (rt) => {

    rt.preventDefault();

    if( inputValue.trim().length > 2 ) {

      setCategorias( cats => [  inputValue , ...cats  ] );
      setInputValue( '' );
    }
  
  }


  return (

      <form onSubmit={ handleSubmit }>

        <input type="text" value={ inputValue } onChange={ handleInoutChange } />

      </form>

  )

};

AddCategory.propTypes = {

  setCategorias: ProTypes.func.isRequired
}
