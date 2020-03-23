// фильтер даты, получает дату и формат
export default function dateFilter(value, format = 'datetime') {
  const options = {};
  if(format.includes('date')){
    options.day = "2-digit";
    options.month = "long";
    options.year = "numeric";
  }
  if(format.includes('time')){
    options.hour = "2-digit";
    options.minute = "2-digit";
    options.second = "2-digit";
  }
  // на выходе 23.03.2020 10:45:54
  return new Intl.DateTimeFormat("ru-RU", options).format(new Date(value));
}