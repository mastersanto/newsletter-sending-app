import Recipients from './recipients.model';

async function getAll() {
  return Recipients.find();
}

async function get(id) {
  return Recipients.findOne({ _id: id });
}

async function create(data) {
  return new Recipients(data).save();
}

async function update(id, data) {
  return Recipients.findOneAndUpdate({ _id: id }, data);
}

async function remove(id) {
  return Recipients.findByIdAndDelete(id);
}

export { getAll, get, create, update, remove };