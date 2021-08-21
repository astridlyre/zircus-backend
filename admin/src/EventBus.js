class EventBusClass {
  #subscribers = new Map();

  addEventListener(event, func) {
    this.#subscribers.set(
      event,
      (this.#subscribers.get(event) || new Set()).add(func),
    );
  }

  dispatchEvent(event) {
    this.#subscribers.get(event)?.forEach((sub) => sub(event));
  }

  removeEventListener(event, func) {
    const subs = this.#subscribers.get(event);
    if (subs.delete(func)) {
      this.#subscribers.set(event, subs);
    }
  }
}

const EventBus = new EventBusClass();
export default EventBus;
