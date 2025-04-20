import React ,{ FC, memo } from "react";
import { CartItem, Products } from '../type';
type CartSummaryProps = {
    cartItems: CartItem[];
    updateQuantity: (id: number, quantity: number) => void;
    removeFromCart: (id: number) => void;
    calculateTotal: () => number;
  };
const CartList:FC<CartSummaryProps> = ({
    cartItems,
    removeFromCart,
    calculateTotal,
  })=>{
    let shippingCost = 11.00;
    let discount = 5.00;
    let total = ((calculateTotal()+shippingCost)-discount).toFixed(2);
    return (
        <>
            <div className="p-8 overflow-hidden bg-white rounded-lg dark:bg-dark-2 shadow-1 dark:shadow-box-dark">
                <div className="pb-3 mb-5 border-b border-stroke border-dark-3">
                    {cartItems.length===0?(
                        <p className="text-base font-semibold text-dark">Item not found in carts</p>
                    ):(
                        cartItems.map((item)=>(
                        <div key = {item.id} className="flex items-center justify-between pb-4 -mx-1">
                            <div className="flex items-center px-1">
                                <div className="mr-3 h-10 w-full max-w-[40px] overflow-hidden rounded">
                                <img src={item.images[0]!=""?item.images[0]:item.images[1]} alt={item.title} className="w-full" />
                                </div>
                                <div>
                                <span className="text-sm font-medium text-dark hover:text-primary cursor-pointer">
                                {item.category.name}
                                </span>
                                <p className="text-xs font-medium truncate text-body-color dark:text-dark-6">
                                {item.title} 
                                </p>
                                </div>
                            </div>
                            <div className="px-1">
                                <p className="text-base font-semibold text-dark">${item.price} </p>
                            </div>
                        </div>
                        ))
                    )}
                </div>
                {cartItems.length===0?(
                        <p></p>
                    ):(
                    <div>
                        <div className="pb-5 -mx-1 border-b border-stroke dark:border-dark-3">
                            <div className="flex items-center justify-between mb-3">
                            <div className="px-1">
                                <p className="text-base text-dark">Subtotal</p>
                            </div>
                            <div className="px-1">
                                <p className="text-base font-medium text-dark">${calculateTotal().toFixed(2)}</p>
                            </div>
                            </div>
                            <div className="flex items-center justify-between mb-3">
                            <div className="px-1">
                                <p className="text-base text-dark ">Shipping Cost (+)</p>
                            </div>
                            <div className="px-1">
                                <p className="text-base font-medium text-dark">${shippingCost}</p>
                            </div>
                            </div>
                            <div className="flex items-center justify-between">
                            <div className="px-1">
                                <p className="text-base text-dark">Discount (-)</p>
                            </div>
                            <div className="px-1">
                                <p className="text-base font-medium text-dark">${discount}</p>
                            </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-5 pb-6 -mx-1">
                            <div className="px-1">
                            <p className="text-base text-dark">Total Payable</p>
                            </div>
                            <div className="px-1">
                            <p className="text-base font-medium text-dark">${total}</p>
                            </div>
                        </div>

                        <div>
                            <button className="flex w-full items-center justify-center rounded-md bg-primary-600 py-[13px] px-10 text-center text-base font-medium text-white hover:bg-primary-900">
                            Place Order
                            </button>
                        </div>
                    </div>
                )}
            </div>

        </>
    );
};
export default CartList;