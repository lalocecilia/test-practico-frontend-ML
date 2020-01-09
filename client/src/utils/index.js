export const conditionText = (condition) => {
  switch (condition) {
    case 'new':
      return 'Nuevo';
    case 'used':
      return 'Usado';
    default:
      return condition;
  }
};

export const currencies = (code) => {
  switch (code) {
    case 'ARS':
      return '$';
    case 'USD':
      return 'U$S';
    default:
      return code;
  }
};
