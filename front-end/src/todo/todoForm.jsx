import React from 'react';

import Grid from '../template/grid';
import IconButton from '../template/iconButton';

export default props => {
  const keyHandler = (e) => {
    if (e.key == 'Enter') {
      e.shiftKey ? props.handleSearch() : props.handleAdd();
    } else if (e.key === 'Escape') {
      props.handleClear();
    }
  }

  return (
    <div role='form' className='todoForm'>
      <Grid cols='12 9 10'>
        <input id='description' onKeyUp={keyHandler} className='form-control' placeholder='Adicione uma tarefa' onChange={props.handleChange} value={props.description}></input>
      </Grid>
      <Grid cols='12 3 2'>
        <IconButton icon='plus' style='primary' onClick={props.handleAdd} />
        <IconButton style='info' icon='search' onClick={props.handleSearch} />
        <IconButton style='default' icon='close' onClick={props.handleClear} />
      </Grid>
    </div>
  )
}