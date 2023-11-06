import * as nacl from 'tweetnacl';
import { Options, validateOptions } from './options';
import Pingerchips from './pingerchips';

export default class PusherWithEncryption extends Pingerchips {
  constructor(app_key: string, options: Options) {
    Pingerchips.logToConsole = PusherWithEncryption.logToConsole;
    Pingerchips.log = PusherWithEncryption.log;

    validateOptions(options);
    options.nacl = nacl;
    super(app_key, options);
  }
}
