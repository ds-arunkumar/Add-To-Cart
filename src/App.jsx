import { useEffect, useState } from "react";
import './App.css';
import Cart from "./component/Cart";

const App = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`, {
            method: 'GET'
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setProducts(data);
            })
    }, []);

    const [cart, setCart] = useState([]);


    const handleAddToCart = (product) => {
        setCart([...cart, product])
    }

    const handleRemoveFromCart = (product) => {
        setCart(cart.filter(cartProduct => cartProduct.id !== product.id));
    }

    const [show, setShow] = useState(false);

    return (
        <div className="container">
          {
            show && (
            <Cart 
                cart={cart} 
                close={setShow}         
            />
            )
          }
            <div className="header">
                <h1>Shopping Cart</h1>
                <button className='cartBtn' onClick={() => setShow(true)} >Cart {cart.length}</button>
            </div>
            <div className="products">
                {
                  products.map(product => (
                    <div className="productBox" key={product.id}>
                      <h3>{product.title}</h3>
                      <div className="productImage"><img src={product.image} alt={product.title}/></div>
                      <p>{product.description}</p>
                      <p className="price" >Rs {product.price}</p>
                      <button className="addCart" onClick={
                        cart.find(cartProduct => cartProduct.id === product.id) ? () => handleRemoveFromCart(product) : ()=> handleAddToCart(product)
                      }>
                        {
                            cart.find(cartProduct => cartProduct.id === product.id) ? "Remove from cart" : "Add to cart"
                        }
                      </button>
                      
                        
                    </div>
                  ))
                }
            </div>

            
            
        </div>
    )
}

export default App;