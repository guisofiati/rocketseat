import { ShowUserProfileController } from '@modules/users/useCases/showUserProfile/ShowUserProfileController';
import { ensureAuthenticated } from '@shared/infra/http/middlwares/ensureAuthenticated';
import { Router } from 'express';

const userProfileRouter = Router();
const showUserProfileController = new ShowUserProfileController();

userProfileRouter.use(ensureAuthenticated);

userProfileRouter.get('/', showUserProfileController.execute);

export { userProfileRouter };
