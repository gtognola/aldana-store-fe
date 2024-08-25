"use client"
import { useState, useEffect } from 'react'

export default function Page({ params }) {

    const { id } = params;
    //const id = params.id;

    const [product, setProduct] = useState({});

    useEffect(() => {

    });



    return <p>Post: {id}</p>;
}
