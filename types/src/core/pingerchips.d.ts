import AbstractRuntime from '../runtimes/interface';
import Channel from './channels/channel';
import Channels from './channels/channels';
import { Config } from './config';
import ConnectionManager from './connection/connection_manager';
import { default as EventsDispatcher } from './events/dispatcher';
import { Options } from './options';
import Timeline from './timeline/timeline';
import TimelineSender from './timeline/timeline_sender';
import UserFacade from './user';
import { PeriodicTimer } from './utils/timers';
export default class Pingerchips {
    static instances: Pingerchips[];
    static isReady: boolean;
    static logToConsole: boolean;
    static Runtime: AbstractRuntime;
    static ScriptReceivers: any;
    static DependenciesReceivers: any;
    static auth_callbacks: any;
    static ready(): void;
    static log: (message: any) => void;
    private static getClientFeatures;
    key: string;
    config: Config;
    channels: Channels;
    global_emitter: EventsDispatcher;
    sessionID: number;
    timeline: Timeline;
    timelineSender: TimelineSender;
    connection: ConnectionManager;
    timelineSenderTimer: PeriodicTimer;
    user: UserFacade;
    constructor(app_key: string, options: Options);
    channel(name: string): Channel;
    allChannels(): Channel[];
    connect(): void;
    disconnect(): void;
    bind(event_name: string, callback: Function, context?: any): Pingerchips;
    unbind(event_name?: string, callback?: Function, context?: any): Pingerchips;
    bind_global(callback: Function): Pingerchips;
    unbind_global(callback?: Function): Pingerchips;
    unbind_all(callback?: Function): Pingerchips;
    subscribeAll(): void;
    subscribe(channel_name: string): Channel;
    unsubscribe(channel_name: string): void;
    send_event(event_name: string, data: any, channel?: string): boolean;
    shouldUseTLS(): boolean;
    signin(): void;
}