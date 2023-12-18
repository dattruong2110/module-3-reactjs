module.exports = (req, resp) => {
  return resp.status(201).send({
    id: req.body.id,
    name: req.body.name,
    birthday: req.body.birthday,
  });
};
