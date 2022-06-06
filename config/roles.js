
const roles = ['USER', 'ADMIN'];

const roleRights = new Map();
roleRights.set(roles[0], []);
roleRights.set(roles[1], ['getUsers', 'manageUsers', 'Admin']);

module.exports = {
  roles,
  roleRights,
};