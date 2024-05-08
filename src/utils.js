import dayjs from 'dayjs';

const getRandomPositiveInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomArrayItem = (elements) =>
  elements[getRandomPositiveInteger(0, elements.length - 1)];

const capitaliseFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

const getDateStringFromDate = (date) => dayjs(date).format('YYYY-MM-DD');

const getTimeStringFromDate = (date) => dayjs(date).format('HH:mm');

const humanizeDay = (date) => dayjs(date).format('MMM D');

const printDuration = (dateFrom, dateTo) => {
  const dateStart = dayjs(dateFrom);
  const dateEnd = dayjs(dateTo);
  const diff = dateEnd.diff(dateStart);
  const diffDuration = dayjs.duration(diff);

  const daysDuration = diffDuration.days();
  const hoursDuration = diffDuration.hours();
  const minutesDuration = diffDuration.minutes();
  const days = `${daysDuration.toString().padStart(2, '0')}D`;
  const hours = `${hoursDuration.toString().padStart(2, '0')}H`;
  const minutes = `${minutesDuration.toString().padStart(2, '0')}M`;

  if (daysDuration) {
    return `${days} ${hours} ${minutes}`;
  }

  if (hoursDuration) {
    return `${hours} ${minutes}`;
  }

  return minutes;
};

export {
  getRandomArrayItem,
  capitaliseFirstLetter,
  getDateStringFromDate,
  getTimeStringFromDate,
  humanizeDay,
  printDuration,
};
