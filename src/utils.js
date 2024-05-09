import dayjs from 'dayjs';
<<<<<<< Updated upstream

const getRandomPositiveInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
=======
import { mockOffers } from './mock/points';
>>>>>>> Stashed changes

const DATE_FORMAT = 'D MMMM';
const TIME_FORMAT = 'HH:mm';
const DATE_TIME_FORMAT = 'DD/MM/YY HH:mm';

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomInt(maxInt) {
  return Math.floor(Math.random() * maxInt);
}

<<<<<<< Updated upstream
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
=======
function humanizeTaskDueDate(dueDate) {
  return dueDate ? dayjs(dueDate).format(DATE_FORMAT) : '';
}

function getTimeFromDate(date) {
  return date ? dayjs(date).format(TIME_FORMAT) : '';
}

function getDateTime(date) {
  return date ? dayjs(date).format(DATE_TIME_FORMAT) : '';
}

function dateDiff(dateFrom, dateTo) {
  const date1 = dayjs(dateFrom);
  const date2 = dayjs(dateTo);

  let minutes = date2.diff(date1, 'minute');
  let hours = Math.floor(minutes / 60);
  const days = Math.floor(minutes / (24 * 60));
  hours = hours - days * 24;
  minutes = minutes - hours * 60;

  const daysStr = days !== 0 ? `${days}D` : '';
  const hoursStr = hours !== 0 ? `${hours}H` : '';

  return `${daysStr + hoursStr + minutes}M`;
}

function isFavoriteStyle(isFavorite) {
  return isFavorite === true ? '--active' : '';
}

function getOffersTypeLength(type) {
  return mockOffers.find((offer) => offer.type === type).offers.length;
}

export {
  getRandomArrayElement,
  getRandomInt,
  humanizeTaskDueDate,
  getTimeFromDate,
  dateDiff,
  isFavoriteStyle,
  getDateTime,
  getOffersTypeLength,
>>>>>>> Stashed changes
};
