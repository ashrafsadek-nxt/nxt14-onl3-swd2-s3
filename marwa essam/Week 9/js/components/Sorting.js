// Sorting Component
const Sorting = ({ sortBy, onSortChange }) => {
    return (
        <div className="sort-section">
            <h5><i className="fas fa-sort me-2"></i>Sort By</h5>
            <select 
                className="form-select"
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value)}
            >
                <option value="name">Name (A-Z)</option>
                <option value="name-desc">Name (Z-A)</option>
                <option value="price-low">Price (Low to High)</option>
                <option value="price-high">Price (High to Low)</option>
                <option value="rating">Rating (High to Low)</option>
                <option value="category">Category</option>
            </select>
        </div>
    );
};