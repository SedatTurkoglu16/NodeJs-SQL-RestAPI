import { Router } from "express";

import { createNewPerson, getPersons, getPersonById, deletePerson, updatePersonById } from "../controllers/persons.controller";

const router = Router();

router.get('/persons', getPersons);
router.post('/persons', createNewPerson);
router.get('/persons/:id', getPersonById);
router.delete('/persons/:id', deletePerson);
router.put('/persons/:id', updatePersonById);

export default router;