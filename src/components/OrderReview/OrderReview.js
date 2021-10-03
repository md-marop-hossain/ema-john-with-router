import React from 'react';
import { useHistory } from 'react-router';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useCart from '../hooks/useCart';
import useProducts from '../hooks/useProducts';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    //destructing ....
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);


    const handleRemove = (key) => {
        // console.log(key);
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }
    const history = useHistory();


    const handlePlaceOrder = () => {
        history.push('/placeorder');
        clearTheCart();
    }
    return (
        <div className="shop-container">
            <div className="product-container">

                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}
                    ></ReviewItem>)

                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button className="btn-regular" onClick={handlePlaceOrder}>Place Order</button>
                </Cart>
            </div>

        </div>
    );
};

export default OrderReview;