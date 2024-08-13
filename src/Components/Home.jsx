function Home() {
    return (
        <div>
            <div className="bg-cover bg-center h-[350px] sm:h-[450px] flex items-center justify-center text-center text-white" style={{
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://as1.ftcdn.net/v2/jpg/05/11/76/04/1000_F_511760496_sKhxinojwbVgHUWT1NR5JzMjoRcmPTIu.jpg')"
            }}>
                <div>
                    <h2 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4">Elevate Your Lifestyle with Our Exclusive Collection!</h2>
                    <p className="text-sm sm:text-lg mb-4 sm:mb-8">Discover our latest products and offers</p>
                    <a href="#" className="bg-yellow-500 text-black px-4 sm:px-6 py-2 sm:py-3 rounded">Shop Now</a>
                </div>
            </div>

            <div className="container mx-auto py-4 sm:py-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">Featured Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                    
                </div>
            </div>
        </div>
    );
}


export default Home


