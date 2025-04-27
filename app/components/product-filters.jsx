import { ALL_COLORS } from "../../data/colors";

const ProductFilters = ({
  finalFilters,
  finalProducts,
  ALL_CATEGORIES_AND_FILTERS,
  colors,
  status,
}) => {
  let filtered = [...finalProducts];
  console.log(filtered)

  const selectedCategory = (categoryName) =>
    ALL_CATEGORIES_AND_FILTERS.find((prev) => prev.category === categoryName)
      ?.filters || [];

  const filterByCategory = (products, filters, predicate) =>
    products.filter((product) =>
      filters.some((filter) => predicate(product, filter))
    );

  const hasSelectedFilters = (filters) => filters.length > 0;

  // SIZE
  const selectedSizeFilters = finalFilters.filter((filter) =>
    selectedCategory("Size").includes(filter)
  );

  if (hasSelectedFilters(selectedSizeFilters)) {
    filtered = filterByCategory(
      filtered,
      selectedSizeFilters,
      (product, size) => product.size.includes(size)
    );
    return filtered;
  }

  // PRICE
  const selectedPriceFilters = finalFilters.filter((filter) =>
    selectedCategory("Price").some(
      (priceFilter) =>
        filter.min === priceFilter.min && filter.max === priceFilter.max
    )
  );

  if (hasSelectedFilters(selectedPriceFilters)) {
    filtered = filterByCategory(
      filtered,
      selectedPriceFilters,
      (product, price) =>
        product.price >= price.min && product.price <= price.max
    );
    return filtered;
  }

  // CATEGORY
  const selectedCategoriesFilter = finalFilters.filter((filter) =>
    selectedCategory("Categories").includes(filter)
  );

  if (hasSelectedFilters(selectedCategoriesFilter)) {
    filtered = filterByCategory(
      filtered,
      selectedCategoriesFilter,
      (product, category) => product.status.includes(category)
    );
    return filtered;
  }

  // COLOR
  const selectedColorFilters = finalFilters
    .map((filter) =>
      typeof filter === "string" ? filter.toLowerCase() : filter
    )
    .filter((filter) => ALL_COLORS.includes(filter));

  if (hasSelectedFilters(selectedColorFilters)) {
    filtered = filtered.filter((product) =>
      colors.some(
        (colorObj) =>
          colorObj.productId === product.id &&
          selectedColorFilters.includes(colorObj.colorName.toLowerCase())
      )
    );
    return filtered;
  }

  // STATUS
  if (status !== "All Products") {
    filtered = filtered.filter((product) => product.status === status);
    return filtered;
  }

  return filtered;
};

export default ProductFilters;