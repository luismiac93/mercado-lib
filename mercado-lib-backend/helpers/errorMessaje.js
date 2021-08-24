const errorMessage = (res) => {
  return res.status(404).json({
    ok: false,
    message: "No hemos encontrado tu búsqueda, pero nunca dejes de buscar",
  });
};

module.exports = {
  errorMessage,
};
