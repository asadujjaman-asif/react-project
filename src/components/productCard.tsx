import React,{memo} from "react";
import { CartItem, Products } from '../type';

interface Props {
    product:any;
    onAddToCart:(product:Products)=>void;
}

const ProductCard: React.FC<Props> =({product,onAddToCart})=>{
    return (
        <div key = {product.id} className='bg-gray-100 p-5 rounded-lg'>
            <img src={product.images[0]!=""?product.images[0]:product.images[1]} className="w-full h-40 object-cover" alt={product.title} />
            <h2 className="text-base font-semibold mt-2">
            {product.title} 
            </h2>
            <div className='flex items-center justify-between mt-2'>
                <p className="text-lg font-semibold mt-2">
                    ${product.price} 
                </p>
                <button className="bg-emerald-500 text-sm text-emerald-50 px-4 py-2 mt-2 rounded hover:bg-emerald-600"
                    onClick={()=>onAddToCart(product)}>Add to cart</button>
            </div>
        </div>
    );
}
//export default ProductCard;
export default memo(ProductCard);