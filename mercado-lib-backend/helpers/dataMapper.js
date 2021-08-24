const searchDataMapper = (data) => {
  const items = [];
  const categories =
    data.available_filters[0].values.map((value) => value.name) || [];

  data.results.forEach((item) => {
    items.push({
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: item.price,
        decimals: 0,
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      city: item.address.city_name,
    });
  });

  return { categories, items };
};

const itemDataMapper = (data) => {
  const item = {
    id: data.id,
    title: data.title,
    price: {
      currency: data.currency_id,
      amount: data.price,
      decimals: 0,
    },
    picture: data.pictures[0].secure_url,
    condition: data.condition,
    free_shipping: data.shipping.free_shipping,
    sold_quantity: data.sold_quantity,
    description: data.descriptions[0].id,
  };

  return item;
};
module.exports = {
  searchDataMapper,
  itemDataMapper,
};
