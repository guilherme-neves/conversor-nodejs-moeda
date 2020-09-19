const connection = require("../database/connections");
const api = require("../service/api");

module.exports = {
  async currencyConversion(request, response) {
    let { originCurrency, destinyCurrency, originValue } = request.body;
    const { id } = request.params;

    destinyCurrency = destinyCurrency.toUpperCase();
    originCurrency = originCurrency.toUpperCase();

    var targetValue = 0;

    try {
      const resp = await api.get(`/latest?base=${destinyCurrency}`);

      const valueOrigin = resp.data.rates[originCurrency];
      const valueDestiny = resp.data.rates[destinyCurrency];

      switch (originCurrency) {
        case "BRL":
          if (destinyCurrency === "USD") {
            targetValue = originValue / valueOrigin;
            break;
          } else if (destinyCurrency === "EUR") {
            targetValue = originValue / valueOrigin;
            break;
          } else if (destinyCurrency === "JPY") {
            targetValue = originValue / valueOrigin;
            break;
          }
        case "USD":
          if (destinyCurrency === "BRL") {
            targetValue = originValue / valueOrigin;
            break;
          } else if (destinyCurrency === "EUR") {
            targetValue = originValue / valueOrigin;
            break;
          } else if (destinyCurrency === "JPY") {
            targetValue = originValue / valueOrigin;
            break;
          }
        case "EUR":
          if (destinyCurrency === "USD") {
            targetValue = originValue / valueOrigin;
            break;
          } else if (destinyCurrency === "BRL") {
            targetValue = originValue / valueOrigin;
            break;
          } else if (destinyCurrency === "JPY") {
            targetValue = originValue / valueOrigin;
            break;
          }
        case "JPY":
          if (destinyCurrency === "USD") {
            targetValue = originValue / valueOrigin;
            break;
          } else if (destinyCurrency === "EUR") {
            targetValue = originValue / valueOrigin;
            break;
          } else if (destinyCurrency === "BRL") {
            targetValue = originValue / valueOrigin;
            break;
          }
      }
      //here save transaction
      const result = await connection("transactions").insert({
        userId: id,
        originCurrency,
        destinyCurrency,
        originValue,
        targetValue,
        conversionRate: valueDestiny,
      });

      return response.json({
        trasanctionsId: result[0],
        userId: id,
        originCurrency,
        destinyCurrency,
        originValue,
        targetValue,
        conversionRate: valueDestiny,
      });
    } catch (err) {
      return response.status(404).send("Parametros invalido ");
    }
  },

  async listTransactionForUser(request, response) {
    try {
      const { id } = request.params;
      const result = await connection("transactions").select("*").where({
        userId: id,
      });
      return response.json(result);
    } catch (error) {
      return response.status(404).json(error);
    }
  },
};
