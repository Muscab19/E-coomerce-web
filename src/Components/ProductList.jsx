import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import Product from "./Product"
import Header from "./Header"
import Home from './Home'
import ClipLoader from "react-spinners/ClipLoader"


function Productlist() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const handleProducts = () => {
        setLoading(true);
        axios.get("https://fakestoreapi.in/api/products").then((response) => {
            setProducts(response.data.products);
            setLoading(false);
        }).catch((error) => {
            console.log(error);
        });
    };

    useEffect(() => {
        handleProducts();
    }, []);

    return loading ? (
        <ClipLoader loading={loading} />
    ) : (
        <div className="mt-[67px]">
            <Header search={handleSearch} />
            <Home />
            <div className="grid gap-y-6 sm:gap-y-10 gap-x-4 sm:gap-x-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center">
                {products.filter((item) => search.toLowerCase() === "" ? item : item.title.toLowerCase().includes(search.toLowerCase())).map((data) => (
                    <Product key={data.id} items={data} />
                ))}
            </div>
        </div>
    );
}


export default Productlist





















// import ClipLoader from "react-spinners/ClipLoader"




