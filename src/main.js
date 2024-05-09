import { render } from './render';
<<<<<<< Updated upstream
import FiltersView from './view/filters';
import EventPresenter from './presenter/event-presenter';
import WaypointsModel from './model/waypoints-model';

const tripControlsFiltersEl = document.querySelector('.trip-controls__filters');
const tripEventsEl = document.querySelector('.trip-events');
const waypointsModel = new WaypointsModel();
const eventPresenter = new EventPresenter({
  containerEl: tripEventsEl,
  waypointsModel,
=======
import FiltersView from './view/filters.js';
import ListPresenter from './presenter/list-presenter.js';
import PointsModel from './model/points-model.js';

const siteHeaderElement = document.querySelector('.trip-main');
const siteTripEventsElement = document.querySelector('.trip-events');

const pointsModel = new PointsModel();
const presenter = new ListPresenter({
  countainer: siteTripEventsElement,
  pointsModel,
>>>>>>> Stashed changes
});

render(new FiltersView(), siteHeaderElement);
presenter.init();
