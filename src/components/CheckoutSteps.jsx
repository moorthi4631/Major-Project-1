import React from 'react'
import { Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

function CheckoutSteps({step1,step2,step3,step4}) {
  return (
<Nav className='justify-content-center mb-4'>

    <Nav.Item>
        {
            step1?(
                <Link className="nav-link" to="/login">Login</Link>
            ):(
                <Nav.Link disabled>Login</Nav.Link>
            )
        }
    </Nav.Item>

    <Nav.Item>
        {step2?(
              <Link className="nav-link" to="/checkout">Checkout</Link>
        ):(
            <Nav.Link disabled>Checkout</Nav.Link>
        )}
    </Nav.Item>

    <Nav.Item>
        {step3?(
              <Link className="nav-link" to="/payment">Payment</Link>
        ):(
            <Nav.Link disabled>Payment</Nav.Link>
        )}
    </Nav.Item>







    <Nav.Item>
        {step4?(
              <Link className="nav-link" to="/place order">Place Order</Link>
        ):(
            <Nav.Link disabled>Place Order</Nav.Link>
        )}
    </Nav.Item>




</Nav>
  )
}

export default CheckoutSteps