"use client"
import { useState, useEffect } from 'react'
import  ProductDetail  from "../../../components/details";

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
    if (isLoading) return <p>Cargando...</p>;
    return (
        <div className='container'>

            <ProductDetail product={product}></ProductDetail>

        </div >

    );
}


