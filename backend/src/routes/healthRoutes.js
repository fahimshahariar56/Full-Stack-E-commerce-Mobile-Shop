const express = require('express');
const ApiResponse = require('../utils/apiResponse');

const router = express.Router();

router.get('/health', (req, res) => {
  return ApiResponse.success(res, {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
  }, 'API server is running optimally');
});

module.exports = router;
