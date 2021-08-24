const axios = require("axios").default;
const { errorMessage } = require("../helpers/errorMessaje");
const { searchDataMapper, itemDataMapper } = require("../helpers/dataMapper");

const searchUrl = "https://api.mercadolibre.com/sites/MLA";
const baseUrl = "https://api.mercadolibre.com/items";

const author = { name: "Luis", lastname: "Aza" };

const searchAll = async (req, res) => {
  const query = req.query.q;

  if (!query) {
    errorMessage(res);
  }

  try {
    const resp = await axios.get(`${searchUrl}/search?q=${query}&limit=4`);

    const { categories, items } = searchDataMapper(resp.data);
    const finaldata = { author, categories, items };

    res.json({ ok: true, data: finaldata });
  } catch (error) {
    errorMessage(res);
  }
};

const itemById = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    errorMessage(res);
  }

  try {
    const resp = await axios.get(`${baseUrl}/${id}`);

    const item = itemDataMapper(resp.data);
    const finaldata = { author, item };

    res.json({ ok: true, data: finaldata });
  } catch (error) {
    errorMessage(res);
  }
};

const itemByIdDescription = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    errorMessage(res);
  }

  try {
    const resp = await axios.get(`${baseUrl}/${id}`);

    const item = itemDataMapper(resp.data);
    const respDescription = await axios.get(`${baseUrl}/${id}/description`);
    item.description = respDescription.data.plain_text;
    const finaldata = { author, item };

    res.json({ ok: true, data: finaldata });
  } catch (error) {
    errorMessage(res);
  }
};

const notFound = (res) => {
  errorMessage(res);
};

module.exports = {
  searchAll,
  itemById,
  itemByIdDescription,
  notFound,
};
