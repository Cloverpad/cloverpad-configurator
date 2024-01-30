import { cloverpad } from "./protocol";
import { Keypad } from "./utils/serial";

function App() {
  const requestFirmwareVersion = async () => {
    const keypad = await Keypad.pairKeypad();
    if (!keypad) {
      console.warn("No keypad selected");
      return;
    }

    try {
      const command = cloverpad.Command.create({
        firmwareVersion: cloverpad.FirmwareVersion.create(),
      });

      const response = await keypad.sendCommand(command);
      if (response && response.code === cloverpad.ResponseCode.SUCCESS && response.firmwareVersion) {
        alert(`Firmware Version: ${response.firmwareVersion.version}`);
      } else {
        alert("Unable to retrieve firmware version");
      }
    }
    catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        onclick={() => requestFirmwareVersion()}
      >
        Get Firmware Version
      </button>
    </>
  );
}

export default App;
