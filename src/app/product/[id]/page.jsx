"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image';

export default function Page({ params }) {

    const { id } = params;
    //const id = params.id;


    const [product, setProduct] = useState({});
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:8080/product/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data)
                setLoading(false)
            }).catch((error) => {
                console.log('Error:', error)
            })
    }, [])

    return (
        <div className='container '>

            {product ? (
                <>
                    <div className='grid grid-cols-2 my-5 gap-6'>
                        <div className='grid place-content-end'>
                            <h1 className='grid place-content-center text-xl my-5'>{product.name}</h1>
                            <Image src={product.image} alt={product.name} width={400} height={400} className='rounded-xl shadow-2xl'/>
                        </div>
                        <div className="grid place-content-center px-2 py-4 gap-6">
                            <p>{product.description}</p>
                            <p>${product.price}</p>
                            <div className='my-5'>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <p>Producto no encontrado</p>
            )
            }

        </div >

    );
}


