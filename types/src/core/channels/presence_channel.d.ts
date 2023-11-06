import { PusherEvent } from '../connection/protocol/message-types';
import Pingerchips from '../pingerchips';
import Members from './members';
import PrivateChannel from './private_channel';
export default class PresenceChannel extends PrivateChannel {
    members: Members;
    constructor(name: string, pusher: Pingerchips);
    authorize(socketId: string, callback: Function): void;
    handleEvent(event: PusherEvent): void;
    handleInternalEvent(event: PusherEvent): void;
    handleSubscriptionSucceededEvent(event: PusherEvent): void;
    disconnect(): void;
}
