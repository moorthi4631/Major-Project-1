import React from 'react'
import { Spinner } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
function Loader() {
  return (
    <Spinner animation="border" role="status" style={{size:'12px',margin:'auto',display:'block'}}>

  </Spinner>
  // <Button variant="primary" disabled>
  //       <Spinner
  //         as="span"
  //         animation="grow"
  //         size="sm"
  //         role="status"
  //         aria-hidden="true"
  //       />
  //       Loading...
  //     </Button>
  )
}

export default Loader;