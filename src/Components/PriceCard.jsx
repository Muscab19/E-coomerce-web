import { useSelector } from "react-redux";

function PriceCard() {
    const price = useSelector((state) => state.cart.totalPrice);
    const number = useSelector((state) => state.cart.items);

    return (
        <div className="w-full sm:w-[330px] p-4 sm:p-6 rounded border-2 sm:border-4 h-[250px] bg-white sm:absolute sm:right-4 shadow-lg mt-4 lg:mt-0 lg:ml-4">
            <h1 className="text-lg sm:text-xl font-semibold">Total items</h1>
            <h1 className="font-bold text-lg sm:text-2xl">{number.length}</h1>
            <h1 className="text-lg sm:text-xl font-semibold mt-2 sm:mt-4">Total Price</h1>
            <h1 className="font-bold text-lg sm:text-xl">${price}</h1>
            <button className="bg-primaryColor text-thirdColor w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 mt-4 rounded">Pay Now</button>
        </div>
    );
}

export default PriceCard;
