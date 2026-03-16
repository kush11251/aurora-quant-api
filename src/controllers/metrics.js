const express = require('express');
const router = express.Router();
const { getMetrics } = require('../services/metrics');
router.get('/', async (req, res) => {
  try {
    const metrics = await getMetrics();
    res.json(metrics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
module.exports = router;