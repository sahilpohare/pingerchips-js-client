import { ChannelAuthorizationCallback } from '../auth/options';
import { PusherEvent } from '../connection/protocol/message-types';
import { default as EventsDispatcher } from '../events/dispatcher';
import Pingerchips from '../pingerchips';
export default class Channel extends EventsDispatcher {
    name: string;
    pusher: Pingerchips;
    subscribed: boolean;
    subscriptionPending: boolean;
    subscriptionCancelled: boolean;
    subscriptionCount: null;
    constructor(name: string, pusher: Pingerchips);
    authorize(socketId: string, callback: ChannelAuthorizationCallback): void;
    trigger(event: string, data: any): boolean;
    disconnect(): void;
    handleEvent(event: PusherEvent): void;
    handleSubscriptionSucceededEvent(event: PusherEvent): void;
    handleSubscriptionCountEvent(event: PusherEvent): void;
    subscribe(): void;
    unsubscribe(): void;
    cancelSubscription(): void;
    reinstateSubscription(): void;
}
