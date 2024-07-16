const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.get('/api/products', async (req, res) => {
  const { companyname, categoryname, top, minPrice, maxPrice } = req.query;

  const apiUrl = `http://20.244.56.144/test/companies/${companyname}/categories/${categoryname}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`;

  try {
    const response = await axios.get(apiUrl);
    const productData = response.data;
    
    console.log('API response data:', productData);

    const filteredProducts = productData
      .filter(product => product.price >= minPrice && product.price <= maxPrice)
      .slice(0, top);

    res.json(filteredProducts);
  } catch (error) {
    console.error('Error fetching data from external API:', error);
    res.status(500).json({ error: 'Failed to fetch data from external API' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
