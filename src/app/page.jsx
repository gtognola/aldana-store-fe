"use client"
import Image from "next/image";
import Card from "../components/card";
// import LoadingSpinner from "@/components/loading-spinner";
import { CarouselWithArrows } from "../components/carousel";
import { useState, useEffect } from 'react'

export default function Home() {

	const product = {
		"id": 11,
		"name": "Porta Chupetes Azul",
		"description": "Un porta chupetes de color azul fabricado con materiales seguros para bebés.",
		"price": "15.99",
		"image": "https://acdn.mitiendanube.com/stores/564/930/products/photo_4961253643328269154_y-cb75eeba3e7869034c16962835648624-1024-1024.jpg",
		"categoryId": 1
	};

	const [products, setProducts] = useState([])
	const [isLoading, setLoading] = useState(true)

	useEffect(() => {
		setLoading(true)
		fetch('http://localhost:8080/product')
			.then((res) => res.json())
			.then((data) => {
				setProducts(data)
				setLoading(false)
			}).catch((error) => {
				console.log('Error:', error)
			})
	}, [])

	return (
		<div>
			<div className="mt-2">
				<CarouselWithArrows> </CarouselWithArrows>
			</div>

			<div className="container mx-auto">
				{/* {isLoading && <LoadingSpinner />} */}
				<div className="my-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
					{products.map(
						(product) => (
							<Card key={product.id} product={product} />
						)
					)}
				</div>
			</div>
		</div>
	);
}
