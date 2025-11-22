// Cart Component
const Cart = ({ cartItems, onRemoveFromCart, onUpdateQuantity, isOpen, onClose }) => {
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    };

    const getTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    if (!isOpen) return null;

    return (
        <div className="cart-overlay">
            <div className="cart-sidebar slide-in">
                <div className="cart-header d-flex justify-content-between align-items-center p-3 border-bottom">
                    <h5 className="mb-0">
                        <i className="fas fa-shopping-cart me-2"></i>Shopping Cart
                    </h5>
                    <button 
                        className="btn btn-link text-decoration-none"
                        onClick={onClose}
                    >
                        <i className="fas fa-times"></i>
                    </button>
                </div>

                <div className="cart-body p-3">
                    {cartItems.length === 0 ? (
                        <div className="text-center py-5">
                            <i className="fas fa-shopping-cart fa-3x text-muted mb-3"></i>
                            <p>Your cart is empty</p>
                        </div>
                    ) : (
                        <>
                            {cartItems.map(item => (
                                <div key={item.id} className="cart-item">
                                    <div className="d-flex">
                                        <img 
                                            src={item.image} 
                                            alt={item.name}
                                            className="rounded me-3"
                                            style={{width: '60px', height: '60px', objectFit: 'cover'}}
                                        />
                                        <div className="flex-grow-1">
                                            <h6 className="mb-1">{item.name}</h6>
                                            <p className="mb-1 text-muted">${item.price}</p>
                                            <div className="d-flex align-items-center">
                                                <button 
                                                    className="btn btn-sm btn-outline-secondary me-2"
                                                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                                >
                                                    <i className="fas fa-minus"></i>
                                                </button>
                                                <span className="me-2">{item.quantity}</span>
                                                <button 
                                                    className="btn btn-sm btn-outline-secondary me-3"
                                                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                                >
                                                    <i className="fas fa-plus"></i>
                                                </button>
                                                <button 
                                                    className="btn btn-sm btn-danger"
                                                    onClick={() => onRemoveFromCart(item.id)}
                                                >
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="cart-footer p-3 border-top">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h6 className="mb-0">Total ({getTotalItems()} items):</h6>
                            <h5 className="mb-0 text-primary">${getTotalPrice()}</h5>
                        </div>
                        <button className="btn btn-primary w-100 mb-2">
                            <i className="fas fa-credit-card me-2"></i>Checkout
                        </button>
                        <button className="btn btn-outline-secondary w-100">
                            <i className="fas fa-shopping-bag me-2"></i>Continue Shopping
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};