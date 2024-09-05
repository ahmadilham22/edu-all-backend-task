import productService from '../services/product-service.js';

const get = async (req, res) => {
  try {
    const result = await productService.get(req);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export default {
  get,
};
