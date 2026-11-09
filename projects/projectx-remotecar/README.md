 <div align="center">

<img src="assets/images/remotecar-prototype.svg" width="850" alt="Project X 4WD Rover"/>

# 🤖 PROJECT X
## REMOTE CAR — 4WD ROVER

### `DUAL-DRIVER BLUETOOTH-CONTROLLED GROUND VEHICLE`

**ARDUINO NANO · HC-05 · DUAL L298N · 4WD SKID STEER**

<img src="https://img.shields.io/badge/PROJECT%20X-ECOSYSTEM-8B5CF6?style=for-the-badge&logo=github&logoColor=white"/>
<img src="https://img.shields.io/badge/ARDUINO-NANO-00979D?style=for-the-badge&logo=arduino&logoColor=white"/>
<img src="https://img.shields.io/badge/BLUETOOTH-HC--05-38BDF8?style=for-the-badge"/>
<img src="https://img.shields.io/badge/STATUS-PROTOTYPE-F59E0B?style=for-the-badge"/>

**Designed & Developed by Raja Sharma**

*A 4-wheel-drive robotic platform with differential steering and wireless Bluetooth control.*

</div>

---

<div align="center">

## ◈ ABOUT THE PROJECT

</div>

**Project X — Remote Car** is a compact, battery-powered robotic rover built around the Arduino Nano platform. It uses two L298N dual H-bridge motor driver modules to control four DC gear motors.

The rover receives wireless commands through an HC-05 Bluetooth module and can be operated using a compatible Android Bluetooth serial terminal application.

Its differential-drive architecture allows forward movement, reverse movement, and skid steering without a dedicated steering servo.

> **CORE OBJECTIVE**
>
> Develop a wireless, remotely controlled 4WD robotic platform that demonstrates embedded programming, motor control, Bluetooth communication, and differential steering.

---

<div align="center">

## ◈ KEY FEATURES

</div>

| FEATURE | DESCRIPTION |
|:---|:---|
| 📡 Wireless Control | HC-05 Bluetooth serial communication |
| ⚙️ Dual Motor Drivers | Two L298N modules for four DC motors |
| 🔄 Differential Steering | Forward, reverse, left, right and stop commands |
| 🔋 Battery Powered | Designed for a rechargeable battery supply |
| 📱 Android Compatible | Control through a Bluetooth serial terminal |
| 🧠 Embedded Controller | Arduino Nano based control system |

---

<div align="center">

## ◈ HARDWARE CONFIGURATION

</div>

| COMPONENT | SPECIFICATION | QTY |
|:---|:---|:---:|
| Microcontroller | Arduino Nano — ATmega328P | 1 |
| Motor Driver | L298N Dual H-Bridge Module | 2 |
| Bluetooth Module | HC-05 Serial Bluetooth | 1 |
| DC Gear Motor | BO-Type DC Gear Motor | 4 |
| Wheels | Rubber Grip Wheels | 4 |
| Chassis | 4WD Rover Chassis | 1 |
| Battery | Compatible rechargeable battery pack | 1 |

### GPIO Pin Mapping

| ARDUINO NANO | COMPONENT | FUNCTION |
|:---:|:---|:---|
| D0 (RX) | HC-05 TXD | Bluetooth serial input |
| D1 (TX) | HC-05 RXD | Bluetooth serial output |
| D2 | Motor Driver Inputs | Left motor direction control |
| D3 | Motor Driver Inputs | Left motor direction control |
| D4 | Motor Driver Inputs | Right motor direction control |
| D5 | Motor Driver Inputs | Right motor direction control |
| 5V | HC-05 VCC | Bluetooth logic supply |
| GND | Common Ground | Shared system ground |

<details>
<summary><b>⚡ Power & Wiring Notes</b></summary>

- Check the voltage and current requirements of the motors and motor drivers before connecting the battery.
- Use a suitable regulated supply for the Arduino and Bluetooth module.
- Ensure all system grounds share a common reference.
- The HC-05 RX input uses 3.3V logic. Use an appropriate level shifter or voltage divider when connecting it to a 5V Arduino TX output.
- Do not assume the L298N onboard regulator can safely power every component. Verify its voltage and current limits.

</details>

---

<div align="center">

## ◈ CONTROL PROTOCOL

</div>

The rover uses single-character ASCII commands over Bluetooth serial communication.

| KEY | ACTION |
|:---:|:---|
| `U` | Forward |
| `D` | Backward |
| `L` | Turn Left |
| `R` | Turn Right |
| `S` | Stop |

<caption>Note: Actual motor direction depends on the firmware and motor wiring configuration.</caption>

---

<div align="center">

## ◈ GETTING STARTED

</div>

### 01 — Clone Repository

```bash
git clone https://github.com/luciferofx/projectxweb.git
```

### 02 — Navigate to Project

```bash
cd projectxweb/projects/projectx-remotecar
```

### 03 — Open Arduino Firmware

Open the firmware file in Arduino IDE:

```text
firmware/
└── remotecar/
    └── remotecar.ino
```

Select the appropriate board and processor settings according to your Arduino Nano:

| SETTING | VALUE |
|:---|:---|
| Board | Arduino Nano |
| Processor | ATmega328P |
| Port | Your connected COM / serial port |
| Programmer | Default |

Upload the firmware to the Arduino Nano.

### 04 — Bluetooth Pairing

1. Power on the rover.
2. Enable Bluetooth on your Android device.
3. Find and pair with the HC-05 module.
4. Enter the pairing PIN configured for your module, if requested.

### 05 — Control the Rover

1. Open a compatible Bluetooth Serial Terminal application.
2. Connect to the paired HC-05 module.
3. Send the supported commands: `U`, `D`, `L`, `R`, or `S`.

You can also open `index.html` in a browser to view the visual dashboard or simulation, if included in the repository.

---

<div align="center">

## ◈ SYSTEM ARCHITECTURE

</div>

```text
             ANDROID SMARTPHONE
                     |
              BLUETOOTH LINK
                     |
                HC-05 MODULE
                     |
                UART SERIAL
                     |
                ARDUINO NANO
                     |
              MOTOR CONTROL
                     |
              +------+------+
              |             |
          L298N #1       L298N #2
              |             |
          LEFT SIDE      RIGHT SIDE
          MOTORS         MOTORS
              |             |
              +------+------+
                     |
                4WD CHASSIS
```

---

<div align="center">

## ◈ TROUBLESHOOTING

</div>

<details>
<summary><b>🔌 Bluetooth module is not detected</b></summary>

- Check the HC-05 power and ground connections.
- Verify that the module is powered on.
- Check whether it is in pairing mode.
- Confirm that your phone supports Bluetooth serial connections.

</details>

<details>
<summary><b>⚙️ Wheels are spinning in the wrong direction</b></summary>

- Check the motor polarity and firmware direction mapping.
- Verify that the left and right motor groups are connected as intended.

</details>

<details>
<summary><b>📡 Commands are not responding</b></summary>

- Verify the Bluetooth connection.
- Check the serial communication configuration.
- Confirm that the firmware recognizes the command characters.
- Inspect the wiring and power connections.

</details>

<details>
<summary><b>🔋 Arduino resets during motor operation</b></summary>

- Check battery condition and voltage stability.
- Verify that the power supply can handle the motor load.
- Use an appropriately rated regulated supply for the controller.
- Keep motor power and logic power requirements in mind.

</details>

---

<div align="center">

## ◈ FUTURE ROADMAP

</div>

| VERSION | PLANNED FEATURE |
|:---:|:---|
| v1.1 | PWM-based motor speed control |
| v2.0 | Ultrasonic obstacle detection |
| v2.1 | Battery status monitoring |
| v3.0 | Dedicated Android remote-control application |
| v3.1 | Live telemetry dashboard |

---

<div align="center">

## ◈ PROJECT INFORMATION

</div>

| DETAIL | INFORMATION |
|:---|:---|
| Project | Project X — Remote Car |
| Category | Robotics / Embedded Systems |
| Controller | Arduino Nano |
| Communication | Bluetooth — HC-05 |
| Motor Driver | Dual L298N |
| Drive System | 4WD Differential Drive |
| Developer | Raja Sharma |
| Year | 2024 |
| License | MIT |

---

<div align="center">

<a href="https://github.com/luciferofx/projectxweb">
<img src="https://img.shields.io/badge/EXPLORE-PROJECT%20X-8B5CF6?style=for-the-badge&logo=github&logoColor=white" alt="Explore Project X"/>
</a>

<br/><br/>

### ⚡ DRIVE FORWARD. TURN ZERO. INNOVATE.

**© 2024 Raja Sharma · Project X Ecosystem**

</div>
