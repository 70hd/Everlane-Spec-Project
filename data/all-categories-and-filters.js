export const ALL_CATEGORIES_AND_FILTERS = [
    {
      category: "Categories",
      filters: [
        "New Arrival",
        "Limited Availability",
        "Best Seller",
        "Best Seller",
        "On Sale",
        "Exclusive",
      ],
      selection: "multiSelection",
      type: "checkbox",
    },
    {
      category: "Colors",
      filters: [
        "Black",
        "Blue",
        "Brown",
        "Gold",
        "Green",
        "Orange",
        "Pink",
        "White",
      ],
      selection: "multiSelection",
      type: "color",
    },
    {
      category: "Price",
      filters: [
        {
          text: "Under $50",
          min: 0,
          max: 49.99,
        },
        {
          text: "$50-$100",
          min: 50,
          max: 100,
        },
        {
          text: "Over $100",
          min: 100.01,
          max: Infinity,
        },
      ],
      selection: "singleSelection",
      type: "checkbox",
    },
    {
      category: "Size",
      filters: ["S", "M", "L", "XL"],
      selection: "singleSelection",
      type: "checkbox",
    },
  ];