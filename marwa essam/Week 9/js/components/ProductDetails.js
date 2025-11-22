// ProductDetails Component
const ProductDetails = ({ product, onClose, onAddToCart }) => {
    const [quantity, setQuantity] = React.useState(1);

    if (!product) return null;

    const handleAddToCart = () => {
        onAddToCart({...product, quantity});
    };

    return (
        <div className="product-details-modal">
            <div className="modal-overlay" onClick={onClose}></div>
            <div className="modal-content product-details">
                <div className="d-flex justify-content-between align-items-start mb-3">
                    <h3>{product.name}</h3>
                    <button 
                        className="btn btn-link text-decoration-none"
                        onClick={onClose}
                    >
                        <i className="fas fa-times"></i>
                    </button>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <img 
                            src={product.image} 
                            alt={product.name}
                            className="details-image"
                        />
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <span className="badge bg-primary me-2">{product.category}</span>
                            <span className="badge bg-warning text-dark">
                                <i className="fas fa-star me-1"></i>{product.rating}
                            </span>
                        </div>

                        <h4 className="text-primary mb-3">${product.price}</h4>
                        
                        <p className="mb-4">{product.description}</p>

                        <div className="mb-3">
                            <label className="form-label">Quantity:</label>
                            <div className="d-flex align-items-center">
                                <button 
                                    className="btn btn-outline-secondary btn-sm"
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                >
                                    <i className="fas fa-minus"></i>
                                </button>
                                <span className="mx-3">{quantity}</span>
                                <button 
                                    className="btn btn-outline-secondary btn-sm"
                                    onClick={() => setQuantity(quantity + 1)}
                                >
                                    <i className="fas fa-plus"></i>
                                </button>
                            </div>
                        </div>

                        <div className="d-flex gap-2">
                            <button 
                                className="btn btn-primary flex-fill"
                                onClick={handleAddToCart}
                            >
                                <i className="fas fa-cart-plus me-2"></i>Add to Cart
                            </button>
                            <button className="btn btn-outline-secondary">
                                <i className="fas fa-heart"></i>
                            </button>
                        </div>

                        <div className="mt-4">
                            <h6>Product Details:</h6>
                            <ul className="list-unstyled">
                                <li><strong>SKU:</strong> {product.id}</li>
                                <li><strong>Category:</strong> {product.category}</li>
                                <li><strong>Rating:</strong> {product.rating}/5</li>
                                <li><strong>In Stock:</strong> {product.inStock ? 'Yes' : 'No'}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};