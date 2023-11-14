import express from "express";
import {controllers} from "./controllers/controllers.js";
export const router = express.Router()

router.get('/api/data', controllers.list);
router.get('/api/dataCode', controllers.listCode);
router.get('/', controllers.DisplayFlags)
router.get('/pays/:code', controllers.countryDetails)
// router.get('/flags/:name', controllers.countryDetails)
// router.get('/alphabetical/:letter', controllers.filter)

