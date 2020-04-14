// фильтер даты, получает дату и формат
export default function timeFilter(value) {
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  };

  return new Intl.DateTimeFormat("ru-RU", options).format(value);
}
