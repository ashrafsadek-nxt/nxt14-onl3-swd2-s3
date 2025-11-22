// Main App Component
const App = () => {
    const [products, setProducts] = React.useState([]);
    const [filteredProducts, setFilteredProducts] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [selectedCategory, setSelectedCategory] = React.useState('');
    const [priceRange, setPriceRange] = React.useState({ min: '', max: '' });
    const [sortBy, setSortBy] = React.useState('name');
    const [selectedProduct, setSelectedProduct] = React.useState(null);
    const [isCartOpen, setIsCartOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    // Sample product data
    const sampleProducts = [
        {
            id: 1,
            name: "Wireless Bluetooth Headphones",
            price: 79.99,
            category: "Electronics",
            description: "Premium wireless Bluetooth headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop",
            rating: 4.5,
            inStock: true
        },
        {
            id: 2,
            name: "Smart Fitness Watch",
            price: 199.99,
            category: "Electronics",
            description: "Advanced fitness tracking with heart rate monitor, GPS, and 7-day battery life. Track your workouts and stay healthy.",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop",
            rating: 4.3,
            inStock: true
        },
        {
            id: 3,
            name: "Organic Cotton T-Shirt",
            price: 29.99,
            category: "Clothing",
            description: "Comfortable and sustainable organic cotton t-shirt. Available in multiple colors and sizes.",
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=200&fit=crop",
            rating: 4.2,
            inStock: true
        },
        {
            id: 4,
            name: "Stainless Steel Water Bottle",
            price: 24.99,
            category: "Home & Kitchen",
            description: "Insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
            image: "https://images.unsplash.com/photo-1602143407151-711f2d5b73c8?w=300&h=200&fit=crop",
            rating: 4.6,
            inStock: true
        },
        {
            id: 5,
            name: "Wireless Charging Pad",
            price: 34.99,
            category: "Electronics",
            description: "Fast wireless charging pad compatible with all Qi-enabled devices. Sleek and minimal design.",
            image: "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=300&h=200&fit=crop",
            rating: 4.1,
            inStock: true
        },
        {
            id: 6,
            name: "Yoga Mat Premium",
            price: 49.99,
            category: "Sports",
            description: "Extra thick and non-slip yoga mat for comfortable practice. Made from eco-friendly materials.",
            image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=200&fit=crop",
            rating: 4.4,
            inStock: true
        },
        {
            id: 7,
            name: "Ceramic Coffee Mug Set",
            price: 39.99,
            category: "Home & Kitchen",
            description: "Set of 4 handcrafted ceramic coffee mugs. Perfect for your morning coffee or tea.",
            image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=300&h=200&fit=crop",
            rating: 4.0,
            inStock: true
        },
        {
            id: 8,
            name: "Running Shoes",
            price: 89.99,
            category: "Sports",
            description: "Lightweight and comfortable running shoes with excellent cushioning and support.",
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop",
            rating: 4.7,
            inStock: true
        }
    ];

    React.useEffect(() => {
        // Simulate API call
        setTimeout(() => {
            try {
                setProducts(sampleProducts);
                setFilteredProducts(sampleProducts);
                setLoading(false);
            } catch (err) {
                setError('Failed to load products. Please try again.');
                setLoading(false);
            }
        }, 1000);
    }, []);

    React.useEffect(() => {
        let filtered = [...products];

        // Filter by category
        if (selectedCategory) {
            filtered = filtered.filter(product => product.category === selectedCategory);
        }

        // Filter by price range
        if (priceRange.min) {
            filtered = filtered.filter(product => product.price >= parseFloat(priceRange.min));
        }
        if (priceRange.max) {
            filtered = filtered.filter(product => product.price <= parseFloat(priceRange.max));
        }

        // Sort products
        switch (sortBy) {
            case 'name':
                filtered.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-desc':
                filtered.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'price-low':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                filtered.sort((a, b) => b.rating - a.rating);
                break;
            case 'category':
                filtered.sort((a, b) => a.category.localeCompare(b.category));
                break;
            default:
                break;
        }

        setFilteredProducts(filtered);
    }, [products, selectedCategory, priceRange, sortBy]);

    const categories = [...new Set(products.map(product => product.category))];

    const handleAddToCart = (product) => {
        const existingItem = cartItems.find(item => item.id === product.id);
        
        if (existingItem) {
            setCartItems(cartItems.map(item => 
                item.id === product.id 
                    ? {...item, quantity: item.quantity + (product.quantity || 1)}
                    : item
            ));
        } else {
            setCartItems([...cartItems, {...product, quantity: product.quantity || 1}]);
        }
    };

    const handleRemoveFromCart = (productId) => {
        setCartItems(cartItems.filter(item => item.id !== productId));
    };

    const handleUpdateQuantity = (productId, quantity) => {
        if (quantity <= 0) {
            handleRemoveFromCart(productId);
        } else {
            setCartItems(cartItems.map(item => 
                item.id === productId ? {...item, quantity} : item
            ));
        }
    };

    const handleViewDetails = (product) => {
        setSelectedProduct(product);
    };

    const getTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <div className="app">
            <header className="header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h1><i className="fas fa-store me-2"></i>E-Commerce Store</h1>
                        </div>
                        <div className="col-md-6 text-end">
                            <div 
                                className="cart-icon d-inline-block"
                                onClick={() => setIsCartOpen(true)}
                            >
                                <i className="fas fa-shopping-cart fa-2x"></i>
                                {getTotalItems() > 0 && (
                                    <span className="cart-count">{getTotalItems()}</span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="container my-5">
                <div className="row">
                    <div className="col-lg-3">
                        <Filter
                            categories={categories}
                            selectedCategory={selectedCategory}
                            onCategoryChange={setSelectedCategory}
                            priceRange={priceRange}
                            onPriceRangeChange={setPriceRange}
                        />
                        <Sorting
                            sortBy={sortBy}
                            onSortChange={setSortBy}
                        />
                    </div>
                    <div className="col-lg-9">
                        <ProductList
                            products={filteredProducts}
                            onAddToCart={handleAddToCart}
                            onViewDetails={handleViewDetails}
                            loading={loading}
                            error={error}
                        />
                    </div>
                </div>
            </main>

            <Cart
                cartItems={cartItems}
                onRemoveFromCart={handleRemoveFromCart}
                onUpdateQuantity={handleUpdateQuantity}
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
            />

            <ProductDetails
                product={selectedProduct}
                onClose={() => setSelectedProduct(null)}
                onAddToCart={handleAddToCart}
            />

            <style jsx>{`
                .cart-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.5);
                    z-index: 1050;
                }

                .cart-sidebar {
                    position: fixed;
                    top: 0;
                    right: 0;
                    width: 400px;
                    height: 100vh;
                    background: white;
                    z-index: 1051;
                    overflow-y: auto;
                }

                .product-details-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 1050;
                }

                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.5);
                }

                .modal-content {
                    position: relative;
                    margin: 50px auto;
                    max-width: 800px;
                    max-height: 90vh;
                    overflow-y: auto;
                }

                @media (max-width: 768px) {
                    .cart-sidebar {
                        width: 100%;
                    }
                    
                    .modal-content {
                        margin: 20px;
                        max-height: calc(100vh - 40px);
                    }
                }
            `}</style>
        </div>
    );
};