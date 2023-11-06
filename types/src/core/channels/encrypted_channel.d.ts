import * as nacl from 'tweetnacl';
import { ChannelAuthorizationCallback } from '../auth/options';
import { PusherEvent } from '../connection/protocol/message-types';
import Pingerchips from '../pingerchips';
import PrivateChannel from './private_channel';
export default class EncryptedChannel extends PrivateChannel {
    key: Uint8Array;
    nacl: nacl;
    constructor(name: string, pusher: Pingerchips, nacl: nacl);
    authorize(socketId: string, callback: ChannelAuthorizationCallback): void;
    trigger(event: string, data: any): boolean;
    handleEvent(event: PusherEvent): void;
    private handleEncryptedEvent;
    getDataToEmit(bytes: Uint8Array): string;
}
