import Image from "next/image";

const ProductDetail = ({ product }) => {
  return product ? (
    <>
      <div className="grid grid-cols-2 my-5 gap-6">
        <div className="grid place-content-end">
          <h1 className="grid place-content-center text-xl my-5">
            {product.name}
          </h1>
          <Image
            src={product.image ?? "/img/placeholder.png"}
            alt={product.name}
            width={400}
            height={400}
            className="rounded-xl shadow-2xl"
          />
        </div>
        <div className="grid place-content-center px-2 py-4 gap-6">
          <p>{product.description}</p>
          <p>${product.price}</p>
          <div className="my-5">
            <button className="bg-amber-300 hover:bg-amber-100 text-gray-700 font-bold py-2 px-4 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  ) : (
    <p>Producto no encontrado</p>
  );
};
export default ProductDetail;
