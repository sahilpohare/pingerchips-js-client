import { AuthTransports } from '../core/auth/auth_transports';
import { Config } from '../core/config';
import Ajax from '../core/http/ajax';
import HTTPFactory from '../core/http/http_factory';
import HTTPRequest from '../core/http/http_request';
import Pingerchips from '../core/pingerchips';
import Reachability from '../core/reachability';
import Socket from '../core/socket';
import Strategy from '../core/strategies/strategy';
import StrategyOptions from '../core/strategies/strategy_options';
import TimelineTransport from '../core/timeline/timeline_transport';
import TransportsTable from '../core/transports/transports_table';
import JSONPRequest from './web/dom/jsonp_request';

/*
This interface is implemented in web/runtime, node/runtime, react-native/runtime
and worker/runtime. Its job is to be the only point of contact to platform-specific
code for the core library. When the core library imports "runtime", Webpack will
look for src/runtimes/<platform>/runtime.ts. This is how PusherJS keeps
core and platform-specific code separate.
*/
interface Runtime {
  setup(PusherClass: {
    new (key: string, options: any): Pingerchips;
    ready(): void;
  }): void;
  getProtocol(): string;
  getAuthorizers(): AuthTransports;
  getLocalStorage(): any;
  TimelineTransport: TimelineTransport;
  createXHR(): Ajax;
  createWebSocket(url: string): Socket;
  getNetwork(): Reachability;
  getDefaultStrategy(
    config: Config,
    options: StrategyOptions,
    defineTransport: Function
  ): Strategy;
  Transports: TransportsTable;
  getWebSocketAPI(): new (url: string) => Socket;
  getXHRAPI(): new () => Ajax;
  addUnloadListener(listener: Function): void;
  removeUnloadListener(listener: Function): void;
  transportConnectionInitializer: Function;
  HTTPFactory: HTTPFactory;
  isXHRSupported(): boolean;
  createSocketRequest(method: string, url: string): HTTPRequest;
  randomInt(max: number): number;

  // these methods/types are only implemented in the web Runtime, so they're
  // optional but must be included in the interface
  getDocument?(): Document;
  createScriptRequest?(url: string): any;
  createJSONPRequest?(url: string, data: any): JSONPRequest;
  ScriptReceivers?: any;
  isXDRSupported?(useTLS?: boolean): boolean;
}

export default Runtime;
