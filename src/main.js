import FiltersView from './view/filters';
import SortView from './view/sort';
import EventPresenter from './presenter/event-presenter';

const tripControlsFiltersEl = document.querySelector('.trip-controls__filters');
const tripEventsEl = document.querySelector('.trip-events');
const eventPresenter = new EventPresenter();

tripControlsFiltersEl.append(new FiltersView().getElement());
tripEventsEl.append(new SortView().getElement());

eventPresenter.init();
