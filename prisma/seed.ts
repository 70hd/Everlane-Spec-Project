// import { PrismaClient } from "@prisma/client";

// const database = new PrismaClient();

// async function Main() {
//     await database.product.createMany({
//         data: [
//           // Product 1
//           {
//             status: "Limited Availability",
//             title: "The Crew in Cotton Cashmere",
//             price: 280,
//             description: "Lightweight and versatile, this vest is perfect for men on-the-go.",
//             size: ["S", "M", "L"],
//             // quantity: 1,
//             productCare: "Wash cold with similar colors, use gentle cycle, and lay flat to dry. Cool iron if needed.",
//             productDetails: "Made from a soft cotton-cashmere blend, this vest offers comfort and style for all seasons.",
//             images: [
//               "https://us.sunspel.com/cdn/shop/files/mpol8204-bkaa-1.jpg?v=1739884087&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/mpol8204-bkaa-2.jpg?v=1739884088&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/mpol8204-bkaa-5.jpg?v=1739884088&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/mpol8204-bkaa-6.jpg?v=1739884088&width=2160",
//             ],
//           },
//           // Product 2
//           {
//             status: "New Arrival",
//             title: "The Luxe Wool Jacket",
//             price: 450,
//             description: "A premium wool jacket that combines classic style with modern comfort.",
//             size: ["S", "M", "L"],
//             // quantity: 1,
//             productCare: "Dry clean only.",
//             productDetails: "Crafted from a luxurious wool blend, this jacket is perfect for formal and casual occasions.",
//             images: [
//               "https://us.sunspel.com/cdn/shop/products/mjac7091-bkaa-1.jpg?v=1688119404&width=2160",
//               "https://us.sunspel.com/cdn/shop/products/mjac7091-bkaa-2.jpg?v=1688119404&width=2160",
//               "https://us.sunspel.com/cdn/shop/products/mjac7091-bkaa-4.jpg?v=1688119404&width=2160",
//               "https://us.sunspel.com/cdn/shop/products/mjac7091-bkaa-5.jpg?v=1688119404&width=2160",
//             ],
//           },
//           // Product 3
//           {
//             status: "On Sale",
//             title: "Relaxed Loopback Hoodie",
//             price: 120,
//             description: "A relaxed-fit overhead hoodie made from our ultra soft signature cotton loopback fabric. A dropped shoulder, ribbed hem and cuffs and classic patch pocket make this a contemporary wardrobe staple. Pair with matching trackpants as part of the track set.",
//             size: ["S", "M", "L"],
//             // quantity: 1,
//             productCare: "Spot clean with a damp cloth.",
//             productDetails: "Made from rugged material, this backpack can withstand the toughest conditions.",
//             images: [
//               "https://us.sunspel.com/cdn/shop/products/mjac7091-bkaa-5.jpg?v=1688119404&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wswe1533-bkaa-2_9e034fb4-9703-44f6-b06e-d616b663f6a1.jpg?v=1739883990&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wswe1533-bkaa-3_e35fb2c7-cfb6-47c6-8972-c3eff984e89f.jpg?v=1739883991&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wswe1533-bkaa-4_bb989923-80f1-4730-8ebe-5056824e8030.jpg?v=1739883990&width=2160",
//             ],
//           },
//           // Product 4
//           {
//             status: "Best Seller",
//             title: "Oxford Shirt",
//             price: 150,
//             description: "The perfect everyday shirt with a clean, pared back style, ideal for work or the weekend. The Italian woven Oxford cotton is fabric washed for an extra soft handle and casual look. Fits true to size. Wear with classic chinos for a smart-casual look, or dress down with denim.",
//             size: ["S", "M", "L"],
//             // quantity: 1,
//             productCare: "Wipe with a damp cloth to clean.",
//             productDetails: "These sneakers combine fashion and function, perfect for walking or running.",
//             images: [
//               "https://us.sunspel.com/cdn/shop/files/msht2057-whaa-1_c9ef978e-379c-4531-b0fa-ad1bcd8eeb1c.jpg?v=1739884074&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/msht2057-whaa-2_014a9e98-1db9-47a8-a2e6-77f9e7621eee.jpg?v=1739884074&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/msht2057-whaa-5_8ef644f5-42e1-4ee9-b0a0-5b957dbcb7ad.jpg?v=1739884074&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/msht2057-whaa-4_04f4835a-da33-49ca-8e7a-c98ed4bcfa9a.jpg?v=1739884074&width=2160",
//             ],
//           },
//           // Product 5
//           {
//             status: "Limited Availability",
//             title: "The Eco-Friendly T-shirt",
//             price: 60,
//             description: "A sustainable cotton T-shirt that's soft and comfortable.",
//             size: ["S", "M", "L"],
//             // quantity: 1,
//             productCare: "Wash cold and tumble dry low.",
//             productDetails: "Made with organic cotton, this T-shirt is designed for eco-conscious buyers.",
//             images: [
//               "https://us.sunspel.com/cdn/shop/files/mpol1026-bkaa-1.jpg?v=1739884062&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/mpol1026-bkaa-2_cf9f36ae-bff4-4c52-b3dc-fcb91b2d6c05.jpg?v=1739884062&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/mpol1026-bkaa-5_4d27e829-30fb-4caa-824d-76f697783bee.jpg?v=1739884062&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/mpol1026-bkaa-4_c5cebc38-d27b-4116-8c8d-8e3d448e4859.jpg?v=1739884062&width=2160",
//             ],
//           },
//           {
//             status: "On Sale",
//             title: "British Wool Coat",
//             price: 250,
//             description: "A warm and easy-to-wear, single-breasted wool herringbone coat. Woven in England by Marling and Evans using undyed British wool, this timeless coat has a classic fit and a mid-length. It has horn button fastening, back vent detailing and slanted side pockets. Fully lined, it is a perfect winter coat and pairs beautifully with our Luxurious Cashmere Jumper.",
//             size: ["S", "M", "L"],
//             // quantity: 1,
//             productCare: "Clean with a damp cloth and store in a cool place.",
//             productDetails: "Made from premium leather, this belt will last for years.",
//             images: [
//               "https://us.sunspel.com/cdn/shop/files/wcoa7314u-brel-1.jpg?v=1739884006&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wcoa7314u-brel-3.jpg?v=1739884006&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wcoa7314u-brel-4.jpg?v=1739884007&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wcoa7314u-brel-2.jpg?v=1739884006&width=2160",
//             ],
//           },
//           // Product 6
//           {
//             status: "On Sale",
//             title: "The Classic Leather Belt",
//             price: 250,
//             description: "A smartwatch with fitness tracking and notifications.",
//             size: ["S", "M", "L"],
//             // quantity: 1,
//             productCare: "Clean with a damp cloth.",
//             productDetails: "Stay connected and track your fitness with this versatile smartwatch.",
//             images: [
//               "https://us.sunspel.com/cdn/shop/files/mbel9336-brab-1.jpg?v=1739884004&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/mbel9336-brab-2_ac32e358-d304-4697-b510-9366086b68e8.jpg?v=1739884004&width=2160",
//             ],
//           },
//           // Product 7
//           // {
//           //   status: "New Arrival",
//           //   title: "The Classic Leather Belt",
//           //   price: 45,
//           //   description: "A timeless leather belt that adds a touch of class to any outfit.",
//           //   size: ["S", "M", "L"],
//           //   quantity: 1,
//           //   productCare: "Clean with a damp cloth and store in a cool place.",
//           //   productDetails: "Made from premium leather, this belt will last for years.",
//           //   images: [
//           //     "https://us.sunspel.com/cdn/shop/files/mjac8265-buaa-1.jpg?v=1739884078&width=2160",
//           //     "https://us.sunspel.com/cdn/shop/files/mjac8265-buaa-2.jpg?v=1739884078&width=2160",
//           //     "https://us.sunspel.com/cdn/shop/files/mjac8265-buaa-5.jpg?v=1739884078&width=2160",
//           //     "https://us.sunspel.com/cdn/shop/files/mjac8265-buaa-4.jpg?v=1739884078&width=2160",
//           //   ],
//           // },
//           // Product 8
//           {
//             status: "Best Seller",
//             title: "The Lightweight Bomber Jacket",
//             price: 200,
//             description: "A stylish and lightweight bomber jacket perfect for all seasons.",
//             size: ["S", "M", "L"],
//             // quantity: 1,
//             productCare: "Dry clean only.",
//             productDetails: "Crafted from high-quality fabric, this bomber jacket is a versatile addition to your wardrobe.",
//             images: [
//               "https://us.sunspel.com/cdn/shop/files/wtop8139-gngx-3.jpg?v=1739883971&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wtop8139-gngx-1.jpg?v=1739883971&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wtop8139-gngx-4.jpg?v=1739883971&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wtop8139-gngx-2.jpg?v=1739883971&width=2160",
//             ],
//           },
//           // Product 9
//           {
//             status: "Limited Availability",
//             title: "Mulberry Silk Mock Neck Top",
//             price: 120,
//             description: "This short sleeve mock neck top is crafted from a beautifully smooth pure Italian-spun mulberry silk. It has elevated proportions with a neat fit and subtly elongated sleeves for an understated, feminine look. Exceptionally comfortable on the skin, it is a versatile everyday piece that can be worn as elegant evening wear too.",
//             size: ["S", "M", "L"],
//             // quantity: 1,
//             productCare: "Spot clean with a damp cloth.",
//             productDetails: "Perfect for weekend trips, this duffel bag is both stylish and functional.",
//             images: [
//               "https://us.sunspel.com/cdn/shop/files/wtop8227-whcr-1_b656cf34-6332-40a8-a27d-908ba40140a5.jpg?v=1739884016&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wtop8227-whcr-2_ca7b00b1-c5fc-4313-b584-0bd5baf93e9b.jpg?v=1739884016&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wtop8139-gngx-4.jpg?v=1739883971&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wtop8139-gngx-2.jpg?v=1739883971&width=2160",
//             ],
//           },
//           // Product 10
//           {
//             status: "On Sale",
//             title: "Chunky Cotton Stitch Vest",
//             price: 180,
//             description: "An open-knit vest crafted in Italian-spun organic cotton. Inspired by mesh stitches from our archive, the tubular yarn gives it a substantial yet lightweight feel. With a regular fit, it can be worn on its own or as a light, effortless layer.",
//             size: ["S", "M", "L"],
//             // quantity: 1,
//             productCare: "Clean with a damp cloth and air dry.",
//             productDetails: "These boots are built to last, with reinforced soles for tough terrain.",
//             images: [
//               "https://us.sunspel.com/cdn/shop/files/wtop8227-whcr-1_b656cf34-6332-40a8-a27d-908ba40140a5.jpg?v=1739884016&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wtop8227-whcr-2_ca7b00b1-c5fc-4313-b584-0bd5baf93e9b.jpg?v=1739884016&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wtop8227-whcr-3_47945841-364a-42b4-9566-f7086b030ef3.jpg?v=1739884016&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wtop8227-whcr-4_16584431-a4f6-4068-a7bb-cc452e9d3194.jpg?v=1739884016&width=2160",
//             ],
//           },
//           // Product 11
//           {
//             status: "New Arrival",
//             title: "The Casual Polo Shirt",
//             price: 80,
//             description: "Perfect for summer days, this breathable polo shirt adds a polished touch to casual looks.",
//             size: ["S", "M", "L"],
//             // quantity: 1,
//             productCare: "Machine wash cold, tumble dry low.",
//             productDetails: "Made from high-quality cotton, this polo shirt offers both comfort and style.",
//             images: [
//               "https://us.sunspel.com/cdn/shop/files/mtsh0181-bkaa-1.jpg?v=1720096619",
//               "https://us.sunspel.com/cdn/shop/files/mtsh0181-bkaa-3.jpg?v=1739884007&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/mtsh0181-bkaa-5.jpg?v=1739884007&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/mtsh0181-bkaa-6.jpg?v=1739884007&width=2160",
//             ],
//           },
//           // Product 12
//           {
//             status: "Best Seller",
//             title: "The Classic Wool Scarf",
//             price: 55,
//             description: "Soft and warm, this wool scarf is a must-have accessory for the colder months.",
//             size: ["S", "M", "L"],
//             // quantity: 1,
//             productCare: "Dry clean only.",
//             productDetails: "Made from 100% wool, this scarf will keep you warm and stylish all winter long.",
//             images: [
//               "https://us.sunspel.com/cdn/shop/files/asca9467-bkaa-1.jpg?v=1739884042&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/asca9467-bkaa-2.jpg?v=1739884042&width=2160",
//             ],
//           },
//           // Product 13
//           {
//             status: "Limited Availability",
//             title: "Mulberry Silk Rib Vest Jumper",
//             price: 70,
//             description: "Crafted from a pure Italian-spun mulberry silk ribbed knit, this sleeveless vest jumper has a lean body fit and is beautifully smooth against the skin. With a grown-on mock neck and clean edges, it is perfect for day to evening wear. Pair with a wide leg pleated trouser.",
//             size: ["S", "M", "L"],
//             // quantity: 1,
//             productCare: "Wipe with a damp cloth.",
//             productDetails: "These canvas sneakers are perfect for everyday wear and come in a range of colors.",
//             images: [
//               "https://us.sunspel.com/cdn/shop/files/wjum8178-buud-2.jpg?v=1739884001&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wjum8178-buud-1.jpg?v=1739884001&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wjum8178-buud-3.jpg?v=1739884001&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wjum8178-buud-3.jpg?v=1739884001&width=2160",
//             ],
//           },
//           // Product 14
//           {
//             status: "On Sale",
//             title: "Stretch Cotton Scoop Top",
//             price: 130,
//             description: "An elegant scoop-neck top crafted in a cotton jersey with a slight stretch for added comfort. With a slim fit, it is versatile and contemporary, transitioning seamlessly between day and evening.",
//             size: ["S", "M", "L"],
//             // quantity: 1,
//             productCare: "Machine wash cold, tumble dry low.",
//             productDetails: "Made from high-performance fabric, this vest is lightweight yet durable.",
//             images: [
//               "https://us.sunspel.com/cdn/shop/files/wtop2507-whaa-1_00422d2a-6f77-4ddd-9079-e2e5e8dc003d.jpg?v=1739884019&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wtop2507-whaa-2_9257b92b-5a40-4fc5-aac3-ae642929d994.jpg?v=1739884019&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wtop2507-whaa-3_8f716aaa-cd08-4d09-ad79-77804d65db4b.jpg?v=1739884019&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wtop2507-whaa-4_714d46ab-42a3-448b-96e3-212dfe7cf548.jpg?v=1739884019&width=2160",
//             ],
//           },
//           // Product 15
//           {
//             status: "Best Seller",
//             title: "Trench Coat",
//             price: 140,
//             description: "A luxurious double breasted trench coat crafted in an Italian water-repellent cotton fabric which is exceptionally lightweight with a beautifully soft, smooth touch. Has button fastening, a belted waist, raglan shoulders and deep pocket detailing. An ideal, timeless, everyday outer layer.",
//             size: ["S", "M", "L"],
//             // quantity: 1,
//             productCare: "Wipe with a soft cloth to clean.",
//             productDetails: "These sunglasses offer both protection and a bold fashion statement.",
//             images: [
//               "https://us.sunspel.com/cdn/shop/files/wcoa7316-whdc-1.jpg?v=1739883971&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wcoa7316-whdc-3.jpg?v=1739883971&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wcoa7316-whdc-4.jpg?v=1739883972&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wcoa7316-whdc-4.jpg?v=1739883972&width=2160",
//             ],
//           },
//         ],
//       });
//   await database.color.createMany({
//   data: [
//     // Colors for "The Crew in Cotton Cashmere"
//     { colorHex: "#D2B48C", colorName: "Tan", productId: 1 },
//     { colorHex: "#8B0000", colorName: "Dark Red", productId: 1 },
//     { colorHex: "#FFD700", colorName: "Gold", productId: 1 },
//     { colorHex: "#00008B", colorName: "Dark Blue", productId: 1 },
//     { colorHex: "#32CD32", colorName: "Lime Green", productId: 1 },
//     { colorHex: "#FF4500", colorName: "Orange Red", productId: 1 },
//     { colorHex: "#8A2BE2", colorName: "Blue Violet", productId: 1 },

//     // Colors for "The Luxe Wool Jacket"
//     { colorHex: "#000000", colorName: "Black", productId: 2 },
//     { colorHex: "#A9A9A9", colorName: "Gray", productId: 2 },
//     { colorHex: "#8B4513", colorName: "Saddle Brown", productId: 2 },

//     // Colors for "The Adventure Backpack"
//     { colorHex: "#228B22", colorName: "Forest Green", productId: 3 },
//     { colorHex: "#8B0000", colorName: "Burgundy", productId: 3 },
//     { colorHex: "#C0C0C0", colorName: "Silver", productId: 3 },

//     // Colors for "The Urban Sneakers"
//     { colorHex: "#FFFFFF", colorName: "White", productId: 4 },
//     { colorHex: "#000000", colorName: "Black", productId: 4 },
//     { colorHex: "#D3D3D3", colorName: "Light Gray", productId: 4 },
//     { colorHex: "#FFD700", colorName: "Gold", productId: 4 },

//     // Colors for "The Eco-Friendly T-shirt"
//     { colorHex: "#228B22", colorName: "Green", productId: 5 },
//     { colorHex: "#FF6347", colorName: "Tomato", productId: 5 },
//     { colorHex: "#FFFFFF", colorName: "White", productId: 5 },

//     // Colors for "The Smart Watch"
//     { colorHex: "#000000", colorName: "Black", productId: 6 },
//     { colorHex: "#808080", colorName: "Gray", productId: 6 },
//     { colorHex: "#0000FF", colorName: "Blue", productId: 6 },

//     // Colors for "The Classic Leather Belt"
//     { colorHex: "#8B4513", colorName: "Brown", productId: 7 },
//     { colorHex: "#000000", colorName: "Black", productId: 7 },

//     // Colors for "The Lightweight Bomber Jacket"
//     { colorHex: "#FFD700", colorName: "Gold", productId: 8 },
//     { colorHex: "#000000", colorName: "Black", productId: 8 },
//     { colorHex: "#D3D3D3", colorName: "Light Gray", productId: 8 },

//     // Colors for "The Travel Duffel Bag"
//     { colorHex: "#8B4513", colorName: "Brown", productId: 9 },
//     { colorHex: "#A9A9A9", colorName: "Gray", productId: 9 },
//     { colorHex: "#000000", colorName: "Black", productId: 9 },

//     // Colors for "The Outdoor Hiking Boots"
//     { colorHex: "#8B4513", colorName: "Brown", productId: 10 },
//     { colorHex: "#000000", colorName: "Black", productId: 10 },
//     { colorHex: "#A9A9A9", colorName: "Gray", productId: 10 },

//     // Colors for "The Casual Polo Shirt"
//     { colorHex: "#FFFFFF", colorName: "White", productId: 11 },
//     { colorHex: "#000000", colorName: "Black", productId: 11 },
//     { colorHex: "#808080", colorName: "Gray", productId: 11 },

//     // Colors for "The Classic Wool Scarf"
//     { colorHex: "#800000", colorName: "Maroon", productId: 12 },
//     { colorHex: "#A9A9A9", colorName: "Gray", productId: 12 },
//     { colorHex: "#FFFFFF", colorName: "White", productId: 12 },

//     // Colors for "The Canvas Sneakers"
//     { colorHex: "#FFFFFF", colorName: "White", productId: 13 },
//     { colorHex: "#000000", colorName: "Black", productId: 13 },
//     { colorHex: "#A9A9A9", colorName: "Gray", productId: 13 },

//     // Colors for "The Adventure Vest"
//     { colorHex: "#006400", colorName: "Dark Green", productId: 14 },
//     { colorHex: "#A9A9A9", colorName: "Gray", productId: 14 },
//     { colorHex: "#000000", colorName: "Black", productId: 14 },

//     // Colors for "The Statement Sunglasses"
//     { colorHex: "#000000", colorName: "Black", productId: 15 },
//     { colorHex: "#A9A9A9", colorName: "Gray", productId: 15 },
//     { colorHex: "#FFFFFF", colorName: "White", productId: 15 },
//   ],
// });
// console.log("success")
// }

// Main()
//   .catch((e) => {
//     console.error(e);
//   })
//   .finally(async () => {
//     await database.$disconnect();
//   });

import { PrismaClient } from "@prisma/client";

const database = new PrismaClient();

async function Main() {
//     await database.product.createMany({
//         data: [
//           // Product 1
//           {
//             status: "Limited Availability",
//             title: "The Crew in Cotton Cashmere",
//             price: 280,
//             description: "Lightweight and versatile, this vest is perfect for men on-the-go.",
//             size: ["S", "M", "L"],
//             quantity: 1,
//             productCare: "Wash cold with similar colors, use gentle cycle, and lay flat to dry. Cool iron if needed.",
//             productDetails: "Made from a soft cotton-cashmere blend, this vest offers comfort and style for all seasons.",
//             images: [
//               "https://us.sunspel.com/cdn/shop/files/mpol8204-bkaa-1.jpg?v=1739884087&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/mpol8204-bkaa-2.jpg?v=1739884088&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/mpol8204-bkaa-5.jpg?v=1739884088&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/mpol8204-bkaa-6.jpg?v=1739884088&width=2160",
//             ],
//           },
//           // Product 2
//           {
//             status: "New Arrival",
//             title: "The Luxe Wool Jacket",
//             price: 450,
//             description: "A premium wool jacket that combines classic style with modern comfort.",
//             size: ["S", "M", "L"],
//             quantity: 1,
//             productCare: "Dry clean only.",
//             productDetails: "Crafted from a luxurious wool blend, this jacket is perfect for formal and casual occasions.",
//             images: [
//               "https://us.sunspel.com/cdn/shop/products/mjac7091-bkaa-1.jpg?v=1688119404&width=2160",
//               "https://us.sunspel.com/cdn/shop/products/mjac7091-bkaa-2.jpg?v=1688119404&width=2160",
//               "https://us.sunspel.com/cdn/shop/products/mjac7091-bkaa-4.jpg?v=1688119404&width=2160",
//               "https://us.sunspel.com/cdn/shop/products/mjac7091-bkaa-5.jpg?v=1688119404&width=2160",
//             ],
//           },
//           // Product 3
//           {
//             status: "On Sale",
//             title: "Relaxed Loopback Hoodie",
//             price: 120,
//             description: "A relaxed-fit overhead hoodie made from our ultra soft signature cotton loopback fabric. A dropped shoulder, ribbed hem and cuffs and classic patch pocket make this a contemporary wardrobe staple. Pair with matching trackpants as part of the track set.",
//             size: ["S", "M", "L"],
//             quantity: 1,
//             productCare: "Spot clean with a damp cloth.",
//             productDetails: "Made from rugged material, this backpack can withstand the toughest conditions.",
//             images: [
//               "https://us.sunspel.com/cdn/shop/products/mjac7091-bkaa-5.jpg?v=1688119404&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wswe1533-bkaa-2_9e034fb4-9703-44f6-b06e-d616b663f6a1.jpg?v=1739883990&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wswe1533-bkaa-3_e35fb2c7-cfb6-47c6-8972-c3eff984e89f.jpg?v=1739883991&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wswe1533-bkaa-4_bb989923-80f1-4730-8ebe-5056824e8030.jpg?v=1739883990&width=2160",
//             ],
//           },
//           // Product 4
//           {
//             status: "Best Seller",
//             title: "Oxford Shirt",
//             price: 150,
//             description: "The perfect everyday shirt with a clean, pared back style, ideal for work or the weekend. The Italian woven Oxford cotton is fabric washed for an extra soft handle and casual look. Fits true to size. Wear with classic chinos for a smart-casual look, or dress down with denim.",
//             size: ["S", "M", "L"],
//             quantity: 1,
//             productCare: "Wipe with a damp cloth to clean.",
//             productDetails: "These sneakers combine fashion and function, perfect for walking or running.",
//             images: [
//               "https://us.sunspel.com/cdn/shop/files/msht2057-whaa-1_c9ef978e-379c-4531-b0fa-ad1bcd8eeb1c.jpg?v=1739884074&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/msht2057-whaa-2_014a9e98-1db9-47a8-a2e6-77f9e7621eee.jpg?v=1739884074&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/msht2057-whaa-5_8ef644f5-42e1-4ee9-b0a0-5b957dbcb7ad.jpg?v=1739884074&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/msht2057-whaa-4_04f4835a-da33-49ca-8e7a-c98ed4bcfa9a.jpg?v=1739884074&width=2160",
//             ],
//           },
//           // Product 5
//           {
//             status: "Limited Availability",
//             title: "The Eco-Friendly T-shirt",
//             price: 60,
//             description: "A sustainable cotton T-shirt that's soft and comfortable.",
//             size: ["S", "M", "L"],
//             quantity: 1,
//             productCare: "Wash cold and tumble dry low.",
//             productDetails: "Made with organic cotton, this T-shirt is designed for eco-conscious buyers.",
//             images: [
//               "https://us.sunspel.com/cdn/shop/files/mpol1026-bkaa-1.jpg?v=1739884062&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/mpol1026-bkaa-2_cf9f36ae-bff4-4c52-b3dc-fcb91b2d6c05.jpg?v=1739884062&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/mpol1026-bkaa-5_4d27e829-30fb-4caa-824d-76f697783bee.jpg?v=1739884062&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/mpol1026-bkaa-4_c5cebc38-d27b-4116-8c8d-8e3d448e4859.jpg?v=1739884062&width=2160",
//             ],
//           },
//           {
//             status: "On Sale",
//             title: "British Wool Coat",
//             price: 250,
//             description: "A warm and easy-to-wear, single-breasted wool herringbone coat. Woven in England by Marling and Evans using undyed British wool, this timeless coat has a classic fit and a mid-length. It has horn button fastening, back vent detailing and slanted side pockets. Fully lined, it is a perfect winter coat and pairs beautifully with our Luxurious Cashmere Jumper.",
//             size: ["S", "M", "L"],
//             quantity: 1,
//             productCare: "Clean with a damp cloth and store in a cool place.",
//             productDetails: "Made from premium leather, this belt will last for years.",
//             images: [
//               "https://us.sunspel.com/cdn/shop/files/wcoa7314u-brel-1.jpg?v=1739884006&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wcoa7314u-brel-3.jpg?v=1739884006&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wcoa7314u-brel-4.jpg?v=1739884007&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wcoa7314u-brel-2.jpg?v=1739884006&width=2160",
//             ],
//           },
//           // Product 6
//           {
//             status: "On Sale",
//             title: "The Classic Leather Belt",
//             price: 250,
//             description: "A smartwatch with fitness tracking and notifications.",
//             size: ["S", "M", "L"],
//             quantity: 1,
//             productCare: "Clean with a damp cloth.",
//             productDetails: "Stay connected and track your fitness with this versatile smartwatch.",
//             images: [
//               "https://us.sunspel.com/cdn/shop/files/mbel9336-brab-1.jpg?v=1739884004&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/mbel9336-brab-2_ac32e358-d304-4697-b510-9366086b68e8.jpg?v=1739884004&width=2160",
//             ],
//           },
//           // Product 7
//           // {
//           //   status: "New Arrival",
//           //   title: "The Classic Leather Belt",
//           //   price: 45,
//           //   description: "A timeless leather belt that adds a touch of class to any outfit.",
//           //   size: ["S", "M", "L"],
//           //   quantity: 1,
//           //   productCare: "Clean with a damp cloth and store in a cool place.",
//           //   productDetails: "Made from premium leather, this belt will last for years.",
//           //   images: [
//           //     "https://us.sunspel.com/cdn/shop/files/mjac8265-buaa-1.jpg?v=1739884078&width=2160",
//           //     "https://us.sunspel.com/cdn/shop/files/mjac8265-buaa-2.jpg?v=1739884078&width=2160",
//           //     "https://us.sunspel.com/cdn/shop/files/mjac8265-buaa-5.jpg?v=1739884078&width=2160",
//           //     "https://us.sunspel.com/cdn/shop/files/mjac8265-buaa-4.jpg?v=1739884078&width=2160",
//           //   ],
//           // },
//           // Product 8
//           {
//             status: "Best Seller",
//             title: "The Lightweight Bomber Jacket",
//             price: 200,
//             description: "A stylish and lightweight bomber jacket perfect for all seasons.",
//             size: ["S", "M", "L"],
//             quantity: 1,
//             productCare: "Dry clean only.",
//             productDetails: "Crafted from high-quality fabric, this bomber jacket is a versatile addition to your wardrobe.",
//             images: [
//               "https://us.sunspel.com/cdn/shop/files/wtop8139-gngx-3.jpg?v=1739883971&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wtop8139-gngx-1.jpg?v=1739883971&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wtop8139-gngx-4.jpg?v=1739883971&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wtop8139-gngx-2.jpg?v=1739883971&width=2160",
//             ],
//           },
//           // Product 9
//           {
//             status: "Limited Availability",
//             title: "Mulberry Silk Mock Neck Top",
//             price: 120,
//             description: "This short sleeve mock neck top is crafted from a beautifully smooth pure Italian-spun mulberry silk. It has elevated proportions with a neat fit and subtly elongated sleeves for an understated, feminine look. Exceptionally comfortable on the skin, it is a versatile everyday piece that can be worn as elegant evening wear too.",
//             size: ["S", "M", "L"],
//             quantity: 1,
//             productCare: "Spot clean with a damp cloth.",
//             productDetails: "Perfect for weekend trips, this duffel bag is both stylish and functional.",
//             images: [
//               "https://us.sunspel.com/cdn/shop/files/wtop8227-whcr-1_b656cf34-6332-40a8-a27d-908ba40140a5.jpg?v=1739884016&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wtop8227-whcr-2_ca7b00b1-c5fc-4313-b584-0bd5baf93e9b.jpg?v=1739884016&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wtop8139-gngx-4.jpg?v=1739883971&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wtop8139-gngx-2.jpg?v=1739883971&width=2160",
//             ],
//           },
//           // Product 10
//           {
//             status: "On Sale",
//             title: "Chunky Cotton Stitch Vest",
//             price: 180,
//             description: "An open-knit vest crafted in Italian-spun organic cotton. Inspired by mesh stitches from our archive, the tubular yarn gives it a substantial yet lightweight feel. With a regular fit, it can be worn on its own or as a light, effortless layer.",
//             size: ["S", "M", "L"],
//             quantity: 1,
//             productCare: "Clean with a damp cloth and air dry.",
//             productDetails: "These boots are built to last, with reinforced soles for tough terrain.",
//             images: [
//               "https://us.sunspel.com/cdn/shop/files/wtop8227-whcr-1_b656cf34-6332-40a8-a27d-908ba40140a5.jpg?v=1739884016&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wtop8227-whcr-2_ca7b00b1-c5fc-4313-b584-0bd5baf93e9b.jpg?v=1739884016&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wtop8227-whcr-3_47945841-364a-42b4-9566-f7086b030ef3.jpg?v=1739884016&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wtop8227-whcr-4_16584431-a4f6-4068-a7bb-cc452e9d3194.jpg?v=1739884016&width=2160",
//             ],
//           },
//           // Product 11
//           {
//             status: "New Arrival",
//             title: "The Casual Polo Shirt",
//             price: 80,
//             description: "Perfect for summer days, this breathable polo shirt adds a polished touch to casual looks.",
//             size: ["S", "M", "L"],
//             quantity: 1,
//             productCare: "Machine wash cold, tumble dry low.",
//             productDetails: "Made from high-quality cotton, this polo shirt offers both comfort and style.",
//             images: [
//               "https://us.sunspel.com/cdn/shop/files/mtsh0181-bkaa-1.jpg?v=1720096619",
//               "https://us.sunspel.com/cdn/shop/files/mtsh0181-bkaa-3.jpg?v=1739884007&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/mtsh0181-bkaa-5.jpg?v=1739884007&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/mtsh0181-bkaa-6.jpg?v=1739884007&width=2160",
//             ],
//           },
//           // Product 12
//           {
//             status: "Best Seller",
//             title: "The Classic Wool Scarf",
//             price: 55,
//             description: "Soft and warm, this wool scarf is a must-have accessory for the colder months.",
//             size: ["S", "M", "L"],
//             quantity: 1,
//             productCare: "Dry clean only.",
//             productDetails: "Made from 100% wool, this scarf will keep you warm and stylish all winter long.",
//             images: [
//               "https://us.sunspel.com/cdn/shop/files/asca9467-bkaa-1.jpg?v=1739884042&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/asca9467-bkaa-2.jpg?v=1739884042&width=2160",
//             ],
//           },
//           // Product 13
//           {
//             status: "Limited Availability",
//             title: "Mulberry Silk Rib Vest Jumper",
//             price: 70,
//             description: "Crafted from a pure Italian-spun mulberry silk ribbed knit, this sleeveless vest jumper has a lean body fit and is beautifully smooth against the skin. With a grown-on mock neck and clean edges, it is perfect for day to evening wear. Pair with a wide leg pleated trouser.",
//             size: ["S", "M", "L"],
//             quantity: 1,
//             productCare: "Wipe with a damp cloth.",
//             productDetails: "These canvas sneakers are perfect for everyday wear and come in a range of colors.",
//             images: [
//               "https://us.sunspel.com/cdn/shop/files/wjum8178-buud-2.jpg?v=1739884001&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wjum8178-buud-1.jpg?v=1739884001&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wjum8178-buud-3.jpg?v=1739884001&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wjum8178-buud-3.jpg?v=1739884001&width=2160",
//             ],
//           },
//           // Product 14
//           {
//             status: "On Sale",
//             title: "Stretch Cotton Scoop Top",
//             price: 130,
//             description: "An elegant scoop-neck top crafted in a cotton jersey with a slight stretch for added comfort. With a slim fit, it is versatile and contemporary, transitioning seamlessly between day and evening.",
//             size: ["S", "M", "L"],
//             quantity: 1,
//             productCare: "Machine wash cold, tumble dry low.",
//             productDetails: "Made from high-performance fabric, this vest is lightweight yet durable.",
//             images: [
//               "https://us.sunspel.com/cdn/shop/files/wtop2507-whaa-1_00422d2a-6f77-4ddd-9079-e2e5e8dc003d.jpg?v=1739884019&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wtop2507-whaa-2_9257b92b-5a40-4fc5-aac3-ae642929d994.jpg?v=1739884019&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wtop2507-whaa-3_8f716aaa-cd08-4d09-ad79-77804d65db4b.jpg?v=1739884019&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wtop2507-whaa-4_714d46ab-42a3-448b-96e3-212dfe7cf548.jpg?v=1739884019&width=2160",
//             ],
//           },
//           // Product 15
//           {
//             status: "Best Seller",
//             title: "Trench Coat",
//             price: 140,
//             description: "A luxurious double breasted trench coat crafted in an Italian water-repellent cotton fabric which is exceptionally lightweight with a beautifully soft, smooth touch. Has button fastening, a belted waist, raglan shoulders and deep pocket detailing. An ideal, timeless, everyday outer layer.",
//             size: ["S", "M", "L"],
//             quantity: 1,
//             productCare: "Wipe with a soft cloth to clean.",
//             productDetails: "These sunglasses offer both protection and a bold fashion statement.",
//             images: [
//               "https://us.sunspel.com/cdn/shop/files/wcoa7316-whdc-1.jpg?v=1739883971&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wcoa7316-whdc-3.jpg?v=1739883971&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wcoa7316-whdc-4.jpg?v=1739883972&width=2160",
//               "https://us.sunspel.com/cdn/shop/files/wcoa7316-whdc-4.jpg?v=1739883972&width=2160",
//             ],
//           },
//         ],
//       });
    await database.faq.createMany({
        data: [
          {
            question: "How do I determine the right size for me?",
            answer: "Each product page includes a detailed size chart in both inches and centimeters. If you have specific questions, feel free to contact us at kanehfernandez@gmail.com."
          },
          {
            question: "Do your clothes run true to size?",
            answer: "Our sizing varies by product. For instance, sweatshirts and shoes may run small, while denim and dresses can run large. Always refer to the product-specific size guide."
          },
          {
            question: "What if I'm between sizes?",
            answer: "If you're between sizes, we recommend sizing up for a relaxed fit or down for a more fitted look. Our customer service team can assist you further."
          },
          {
            question: "Do your jeans shrink after washing?",
            answer: "Some rigid denim styles may shrink slightly after washing. We suggest following the care instructions and considering sizing up if you're concerned about shrinkage."
          },
          {
            question: "Are your clothes suitable for petite or tall individuals?",
            answer: "We offer a range of sizes, and our product descriptions indicate the fit. For specific measurements, please refer to the size chart or contact our support team."
          },
          {
            question: "Do you offer plus sizes?",
            answer: "Currently, our sizes range up to XXL. We're continually working to expand our size offerings to be more inclusive."
          },
          {
            question: "How can I find the inseam length for pants?",
            answer: "Inseam lengths are listed in the product details section. If you need additional information, our customer service team is here to help."
          },
          {
            question: "Are your shoes true to size?",
            answer: "Our shoes generally run true to size, but some styles may vary. We recommend checking the specific product's sizing notes."
          },
          {
            question: "Do you offer half sizes in shoes?",
            answer: "Yes, many of our shoe styles are available in half sizes. Please refer to the product page for availability."
          },
          {
            question: "Can I try items on before purchasing?",
            answer: "If you're near one of our retail locations, you're welcome to try items on in-store. Otherwise, our return policy allows you to try items at home risk-free."
          },
          {
            question: "How can I track my order?",
            answer: "Once your order ships, you'll receive a tracking number via email to monitor its progress."
          },
          {
            question: "What are your shipping options?",
            answer: "We offer standard, expedited, and overnight shipping. Shipping times and costs are calculated at checkout."
          },
          {
            question: "Do you ship internationally?",
            answer: "Yes, we ship to select countries. International shipping options and costs are available at checkout."
          },
          {
            question: "Can I change or cancel my order after placing it?",
            answer: "Orders can be modified or canceled within a short window after placement. Please contact customer service as soon as possible."
          },
          {
            question: "Do you offer gift wrapping?",
            answer: "Currently, we do not offer gift wrapping services."
          },
          {
            question: "What is your return policy?",
            answer: "We accept returns within 30 days of purchase. Items must be unworn and in original condition. A $7 return shipping fee applies to online returns."
          },
          {
            question: "How do I initiate a return or exchange?",
            answer: "Visit our Returns & Exchanges page and follow the instructions to start the process."
          },
          {
            question: "Can I return items purchased on sale?",
            answer: "Sale items are eligible for return unless marked as final sale."
          },
          {
            question: "How long does it take to process a refund?",
            answer: "Refunds are processed within 5-7 business days after we receive your return."
          },
          {
            question: "Do you offer free returns?",
            answer: "Returns in-store are free. Online returns incur a $7 shipping fee deducted from your refund."
          },
          {
            question: "Where are your products made?",
            answer: "We partner with ethical factories worldwide. Specific manufacturing locations are listed on each product page."
          },
          {
            question: "What materials do you use?",
            answer: "Our products are made from high-quality materials like organic cotton, recycled polyester, and sustainable fabrics. Details are provided on each product page."
          },
          {
            question: "Are your products sustainable?",
            answer: "Sustainability is a core value. We use eco-friendly materials and transparent production practices to minimize our environmental impact."
          },
          {
            question: "How should I care for my garments?",
            answer: "Care instructions are provided on each product page and on the garment's label. Following these will help maintain the item's quality."
          },
          {
            question: "Do your clothes contain allergens like latex or wool?",
            answer: "Material compositions are listed on product pages. If you have specific allergies, please review these details or contact us for assistance."
          },
          {
            question: "Do I need an account to place an order?",
            answer: "No, you can check out as a guest. However, creating an account allows you to track orders and manage returns more easily."
          },
          {
            question: "What payment methods do you accept?",
            answer: "We accept major credit cards, PayPal, and select digital wallets. Payment options are displayed at checkout."
          },
          {
            question: "Is my payment information secure?",
            answer: "Yes, we use secure encryption technology to protect your payment information."
          },
          {
            question: "Can I use multiple payment methods for one order?",
            answer: "Currently, we accept only one payment method per order."
          },
          {
            question: "Do you offer gift cards?",
            answer: "Yes, digital gift cards are available for purchase on our website."
          },
          {
            question: "How can I apply a discount code?",
            answer: "Enter your discount code at checkout in the designated field."
          },
          {
            question: "Can I use multiple discount codes on one order?",
            answer: "Only one discount code can be applied per order."
          },
          {
            question: "Do you offer student or military discounts?",
            answer: "At this time, we do not offer specific discounts for students or military personnel."
          },
          {
            question: "How do I find out about upcoming sales?",
            answer: "Subscribe to our newsletter or follow us on social media for updates on promotions and sales."
          },
          {
            question: "Do you price match?",
            answer: "We do not offer price matching at this time."
          },
          {
            question: "What are your sustainability practices?",
            answer: "We prioritize sustainable materials, ethical manufacturing, and transparent practices to reduce our environmental footprint."
          },
          {
            question: "Are your factories certified?",
            answer: "Yes, we work with factories that meet high standards for labor practices and environmental responsibility."
          },
          {
            question: "Do you use recycled materials?",
            answer: "Many of our products incorporate recycled materials. Specific details are provided on product pages."
          },
          {
            question: "How do you ensure ethical labor practices?",
            answer: "We conduct regular audits and maintain close relationships with our manufacturing partners to ensure fair labor practices."
          },
          {
            question: "Do you offset your carbon emissions?",
            answer: "We are committed to reducing our carbon footprint and are exploring options for carbon offsetting."
          },
          {
            question: "Do you have physical retail locations?",
            answer: "Yes, we have stores in select cities. Visit our Store Locator page to find a location near you."
          },
          {
            question: "Can I purchase a gift card?",
            answer: "Yes, digital gift cards are available for purchase on our website."
          },
          {
            question: "How do I contact customer service?",
            answer: "You can reach us via email at kanehfernandez@gmail.com or through our Contact Us page."
          }
        ]
      });
      
}

Main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await database.$disconnect();
  });

