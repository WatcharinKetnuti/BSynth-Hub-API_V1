const { users } = require("../model/userModel");

const projects = [
  {
    id: "P001",
    project_name: "BSynth Hub",
    description: "First Project Community Dashboard",
    start_date: "2025-04-24",
    end_date: null,
    status: "in-progress",
    get member_count() {
      return this.members.length;
    },
    url: [
      {
        name: "Frontend-GitHub",
        link: "https://github.com/Sahasawat-Boss/##",
      },
      {
        name: "Backend-GitHub",
        link: "https://github.com/WatcharinKetnuti/BSynth-Hub-API_V1",
      },
    ],
    members: [
      {
        user_id: "U001",
        role: "Frontend Developer",
        join_date: "2025-04-24",
      },
      {
        user_id: "U002",
        role: "Backend Developer",
        join_date: "2025-04-24",
      },
    ],
  },
  {
      id: "P002",
      project_name: "Fillter null-test",
      description: "this project will show when fetch all",
      start_date: Date.now(),
      end_date: null,
      status: "inull-test",
      get member_count() {
        return this.members.length;
      },
      url: [
        {
          name: "null-test",
          link: "null-test",
        }
      ],
      members: [
        {
          user_id: "ex-user_id",
          role: "test",
          join_date: Date.now(),
        },
      ],
  }
];

function getUserDetails() {
  for (const project of projects) {
    for (const member of project.members) {
      const user = users.find((user) => user.id === member.user_id);
      if (user) {
        member.nickname = user.nickname;
        member.fullname = user.fullname;
        member.age = user.age;
        member.register_date = user.register_date;
        member.member_no = user.member_no;
      }
    }
    return null; // Return null if no user is found
  }
}

function getProjectByMemberID(memberID) {
  for (const project of projects) {
    const member = project.members.find((member) => member.user_id === memberID);
    if (member) {
      return project;
    }
  }
  return null; // Return null if no project is found for the given memberID
}



module.exports = { projects , getUserDetails , getProjectByMemberID };