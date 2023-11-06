import Pingerchips from '../../../src/core/pingerchips';
import { ScriptReceiverFactory } from '../../../src/runtimes/web/dom/script_receiver_factory';

export default class PusherIntegration extends Pingerchips {
  static Integration: any = {
    ScriptReceivers: new ScriptReceiverFactory(
      '_pusher_integration_script_receivers',
      'Pusher.Integration.ScriptReceivers'
    )
  };
}
