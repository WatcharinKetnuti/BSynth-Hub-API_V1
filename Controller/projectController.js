const projects = require('../model/projectModel.js');


const getProjects = (req, res) => {
  projects.getUserDetails();
  res.json(projects);
};

const getProjectsBymemberID = (req, res) => {
  const memberID = req.params.memberID;
  const project = projects.getProjectByMemberID(memberID);
  if (project) {
    res.json(project);
  } else {
    res.status(404).json({ message: 'Project not found' });
  }
}





module.exports = { getProjects , getProjectsBymemberID };
