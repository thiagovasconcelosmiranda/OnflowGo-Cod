import {Router} from 'express';
import * as homeController from '../controllers/home';
import * as modelController from '../controllers/model';
import * as downloadController from '../controllers/download';
import * as aboutController from '../controllers/about';
import * as supportController from '../controllers/support';
import * as saleController from '../controllers/sale';
import * as cineboxController from '../controllers/cinebox';
import * as visionController from '../controllers/visionsat';
import * as neonsatController from '../controllers/neonsat';
import * as duolsatController from '../controllers/duosat';
import * as tuningController from '../controllers/tuning';

export const router = Router();

router.get('/', homeController.home);
router.get('/modelos', modelController.model);
router.get('/downloads', downloadController.download);
router.get('/sobrenos', aboutController.about);
router.get('/suporte', supportController.support);
router.get('/vendas', saleController.sale);
router.get('/cinebox', cineboxController.cinebox);
router.get('/visionsat', visionController.visionsat);
router.get('/neonsat', neonsatController.neonsat);
router.get('/duosat', duolsatController.duolsat);
router.get('/tuning', tuningController.tuning);