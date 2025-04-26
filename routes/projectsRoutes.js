

const express = require('express');
const router = express.Router();
const { getProjects, getProjectsBymemberID} = require('../Controller/projectController');


router.get('/', getProjects);
router.get('/:memberID', getProjectsBymemberID);

router.get('/:memberID/example', (req, res) => {
    const memberID = req.params.memberID;
    res.send(`You sent memberID: ${memberID}`);
});



module.exports = router;
