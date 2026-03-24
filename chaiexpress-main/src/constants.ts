import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const MENU_DATA = {
  "Chai & Tea": [
    { name: "Najakat E Adrak", price: 30, description: "A soothing drink with ginger that keeps you calm and alert at all the time" },
    { name: "Tadka Elaichi Ka", price: 35, description: "A strong cup of Elaichi aroma and Flavour" },
    { name: "Elaichi Adrak ki Mohabbat", price: 40, description: "A drink blend with Elaichi & Adrak that keeps your Mood Fresh & Calm" },
    { name: "Main Tulsi Tere Aangan Mein", price: 40, description: "A strong cup of Elaichi aroma and Flavour" },
    { name: "Kadak Aashiqui Chai (Masala)", price: 45, description: "A drink full of strong spices, it is perfect brew to beat the stress" },
    { name: "Kesar Kashmiri", price: 55, description: "A soothing blend with a hint pure keshar which keeps your mood fresh & calm" }
  ],
  "Green Tea": [
    { name: "Lemon Ginger", price: 45, description: "A refreshing detox with a citrusy twist" },
    { name: "Tulsi Ginger", price: 45, description: "Herbal goodness with a zesty kick" },
    { name: "Tulsi Lemon", price: 45, description: "A perfect blend of basil and lemon" }
  ],
  "Ice Tea": [
    { name: "Peach Tea", price: 119, description: "Fruity, refreshing, and full of flavor" },
    { name: "Lemon Ice Tea", price: 109, description: "A zesty and cool sip for instant refreshment" }
  ],
  "Flavoured Tea": [
    { name: "Butterscotch", price: 65, description: "Sweet and buttery tea indulgence" },
    { name: "Paan", price: 65, description: "Refreshing paan-flavoured tea with a earthy twist" },
    { name: "Chocolate", price: 65, description: "A delightful blend of tea and chocolate" },
    { name: "Guava", price: 65, description: "Exotic and fruity guava-infused tea" },
    { name: "Pineapple", price: 65, description: "A tropical twist to your regular tea" }
  ],
  "Coolers": [
    { name: "Masala Lemonade", price: 99, description: "A tangy and spicy thirst quencher" },
    { name: "Virgin Mojito", price: 109, description: "A minty and zesty cooler for a fresh vibe" },
    { name: "Green Apple", price: 109, description: "Crisp, sweet, and refreshing green apple cooler" }
  ],
  "Coffee": [
    { name: "Hot Coffee", price: 85, description: "A bold and aromatic cup of perfection" },
    { name: "Cafe Frappe", price: 129, description: "Creamy and frothy coffee delight" },
    { name: "Devil Zone", price: 149, description: "A dangerously delicious cold coffee treat" }
  ],
  "Flavoured Coffee": [
    { name: "Vanilla Coffee", price: 109, description: "Creamy and frothy coffee delight (Cold: ₹169)" },
    { name: "Mocha Coffee", price: 109, description: "A chocolate-coffee fusion delight (Cold: ₹169)" },
    { name: "Strawberry Coffee", price: 109, description: "A fruity and creamy twist to your coffee (Cold: ₹169)" },
    { name: "Butterscotch Coffee", price: 109, description: "Sweet and buttery coffee indulgence (Cold: ₹169)" },
    { name: "Chocolate Coffee", price: 109, description: "Rich and chocolatey coffee bliss (Cold: ₹169)" },
    { name: "Hazelnut Coffee", price: 109, description: "Nutty, smooth, and aromatic coffee (Cold: ₹169)" }
  ],
  "Shakes": [
    { name: "Vanilla Shake", price: 119, description: "Classic, smooth, and timeless" },
    { name: "Mango Shake", price: 119, description: "A tropical mango delight" },
    { name: "Strawberry Shake", price: 119, description: "Sweet and creamy strawberry indulgence" },
    { name: "Butter Scotch Shake", price: 129, description: "Buttery, rich, and deliciously sweet" },
    { name: "Kesariya Paan Shake", price: 139, description: "A royal paan-flavored treat" },
    { name: "Blueberry Shake", price: 159, description: "Cool, Creamy, and Bursting with Blueberry" },
    { name: "Kitkat Shake", price: 159, description: "Crunchy KitKat blended into a shake" },
    { name: "Oreo Shake", price: 159, description: "The perfect Oreo-loaded milkshake" }
  ],
  "Snacks & Bites": [
    { name: "Jam Butter Toast", price: 49, description: "Classic toast with butter and jam" },
    { name: "Bun Makkhan", price: 45, description: "Soft bun slathered with rich butter" },
    { name: "Poha", price: 69, description: "Light, fluffy, and wholesome breakfast" },
    { name: "Vadapav", price: 59, description: "Mumbai's favorite spicy vada pav" },
    { name: "Upma", price: 79, description: "A healthy and satisfying South Indian dish" },
    { name: "Cheese Vadapav", price: 89, description: "Classic vada pav loaded with cheese" },
    { name: "White Sauce Pasta", price: 199, description: "Rich and creamy Italian-style pasta" },
    { name: "Red Sauce Pasta", price: 179, description: "Zesty and flavorful Italian-style pasta" },
    { name: "Garlic Bread", price: 79, description: "Crispy, buttery, and garlicky goodness" },
    { name: "Cheese Corn Garlic Bread", price: 119, description: "Cheesy, corn-loaded garlic bread perfection" },
    { name: "Spicy Veg Pizza", price: 129, description: "A fiery pizza loaded with veggies" },
    { name: "Kulhad Pizza", price: 139, description: "Desi-style pizza served in a kulhad" },
    { name: "Peppy Paneer Pizza", price: 159, description: "Spicy and cheesy paneer pizza" },
    { name: "Mexican Bonanza Pizza", price: 199, description: "A Mexican twist to your favorite pizza" }
  ],
  "Maggi & Noodles": [
    { name: "Plain Maggie", price: 55, description: "Simple, nostalgic, and satisfying" },
    { name: "Veg Maggie", price: 79, description: "Classic Maggi loaded with veggies" },
    { name: "Cheese Maggie", price: 99, description: "Creamy and cheesy Maggi indulgence" },
    { name: "Cheese Corn Maggie", price: 109, description: "Cheesy, Corny, and Maggi-licious" }
  ],
  "Burger": [
    { name: "Veg Burger", price: 59, description: "A classic and crispy veggie burger" },
    { name: "Paneer Burger", price: 89, description: "Soft paneer patty inside a bun" },
    { name: "Cheese Burger", price: 99, description: "Juicy burger overloaded with cheese" },
    { name: "Double Decker Burger", price: 139, description: "Twice the layers, twice the fun!" }
  ],
  "Momos": [
    { name: "Veg Momos", price: 119, description: "A perfect blend of veggies wrapped in love" },
    { name: "Paneer Momos", price: 149, description: "Soft outside, cheesy inside - Paneer Momos that melt in your mouth" }
  ],
  "Sandwich": [
    { name: "Veg Grilled Sandwich", price: 89, description: "Crunchy, grilled, and delicious" },
    { name: "Veg Corn Sandwich", price: 99, description: "Sweet corn-filled crispy sandwich" },
    { name: "Veg Paneer Sandwich", price: 119, description: "Soft paneer-filled grilled sandwich" },
    { name: "Cheese Corn Sandwich", price: 129, description: "A cheesy and corn-filled delight" },
    { name: "Avocado Sandwich", price: 189, description: "A Creamy & Nutritious Delight!" }
  ],
  "French Fries": [
    { name: "Salted Fries", price: 89, description: "Crispy, golden, and addictive" },
    { name: "Peri - Peri Fries", price: 99, description: "Fiery and flavorful peri peri delight" }
  ],
  "Paratha": [
    { name: "Aloo Paratha", price: 79, description: "A burst of spices in every bite" },
    { name: "Pyaz Paratha", price: 89, description: "Crispy, zesty, and full of flavor" },
    { name: "Paneer Paratha", price: 99, description: "Soft paneer wrapped in a warm, delicious paratha" }
  ],
  "Pakoda": [
    { name: "Bread Pakoda", price: 35, description: "Crispy, spicy, and oh-so-delicious! Perfect with chai!" },
    { name: "Barsaat Wali Pakodi", price: 119, description: "Monsoon's best match! Crunchy, hot, and full of flavor" }
  ],
  "Nachos": [
    { name: "Jalapeno Nachos", price: 139, description: "A fiery crunch with every bite" },
    { name: "Cheese Herbs Nachos", price: 169, description: "Cheesy, herby delight in every crunch" }
  ]
};

export const OUTLETS = [
  {
    name: "Chai Xpress - Rajinder Nagar",
    address: "Shop no. - 15, Bada Bazar Rd, Old Rajender Nagar market, Old Rajinder Nagar, Rajinder Nagar, Delhi, 110060",
    timing: "8:00 AM - 11:00 PM",
    phone: "+91-8400110044",
    region: "Delhi NCR",
    mapUrl: "https://maps.app.goo.gl/rsex2uWXQUCxUFU3A"
  },
  {
    name: "Chai Xpress - Bandra West",
    address: "Plot 45, Linking Road, Bandra West, Mumbai, Maharashtra",
    timing: "7:30 AM - 12:00 AM",
    phone: "+91 98765 43211",
    region: "Maharashtra",
    mapUrl: "https://maps.google.com/?q=Plot+45+Linking+Road+Bandra+West+Mumbai"
  },
  {
    name: "Chai Xpress - Koramangala",
    address: "80 Feet Road, 5th Block, Koramangala, Bangalore, Karnataka",
    timing: "8:00 AM - 11:30 PM",
    phone: "+91 98765 43212",
    region: "Karnataka",
    mapUrl: "https://maps.google.com/?q=80+Feet+Road+5th+Block+Koramangala+Bangalore"
  },
  {
    name: "Chai Xpress - Saket",
    address: "Ground Floor, Select City Walk, Saket, New Delhi, Delhi",
    timing: "10:00 AM - 10:00 PM",
    phone: "+91 98765 43213",
    region: "Delhi NCR",
    mapUrl: "https://maps.google.com/?q=Select+City+Walk+Saket+New+Delhi"
  },
  {
    name: "Chai Xpress - Kolkata (Dum Dum)",
    address: "129 Jessore Road Dum Dum (Shyamnagar), Near Aditya School, Kolkata-700055",
    timing: "8:00 AM - 11:00 PM",
    phone: "+91 98765 43214",
    region: "West Bengal",
    mapUrl: "https://maps.google.com/?q=129+Jessore+Road+Dum+Dum+Kolkata"
  },
  {
    name: "Chai Xpress - Jubilee Hills",
    address: "Road No 36, Jubilee Hills, Hyderabad, Telangana",
    timing: "7:00 AM - 11:30 PM",
    phone: "+91 98765 43215",
    region: "Telangana",
    mapUrl: "https://maps.google.com/?q=Road+No+36+Jubilee+Hills+Hyderabad"
  }
];

export const TEAM_MEMBERS = [
  {
    name: "Shivang Pandey",
    role: "Founder",
    image: "https://res.cloudinary.com/dzc1dckta/image/upload/v1774344644/Screenshot_2026-03-24_151028_pdcu49.png"
  },
  {
    name: "Vinayak Maurya",
    role: "Team Member",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800"
  }
];

export const STATS = [
  { label: "Outlets Across India", value: 15, suffix: "+" },
  { label: "Happy Customers", value: 50, suffix: "K+" },
  { label: "Signature Recipes", value: 25, suffix: "+" },
  { label: "Pure & Authentic", value: 100, suffix: "%" }
];
