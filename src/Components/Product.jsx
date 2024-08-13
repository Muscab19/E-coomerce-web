import { useDispatch } from "react-redux"
import {addItemToCart, calculateTotalPrice} from "./redux/reducer/cart"
import {toast, Toaster} from "react-hot-toast"



function Product({ items }) {
    const dispatch = useDispatch();
    
    const handleCart = () => {
        dispatch(addItemToCart(items));
        dispatch(calculateTotalPrice());
        if (addItemToCart(items)) {
            toast.success("Added To Your Cart");
        }
    };

    return (
        <div className="border-2 sm:border-4 w-[300px] ml-10 sm:w-[300px] p-2 m-3">
            <img src={items.image} alt={items.title} className="w-full h-auto" />
            <h1 className="mt-1 font-semibold">{items.title.substring(0, 30)}</h1>
            <div className="flex justify-between items-center">
                <h1 className="font-bold">${items.price}</h1>
                <button onClick={handleCart} className="bg-primaryColor rounded-full px-2 py-1 text-xl sm:text-base text-thirdColor font-bold">+</button>
            </div>
            <Toaster />
        </div>
    );
}


export default Product 