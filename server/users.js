const users = [];

const addUser = ({ id, name='', room='' }) => {
  name = name.trim();
  room = room.trim();

  const existingUser = users.find((user) => user.room === room && user.name === name);

  if(!name || !room) return { error: 'O apelido e o nome da sala são obrigatórios.' };
  if(existingUser) return { error: 'Este apelido já existe.' };

  const user = { id, name, room };

  users.push(user);

  return { user };
}

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if(index !== -1) return users.splice(index, 1)[0];
}

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };