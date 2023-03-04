import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import ProductsList from '../components/Products/ProductsList';
import CartContext from '../context/cart-context'
import classes from './products.module.css'

const url = 'https://crudcrud.com/api/fde1c6587ab346939ccf309ab85af4da/'

const Products = () => {
  const [medicines, setMedicines] = useState([])
  const [loading, setLoading] = useState(false);
  const cartCtx = useContext(CartContext);

  const fetchMedicines = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${url}products`)
      setMedicines(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMedicines();
  }, [])

  return (
    <>
      <div className={classes.store}>
        <ProductsList medicines={medicines} loading={loading} />
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-success" onClick={cartCtx.showCartHandler}>See the Cart</button>
      </div>
    </>
  )
}

export default Products