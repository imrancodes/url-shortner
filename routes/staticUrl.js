import express from 'express'
import { handleUrlUI } from '../controller/url.js';

const staticRoute = express.Router();

staticRoute.get('/', handleUrlUI);

export default staticRoute