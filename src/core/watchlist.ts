import EventsDispatcher from './events/dispatcher';
import Logger from './logger';
import Pingerchips from './pingerchips';

export default class WatchlistFacade extends EventsDispatcher {
  private pusher: Pingerchips;

  public constructor(pusher: Pingerchips) {
    super(function(eventName, data) {
      Logger.debug(`No callbacks on watchlist events for ${eventName}`);
    });

    this.pusher = pusher;
    this.bindWatchlistInternalEvent();
  }

  handleEvent(pusherEvent) {
    pusherEvent.data.events.forEach(watchlistEvent => {
      this.emit(watchlistEvent.name, watchlistEvent);
    });
  }

  private bindWatchlistInternalEvent() {
    this.pusher.connection.bind('message', pusherEvent => {
      var eventName = pusherEvent.event;
      if (eventName === 'pusher_internal:watchlist_events') {
        this.handleEvent(pusherEvent);
      }
    });
  }
}
