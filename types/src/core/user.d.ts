import Channel from './channels/channel';
import EventsDispatcher from './events/dispatcher';
import Pingerchips from './pingerchips';
import WatchlistFacade from './watchlist';
export default class UserFacade extends EventsDispatcher {
    pusher: Pingerchips;
    signin_requested: boolean;
    user_data: any;
    serverToUserChannel: Channel;
    signinDonePromise: Promise<any>;
    watchlist: WatchlistFacade;
    private _signinDoneResolve;
    constructor(pusher: Pingerchips);
    signin(): void;
    private _signin;
    private _onAuthorize;
    private _onSigninSuccess;
    private _subscribeChannels;
    private _cleanup;
    private _newSigninPromiseIfNeeded;
}
