
<div align="center">

<img src="assets/images/remotecar-prototype.svg" width="850" alt="Project X 4WD Rover"/>

# 🤖 PROJECT X
## REMOTE CAR (4WD ROVER)

### `DUAL-DRIVER BLUETOOTH CONTROLLED GROUND VEHICLE`

**ARDUINO NANO · HC-05 · DUAL L298N · 4WD SKID STEER**

<img src="https://img.shields.io/badge/PROJECT%20X-ECOSYSTEM-8B5CF6?style=for-the-badge&logo=github&logoColor=white"/>
<img src="https://img.shields.io/badge/ARDUINO-NANO-00979D?style=for-the-badge&logo=arduino&logoColor=white"/>
<img src="https://img.shields.io/badge/BLUETOOTH-HC--05-38BDF8?style=for-the-badge"/>
<img src="https://img.shields.io/badge/STATUS-PROTOTYPE-F59E0B?style=for-the-badge"/>

**Designed & Developed by Raja Sharma**

*A robust 4-wheel-drive robotic platform with zero-radius turning and wireless Bluetooth control.*

</div>

---

<div align="center">

## ◈ ABOUT THE PROJECT

</div>

**Project X · Remote Car** is a compact, battery-powered robotic ground vehicle designed for indoor traversal. It is built on the Arduino Nano platform and uses two L298N dual H-bridge motor drivers to independently control four DC gear motors.

The system is controlled wirelessly via an HC-05 Bluetooth module, pairing with any standard Android device running a Bluetooth serial terminal app. The differential-drive architecture allows the rover to execute zero-radius (skid) turns without needing a steering servo.

> **CORE OBJECTIVE**
>
> Provide a reliable, low-latency wireless remote-controlled platform capable of omnidirectional movement and differential steering on indoor surfaces.

---

<div align="center">

## ◈ KEY FEATURES

</div>

| FEATURE | DESCRIPTION |
|:---|:---|
| 📡 Wireless Control | HC-05 Bluetooth module, 10m operational range |
| ⚙️ Dual Motor Drivers | Two L298N modules handle high-current load across 4 motors |
| 🔄 Zero-Radius Turns | Skid-steer differential steering for tight navigation |
| 🔋 Battery Powered | 2S/3S Li-ion pack for motor and logic power |
| ⏱️ Low Latency | Sub-100ms response time from Bluetooth command to motor actuation |

---

<div align="center">

## ◈ HARDWARE CONFIGURATION

</div>

| COMPONENT | SPECIFICATION | QTY |
|:---|:---|:---:|
| Arduino Nano | ATmega328P, 5V, 16MHz | 1 |
| L298N Motor Driver | Dual H-Bridge Module | 2 |
| HC-05 Bluetooth | 2.4GHz RF Serial Transceiver | 1 |
| DC Gear Motor | 3V–6V Dual-Shaft BO | 4 |
| Wheels | 65mm Rubber Grip | 4 |
| Chassis | Circular Base Plate | 1 |
| Battery | 7.4V–11.1V (2S/3S 18650) | 1 |

### GPIO Pin Mapping

| ARDUINO NANO | COMPONENT | FUNCTION |
|:---:|:---|:---|
| D0 (RX) | HC-05 TXD | Receives ASCII commands |
| D1 (TX) | HC-05 RXD | Serial debug output |
| D2 | L298N #1 & #2 IN1 | Left Motors Forward |
| D3 | L298N #1 & #2 IN2 | Left Motors Reverse |
| D4 | L298N #1 & #2 IN3 | Right Motors Forward |
| D5 | L298N #1 & #2 IN4 | Right Motors Reverse |
| 5V | HC-05 VCC | Logic supply |
| GND | System Ground | Common ground plane |

<details>
<summary><b>⚡ Power & Wiring Notes</b></summary>

- **Motor Power:** Connect battery positive to the 12V terminal of **both** L298N modules via the master switch.
- **Logic Power:** Use the 5V output from one L298N to power the Arduino Nano VIN and HC-05 VCC.
- **Common Ground:** Tie all grounds (Battery, Arduino, both L298Ns, HC-05) together.
- **HC-05 RX Pin:** Use a voltage divider (1kΩ & 2kΩ) from Arduino TX to HC-05 RXD to drop 5V logic to 3.3V.
</details>

---

<div align="center">

## ◈ CONTROL PROTOCOL

</div>

The rover accepts single-byte ASCII commands over Bluetooth at **9600 bps**.

| KEY | ACTION | LEFT MOTORS (IN1, IN2) | RIGHT MOTORS (IN3, IN4) |
|:---:|:---|:---|:---|
| `U` | Forward | HIGH, LOW | HIGH, LOW |
| `D` | Backward | LOW, HIGH | LOW, HIGH |
| `L` | Turn Left | HIGH, LOW | LOW, HIGH |
| `R` | Turn Right | LOW, HIGH | HIGH, LOW |
| `S` | Stop | LOW, LOW | LOW, LOW |

---

<div align="center">

## ◈ GETTING STARTED

</div>

### 01 — Clone Repository
```bash
git clone https://github.com/luciferofx/projectxweb.git
