import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Loader'
import Message from '../Message'
import { listProducts,createProduct,deleteProduct } from '../../actions/productAction'
import { PRODUCT_CREATE_RESET } from '../../constants/productConstants'
import { useNavigate } from "react-router-dom";


function ProductListScreen() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const handleClose = () => setMessage(false);
    const [messsage, setMessage] = useState("");
    const productsList=useSelector(state=>state.productsList)
    const{loading,error,products}=productsList



    const productDelete = useSelector(state => state.productDelete)
    const { loading: loadingDelete, error: errorDelete, success: successDelete } = productDelete

    const productCreate = useSelector(state => state.productCreate)
    const { loading: loadingCreate, error: errorCreate, success: successCreate, product: createdProduct } = productCreate






    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin


    useEffect(()=>{

        dispatch({ type: PRODUCT_CREATE_RESET })

        if (!userInfo.isAdmin) {
            navigate('/login')
        }



        if(successCreate){
            navigate(`/admin/product/${createdProduct?._id}/edit`)
        }


        dispatch(listProducts())
    
      },[dispatch, userInfo, successDelete, successCreate])
    
      const createProductHandler = () => {
        dispatch(createProduct())
    }

    const deleteHandler = (id) => {

        if (window.confirm('Are you sure you want to delete this product?')) {
            dispatch(deleteProduct(id))
        }
    }



  return (
    <>
     <Row className='align-items-center'>
                <Col>
                    <h1>Products</h1>
                </Col>

                <Col className='text-right'>
                    <Button className='my-3' onClick={createProductHandler}>
                        <i className='fas fa-plus'></i> Create Product
                    </Button>
                </Col>
            </Row>


            {loadingDelete && <Loader />}
            {errorDelete && <Message variant='danger' onClose={handleClose}>{errorDelete}</Message>}


            {loadingCreate && <Loader />}
            {errorCreate && <Message variant='danger' onClose={handleClose}>{errorCreate}</Message>}

            {loading
                ? (<Loader />)
                : error
                    ? (<Message variant='danger' onClose={handleClose}>{error}</Message>)
                    : (
                        <div>
                            <Table striped bordered hover responsive className='table-sm border-dark'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>NAME</th>
                                        <th>PRICE</th>
                                        <th>CATEGORY</th>
                                        <th>BRAND</th>
                                        <th>OPTIONS</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {products.map(product => (
                                        <tr key={product._id}>
                                            <td>{product._id}</td>
                                            <td>{product.name}</td>
                                            <td>Rs. {product.price}</td>
                                            <td>{product.category}</td>
                                            <td>{product.brand}</td>

                                            <td>
                                                <Link className='nav-link' to={`/admin/product/${product._id}/edit`}>
                                                    <Button variant='light' className='btn-sm '>
                                                        <i className='fas fa-edit'></i>
                                                    </Button>
                                                </Link>

                                                <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(product._id)}>
                                                    <i className='fas fa-trash'></i>
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                           
                        </div>
                    )}
  
    
    
    
    
    
    
    </>
  )
}

export default ProductListScreen