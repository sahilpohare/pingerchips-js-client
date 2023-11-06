import EventsDispatcher from './events/dispatcher';
import Pingerchips from './pingerchips';
export default class WatchlistFacade extends EventsDispatcher {
    private pusher;
    constructor(pusher: Pingerchips);
    handleEvent(pusherEvent: any): void;
    private bindWatchlistInternalEvent;
}
