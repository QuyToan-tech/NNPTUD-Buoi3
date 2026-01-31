// File: product-service.js
const API_URL = 'https://api.escuelajs.co/api/v1/products';

const getAllProducts = async () => {
    try {
        console.log("Đang kết nối đến API...");
        const response = await fetch(API_URL);
        
        if (!response.ok) throw new Error("Lỗi kết nối API");

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Lỗi:", error.message);
        return [];
    }
};

// --- Tự động chạy khi file này được execute ---
(async () => {
    const products = await getAllProducts();
    console.log(`--> Đã tải xong ${products.length} sản phẩm.`);
    // Xử lý tiếp theo ở đây...
})();