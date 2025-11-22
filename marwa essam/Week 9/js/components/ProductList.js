// ProductList Component
const ProductList = ({ products, onAddToCart, onViewDetails, loading, error }) => {
    if (loading) {
        return (
            <div className="loading">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-3">Loading products...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error">
                <i className="fas fa-exclamation-triangle fa-2x mb-3"></i>
                <p>{error}</p>
                <button className="btn btn-primary" onClick={() => window.location.reload()}>
                    Retry
                </button>
            </div>
        );
    }

    if (products.length === 0) {
        return (
            <div className="text-center py-5">
                <i className="fas fa-search fa-3x text-muted mb-3"></i>
                <h4>No products found</h4>
                <p className="text-muted">Try adjusting your filters or search criteria</p>
            </div>
        );
    }

    return (
        <div className="row">
            {products.map(product => (
                <ProductCard 
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                    onViewDetails={onViewDetails}
                />
            ))}
        </div>
    );
};