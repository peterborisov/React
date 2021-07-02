import express from 'express';
const router = express.Router();

//Controllers
import { register} from '../controllers/auth'

/**
 * first parameter is endpoint
 * second parameter is callback function
 */
 router.post('/register', register);

module.exports = router;