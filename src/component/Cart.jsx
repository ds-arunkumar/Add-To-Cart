

import './Cart.css';


function Cart ({cart, close}){



 

  return(
    <>
    
    <div className='popContainer' onClick={() => close(false)}>
      <div className='productWhole'>
        <div className='popupBox'>
          {
            cart.map(product => (
              <div key={product.id} className='cartBox'>
                <p>{product.title}</p>
                <p className='price' >{product.price}</p>
              </div>
            ))
          }
          <div className='closeBtn' onClick={() => close(false)}>&times;</div> 
        </div>
         
      </div>
      
    </div> 
    </>
  )
}

export default Cart;