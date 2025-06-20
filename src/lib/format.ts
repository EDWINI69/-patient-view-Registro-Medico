export const formatIdCard = (value: string) => {
  if (value.length >= 13) value = value.substring(0, 13);

  // Elimina cualquier carácter que no sea un número
  const rawValue = value.replace(/\D/g, '');

  // Divide el valor en secciones: xxx-xxxxxxx-x
  const formattedValue = rawValue.replace(
    /^(\d{3})(\d{1,7})?(\d{1})?$/,
    (match, p1, p2, p3) => {
      let result = p1;
      if (p2) result += `-${p2}`;
      if (p3) result += `-${p3}`;
      return result;
    }
  );

  return formattedValue;
};
