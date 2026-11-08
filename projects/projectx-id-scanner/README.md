
# Project X – I2C Bus Scanner & Display ID Terminal

<p align="center">
  <img src="assets/images/id-scanner-prototype.png" width="700" alt="Project X I2C Scanner Prototype">
</p>

<h2 align="center">I2C Diagnostic & Device Identification System</h2>

<p align="center">
  <b>Designed & Developed by Raja Sharma</b><br>
  Part of the Project X Robotics & IoT Ecosystem
</p>

---

## 1. Overview

The **Project X ID Scanner** is an Arduino-based I2C diagnostic utility designed to identify connected devices on an I2C communication bus.

The system scans the available 7-bit I2C address range, identifies devices that acknowledge communication requests, and displays their hexadecimal addresses through the Arduino Serial Monitor.

It is useful for testing OLED displays, LCD I2C modules, sensors, and other I2C-compatible peripherals.

## 2. Features

- Automatic I2C device detection.
- Scans addresses from `0x01` to `0x7E`.
- Displays detected addresses in hexadecimal format.
- Identifies transmission errors.
- Serial Monitor output at 9600 baud.
- Automatic rescanning every 5 seconds.
- Simple and lightweight Arduino firmware.

## 3. Hardware Requirements

| Component | Specification |
|---|---|
| Microcontroller | Arduino Uno R3 |
| Display (optional) | 0.96-inch SSD1306 OLED |
| Communication | I2C |
| USB Cable | Arduino-compatible USB |
| Computer | Windows / Linux / macOS |
| Software | Arduino IDE |

## 4. Circuit & Pin Connections

### Arduino Uno to I2C Device

| Arduino Uno | I2C Device |
|---|---|
| A4 | SDA |
| A5 | SCL |
| 5V / 3.3V | VCC (according to module specifications) |
| GND | GND |

**Important:** Check the voltage requirements of your I2C module before connecting it.

## 5. How It Works

1. Initializes the I2C communication interface using `Wire.begin()`.
2. Starts serial communication at 9600 baud.
3. Iterates through I2C addresses from decimal 1 to 126.
4. Sends a transmission request to each address.
5. Checks the response using `Wire.endTransmission()`.
6. Displays acknowledged device addresses.
7. Repeats the scanning process after 5 seconds.

### Example I2C Addresses

| Address | Example Device |
|---|---|
| `0x3C` | SSD1306 OLED |
| `0x27` | PCF8574 LCD Backpack |

These are common example addresses, not guaranteed detections.

## 6. Installation & Execution

**Step 1 – Clone the repository**

```bash
git clone https://github.com/luciferofx/luciferofx.git
```

**Step 2 – Open Arduino IDE**

Open:

```text
projects/projectx-id-scanner/firmware/displayidscanner/displayidscanner.ino
```

**Step 3 – Select your board**

- Board: Arduino Uno
- Select the appropriate COM port.
- Upload the firmware.

**Step 4 – Open Serial Monitor**

Set the baud rate to:

```text
9600
```

The scanner will automatically begin detecting I2C devices.

## 7. Sample Serial Monitor Output

```text
I2C Scanner
Scanning...

I2C device found at address 0x3C  !
I2C device found at address 0x27  !

done

Scanning...
```

*This is illustrative output. Actual results depend on connected hardware.*

## 8. Firmware Details

**Firmware:** `displayidscanner.ino`

**Main Library:**

```cpp
#include <Wire.h>
```

**Important Functions:**

| Function | Purpose |
|---|---|
| `Wire.begin()` | Initializes I2C |
| `Wire.beginTransmission()` | Starts communication with an address |
| `Wire.endTransmission()` | Checks device acknowledgment |
| `Serial.begin(9600)` | Initializes serial communication |
| `delay(5000)` | Waits between scans |

## 9. Web Console

The project also includes a browser-based diagnostic interface.

Location:

```text
projects/projectx-id-scanner/index.html
```

The web console provides:

- Hardware specifications.
- I2C pinout information.
- Interactive scan simulation.
- Serial Monitor-style terminal.
- Embedded Arduino source code.

**Note:** The browser console is a simulation and does not currently perform live communication with the Arduino.

## 10. Project Structure

```text
projectx-id-scanner/
│
├── README.md
│
├── index.html
│
├── assets/
│   └── images/
│       └── id-scanner-prototype.png
│
└── firmware/
    └── displayidscanner/
        └── displayidscanner.ino
```

## 11. Future Improvements

- Live browser-to-Arduino communication using Web Serial API.
- Real-time device detection dashboard.
- OLED-based scan result display.
- Export detected I2C addresses.
- Support for additional Arduino boards.
- Device identification database.

## 12. Developer

**Raja Sharma**  
Project Lead – Project X Robotics & IoT Ecosystem

- GitHub: https://github.com/luciferofx
- Project: Project X
- License: MIT

## 13. License

This project is distributed under the MIT License. See the root repository's `LICENSE` file for details.

---

<p align="center">
  <b>PROJECT X — BUILD. INNOVATE. AUTOMATE.</b><br>
  Open Source Robotics & IoT Ecosystem
</p>
