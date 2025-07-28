import express from 'express'
import { handleCreateShorterUrlId, handleRedirectUrl, handleUrlAnalytics } from '../controller/url.js';

const route = express.Router();

route.post('/', handleCreateShorterUrlId)

route.get('/:shortId', handleRedirectUrl)

route.get('/analytics/:shortId', handleUrlAnalytics)

export default route