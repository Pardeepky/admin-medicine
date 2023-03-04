import axios from 'axios';
import React, { useRef } from 'react';

const url = 'https://crudcrud.com/api/fde1c6587ab346939ccf309ab85af4da/'

const AddProductForm = () => {
    const medicineName = useRef('');
    const descriptionRef = useRef('');
    const priceRef = useRef('');

    const submitHandler = async (event) => {
        event.preventDefault();
        try {
            const medicineDetails = {
                name: medicineName.current.value,
                description: descriptionRef.current.value,
                price: priceRef.current.value,
                quantity: 1
            };
            await axios.post(`${url}products`, medicineDetails)
            medicineName.current.value = '';
            descriptionRef.current.value = '';
            priceRef.current.value = '';
            window.alert("Product Added")
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='d-flex justify-content-center'>
            <div className='card ' style={{ width: '40rem' }}>
                <div className='card-body'>
                    <form onSubmit={submitHandler}>
                        <div className="form-outline mb-4">
                            <label htmlFor='medicineName' className="form-label">Medicine Name</label>
                            <input type="text" className="form-control" id='medicineName' ref={medicineName} />
                        </div>
                        <div className="form-outline mb-4">
                            <label htmlFor="description" className="form-label">Description</label>
                            <input type="text" className="form-control" id="description" ref={descriptionRef} />
                        </div>
                        <div className="form-outline mb-4">
                            <label htmlFor="price" className="form-label">Price</label>
                            <input type="text" className="form-control" id="price" ref={priceRef} />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block mb-4">Add Product</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddProductForm;