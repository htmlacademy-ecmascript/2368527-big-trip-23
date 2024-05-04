import { render } from '../render';
import EventsListView from '../view/events-list';
import EventCreateView from '../view/event-create';
import EventEditView from '../view/event-edit';
import EventItemView from '../view/event-item';
import SortingView from '../view/sorting';

export default class EventPresenter {
  constructor({ containerEl }) {
    this.containerEl = containerEl;
  }

  renderSortingView() {
    this.sortingView = new SortingView();
    render(this.sortingView, this.containerEl);
  }

  renderEventsListView() {
    this.eventsListView = new EventsListView();
    render(this.eventsListView, this.containerEl);
  }

  renderEventEditView() {
    this.eventEditView = new EventEditView();
    render(this.eventEditView, this.eventsListView.getElement());
  }

  renderEventCreateView() {
    this.eventCreateView = new EventCreateView();
    render(this.eventCreateView, this.eventsListView.getElement());
  }

  renderEventItemView() {
    this.eventItemView = new EventItemView();
    render(this.eventItemView, this.eventsListView.getElement());
  }

  init() {
    this.renderSortingView();
    this.renderEventsListView();
    this.renderEventEditView();
    this.renderEventCreateView();

    for (let i = 0; i < 3; i++) {
      this.renderEventItemView();
    }

    render(this.eventsListView, this.containerEl);
  }
}
