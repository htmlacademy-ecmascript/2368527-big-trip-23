import { SortType } from '../const.js';
import AbstractView from '../framework/view/abstract-view.js';

const DISABLED_SORT_TYPES = [SortType.EVENT, SortType.OFFERS];
const SORT_PREFIX = 'sort-';

const createSortTemplate = (activeSorteTipe) =>
  `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
  ${Object.values(SortType)
    .map(
      (sortType) => `<div class="trip-sort__item  trip-sort__item--${sortType}">
      <input id="sort-${sortType}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort"
      value="sort-${sortType}"${sortType === activeSorteTipe ? 'checked' : ''}
      ${DISABLED_SORT_TYPES.includes(sortType) ? 'disabled' : ''}>
        <label class="trip-sort__btn" for="sort-${sortType}">${sortType}</label>
      </div>`
    )
    .join('')}
    </form>`;

export default class SortView extends AbstractView {
  #handleSortTypeChange = null;
  #activeSorteTipe = '';

  constructor({ onSortTypeChange, activeSorteTipe }) {
    super();
    this.#handleSortTypeChange = onSortTypeChange;
    this.#activeSorteTipe = activeSorteTipe || SortType.DAY;

    this.element.addEventListener('change', this.#sortTypeChangeHandler);
  }

  get template() {
    return createSortTemplate();
  }

  #sortTypeChangeHandler = (evt) => {
    const sortType = evt.target.id.replace(SORT_PREFIX, '');
    this.#handleSortTypeChange(sortType);
  };
}
