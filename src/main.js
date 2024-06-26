import { render } from './framework/render.js';

import FiltersView from './view/filters.js';
import ListPresenter from './presenter/list-presenter.js';
import PointsModel from './model/points-model.js';

const siteHeaderElement = document.querySelector('.trip-main');
const siteTripEventsElement = document.querySelector('.trip-events');

const pointsModel = new PointsModel();
const presenter = new ListPresenter({
  container: siteTripEventsElement,
  pointsModel,
});

render(new FiltersView(), siteHeaderElement);
presenter.init();
