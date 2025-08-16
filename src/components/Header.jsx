import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";

function Header() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" collapseOnSelect>
        <Container>

          <Link className="navbar-brand" to="/" >Ecommerce Moorthi Shop</Link>


          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <Link className="nav-link" to="/"> Home</Link>

              <Link className="nav-link" to="/cart"> Cart</Link>

              <Link className="nav-link" to="/checkout"> Checkout</Link>


              {userInfo ? (
                <li className="nav-item dropdown">

                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    data-bs-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Welcome {userInfo.first_name}
                  </Link>

                  <div className="dropdown-menu">
                    <Container>
                      <Link className="nav-link text-black" to="/profile">My Profile
                        {/* <NavDropdown.Item  >Profile</NavDropdown.Item> */}

                      </Link>
                   
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                     </Container>
                  </div>
                </li>
              ) : (
                <>

                  <Link className="nav-link" to="/signup"> Signup</Link>


                  <Link className="nav-link" to="/login"> Login</Link>

                </>
              )}


              {userInfo && userInfo.isAdmin && (
                
                <NavDropdown title='Admin' id='adminmenue'>
                  
                  <Container>
                  <Link className="nav-link text-black " to='/admin/userlist'>Users
                    {/* <NavDropdown.Item>Users</NavDropdown.Item> */}
                  </Link>

                  <Link className="nav-link text-black " to='/admin/productlist'>Products
                    {/* <NavDropdown.Item>Products</NavDropdown.Item> */}
                  </Link>

                  <Link className=" nav-link text-black" to='/admin/orderlist'>Orders
                    {/* <NavDropdown.Item>Orders</NavDropdown.Item> */}
                  </Link>
                  </Container>
                 

                </NavDropdown>
                
              )}





            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
