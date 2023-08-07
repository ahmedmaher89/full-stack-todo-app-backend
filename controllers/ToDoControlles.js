const ToDoModel = require("../moudels/ToDoModel");

module.exports.getToDo = async (req, res) => {
  const toDo = await ToDoModel.find();
  res.send(toDo);
};

module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;

  ToDoModel.create({ text })
    .then((data) => {
      console.log("Aded sucessfully");
      console.log(data);
      res.send(data);
    })
    .catch((err) => console.log(err));
};

module.exports.deleteToDo = (req, res) => {
  const { id } = req.params;

  console.log("id ---> ", id);

  ToDoModel.findByIdAndDelete(id)
    .then(() => res.status(201).send("Deleted Successfully..."))
    .catch((err) => console.log(err));
};

module.exports.updateToDo = (req, res) => {
  const { _id, text } = req.body;

  ToDoModel.findByIdAndUpdate(_id, { text })
    .then(() => res.set(201).send("Updated Successfully..."))
    .catch((err) => console.log(err));
};
