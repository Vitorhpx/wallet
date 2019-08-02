export const AUTH_TOKEN = "auth-token";

export const getProductClassification = (key: string) => {
  //For now, productClassification is made in front and local and it is very simple now, in the future it must be done in the back for each product
  switch (key) {
    case "Conservador":
      return "Fundo de Emergência";

    case "Moderado":
      return "Fundo de Emergência";

    case "Sofisticado":
      return "Fundo de Risco";

    default:
      return "Saldo";
  }
};
