import { useSelector, useDispatch } from "react-redux";
import PriceCard from "../Components/PriceCard";
import { calculateTotalPrice, removeItem } from "../Components/redux/reducer/cart";

function Cart() {
    const items = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeItem(id));
        dispatch(calculateTotalPrice());
    };

    return (
        <div className="flex flex-col lg:flex-row lg:space-x-4 p-4">
            {items.length === 0 ? (
                <p className="text-2xl lg:text-4xl font-semibold text-center mt-10 lg:mt-20">The Cart Is Empty</p>
            ) : (
                <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 w-full lg:w-auto">
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 justify-center lg:justify-start">
                        {items.map((data) => (
                            <div key={data.id} className="relative border-2 sm:border-4 flex flex-col sm:flex-row items-start  sm:left-32 sm:items-center w-full sm:w-[600px] border-green-700 rounded p-2 m-3 bg-white">
                                <div className="flex-shrink-0">
                                    <img className="rounded w-[100px] sm:w-[150px]" src={data.image} alt={data.title} />
                                </div>
                                <div className="mt-2 sm:mt-0 ml-2 sm:ml-4">
                                    <h1 className="text-lg sm:text-xl font-semibold">{data.title.substring(0, 30)}</h1>
                                    <h1 className="text-lg sm:text-xl font-bold">${data.price}</h1>
                                </div>
                                <button onClick={() => handleRemove(data.id)} className="text-lg sm:text-xl font-semibold absolute top-2 right-2">X</button>
                            </div>
                        ))}
                    </div>
                    <PriceCard />
                </div>
            )}
        </div>
    );
}

export default Cart;
