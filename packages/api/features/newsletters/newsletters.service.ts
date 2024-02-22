import Newsletters from './newsletters.model';

async function getAll() {
  return Newsletters.find();
}

async function get(id) {
  return Newsletters.findOne({ _id: id });
}

async function create(data) {
  return new Newsletters(data).save();
}

async function update(id, data) {
  return Newsletters.findOneAndUpdate({ _id: id }, data);
}

async function remove(id) {
  return Newsletters.findByIdAndDelete(id);
}

export { getAll, get, create, update, remove };