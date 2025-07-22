// routes/userRoutes.js
const express = require('express');
const router = express.Router();

const { getAllUsers, updateUser, deleteUser } = require('../controllers/userController');
const { verifyToken, requireRole } = require('../middleware/auth');

router.use(verifyToken);
router.use(requireRole('seller')); // Only sellers can access these routes

router.get('/', getAllUsers);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;