import Handshake from '../connection/handshake';
import AssistantToTheTransportManager from '../transports/assistant_to_the_transport_manager';
import PingDelayOptions from '../transports/ping_delay_options';
import Transport from '../transports/transport';
import TransportConnection from '../transports/transport_connection';
import TransportManager from '../transports/transport_manager';
import * as nacl from 'tweetnacl';
import Channel from '../channels/channel';
import Channels from '../channels/channels';
import EncryptedChannel from '../channels/encrypted_channel';
import PresenceChannel from '../channels/presence_channel';
import PrivateChannel from '../channels/private_channel';
import ConnectionManager from '../connection/connection_manager';
import ConnectionManagerOptions from '../connection/connection_manager_options';
import Pingerchips from '../pingerchips';
import Timeline from '../timeline/timeline';
import { default as TimelineSender, TimelineSenderOptions } from '../timeline/timeline_sender';
declare var Factory: {
    createChannels(): Channels;
    createConnectionManager(key: string, options: ConnectionManagerOptions): ConnectionManager;
    createChannel(name: string, pusher: Pingerchips): Channel;
    createPrivateChannel(name: string, pusher: Pingerchips): PrivateChannel;
    createPresenceChannel(name: string, pusher: Pingerchips): PresenceChannel;
    createEncryptedChannel(name: string, pusher: Pingerchips, nacl: nacl): EncryptedChannel;
    createTimelineSender(timeline: Timeline, options: TimelineSenderOptions): TimelineSender;
    createHandshake(transport: TransportConnection, callback: (HandshakePayload: any) => void): Handshake;
    createAssistantToTheTransportManager(manager: TransportManager, transport: Transport, options: PingDelayOptions): AssistantToTheTransportManager;
};
export default Factory;
