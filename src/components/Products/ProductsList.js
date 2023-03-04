import React, { useContext } from 'react'
import CartContext from '../../context/cart-context'

const ProductsList = ({ medicines, loading }) => {

    const cartCtx = useContext(CartContext);
    return (
        <>
            <h1 className='text-center m-3'>Medicines</h1>
            <table className="table">
                <tbody>
                    <tr>
                        <th scope="row">Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th></th>
                    </tr>
                    {!loading && (medicines.map((item) => {
                        return (
                            <tr key={item._id}>
                                <td scope="row">{item.name}</td>
                                <td>{item.description}</td>
                                <td>Rs {item.price}</td>
                                <td>{item.quantity}</td>
                                <td><button className='btn btn-primary' onClick={() => cartCtx.addToCart(item)}>Add To Cart</button></td>
                            </tr>
                        )
                    }))}
                </tbody>
            </table>
            {loading && <p className='text-center m-3'>Loading...</p>}
        </>
    )
}

export default ProductsList