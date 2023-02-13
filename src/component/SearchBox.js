import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        style={{border: 'none', outline: 'none'}}
        className='flex pv1 ph3 input-reset bn h-100 w-100 bg-inherit'
        placeholder="搜尋" 
        type="text" 
        onChange={searchChange}
        id="myInput" 
      />
    </div>
  );
}

export default SearchBox;