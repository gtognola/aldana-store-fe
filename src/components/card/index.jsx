import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Card = ({ product }) => {
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg">
            <div className="relative">
                <Image className="w-full" src={product.image ?? '/img/placeholder.png'} alt={product.name} width={500} height={500} />
                <span className="absolute bottom-3 left-3 bg-white border-0 rounded p-1 text-sm opacity-50">{product.categoryName}</span>
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                    <Link href={'/product/' + product.id}>{product.name}</Link>
                </div>
                <p className="text-gray-700 text-base">{product.description}</p>
            </div>
            <div className="px-6 py-4 grid grid-cols-1">
                <button className="bg-amber-200 hover:bg-amber-100 font-bold py-2 px-4 rounded">
                    Comprar
                </button>
            </div>
        </div>
    );
};

export default Card;