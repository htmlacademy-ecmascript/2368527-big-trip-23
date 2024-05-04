import EventsListView from '../view/events-list';
import EventCreateView from '../view/event-create';
import EventEditView from '../view/event-edit';
import EventItemView from '../view/event-item';

export default class EventPresenter {
  init() {
    const tripEventsEl = document.querySelector('.trip-events');
    const eventsListEl = new EventsListView().getElement();

    eventsListEl.append(new EventCreateView().getElement());
    eventsListEl.append(new EventEditView().getElement());
    eventsListEl.append(new EventItemView().getElement());

    tripEventsEl.append(eventsListEl);
  }
}
