import axios from "axios";

const API_BASE_URL = "http://98.84.133.1238081/api/products";  // Backend API URL

// Fetch products by category (computers, mobiles, laptops, pendrives, or all)
export const getProducts = async (category = "") => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${category}`);
    return response.data;  // Return products array
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Return empty array on error
  }
};

// Get product image URL
export const getProductImageUrl = (imagePath) => {
  return `http://ec2-3-25-217-68.ap-southeast-2.compute.amazonaws.com:8081/api/products/images/${imagePath}`;
};
