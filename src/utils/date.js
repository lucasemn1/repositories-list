export const MONTHS = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novambro",
  "Dezembro",
];

export function getFormattedStringDate(date = new Date()) {
  const day = String(date.getDate()).padEnd(2, "0");
  const month = MONTHS[date.getMonth()].substr(0, 3);
  const year = date.getFullYear();

  return `${day} de ${month} de ${year}`;
}
