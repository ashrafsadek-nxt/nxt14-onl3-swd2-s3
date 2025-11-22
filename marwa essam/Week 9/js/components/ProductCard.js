// ProductCard Component
const ProductCard = ({ product, onAddToCart, onViewDetails }) => {
    const handleAddToCart = (e) => {
        e.stopPropagation();
        onAddToCart(product);
    };

    const handleViewDetails = () => {
        onViewDetails(product);
    };

    return (
        <div className="col-md-4 col-lg-3 mb-4">
            <div className="card product-card h-100 fade-in">
                <img 
                    src={product.image} 
                    className="product-image" 
                    alt={product.name}
                    onClick={handleViewDetails}
                />
                <div className="card-body d-flex flex-column">
                    <h5 className="product-title">{product.name}</h5>
                    <p className="product-description flex-grow-1">
                        {product.description.length > 100 
                            ? `${product.description.substring(0, 100)}...` 
                            : product.description}
                    </p>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <span className="product-price">${product.price}</span>
                        <small className="text-muted">{product.category}</small>
                    </div>
                    <div className="d-flex gap-2">
                        <button 
                            className="btn btn-primary flex-fill"
                            onClick={handleAddToCart}
                        >
                            <i className="fas fa-cart-plus me-1"></i>Add to Cart
                        </button>
                        <button 
                            className="btn btn-outline-primary"
                            onClick={handleViewDetails}
                        >
                            <i className="fas fa-eye"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};