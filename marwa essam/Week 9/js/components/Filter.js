// Filter Component
const Filter = ({ categories, selectedCategory, onCategoryChange, priceRange, onPriceRangeChange }) => {
    return (
        <div className="filter-section">
            <h5><i className="fas fa-filter me-2"></i>Filter Products</h5>
            
            <div className="mb-3">
                <label className="form-label">Category</label>
                <select 
                    className="form-select"
                    value={selectedCategory}
                    onChange={(e) => onCategoryChange(e.target.value)}
                >
                    <option value="">All Categories</option>
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>

            <div className="mb-3">
                <label className="form-label">Price Range</label>
                <div className="row">
                    <div className="col-6">
                        <input 
                            type="number"
                            className="form-control"
                            placeholder="Min"
                            value={priceRange.min}
                            onChange={(e) => onPriceRangeChange({...priceRange, min: e.target.value})}
                        />
                    </div>
                    <div className="col-6">
                        <input 
                            type="number"
                            className="form-control"
                            placeholder="Max"
                            value={priceRange.max}
                            onChange={(e) => onPriceRangeChange({...priceRange, max: e.target.value})}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};