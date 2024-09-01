import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Card = ({ product }) => {
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg">
            <Image className="w-full" src={product.image ?? '/img/placeholder.png'} alt={product.name} width={500} height={500} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                    <Link href={'/product/' + product.id}>{product.name}</Link>
                </div>
                <p className="text-gray-700 text-base">{product.description}</p>
            </div>
            <div className="px-6 py-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Card;