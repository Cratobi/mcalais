import React, { Fragment } from 'react'
import { Card, Container } from '../'

const modal = props => {
  return (
    <Container>
      <div className='modal-conatiner' noPad>
        <div className='backdrop' onClick={props.modalClose} />
        <Card className='modal' noPad>
          <div className='modal-header'>
            <button className='btn btn-close' onClick={props.modalClose}>
              <i className='material-icons'>close</i>
            </button>
          </div>
          <Container className='modal-body' style={props.style}>
            {props.children}
          </Container>
          <Container className='modal-bottom-pad' />
        </Card>
      </div>
    </Container>
  )
}

export default modal
