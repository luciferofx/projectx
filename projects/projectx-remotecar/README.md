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

**Project X · Remote Car** is a compact, battery-powered robotic ground vehicle designed for indoor traversal. It is built on the Arduino Nano platform and uses two L298N dual H-bridge motor drivers to control four DC gear motors.

The system is controlled wirelessly through an HC-05 Bluetooth module, paired with an Android smartphone running the **SriTu Hobby** application.

> **📱 REQUIRED ANDROID APP**
>
> This project uses the SriTu Hobby application for Bluetooth-based rover control.
>
> <a href="https://play.google.com/store/apps/details?id=com.srituhobby">
> <img src="https://img.shields.io/badge/DOWNLOAD-SriTu%20Hobby%20App-38BDF8?style=for-the-badge&logo=google-play&logoColor=white" alt="Download SriTu Hobby"/>
> </a>

---

<div align="center">

## ◈ KEY FEATURES

</div>

| FEATURE | DESCRIPTION |
|:---|:---|
| 📡 Wireless Control | HC-05 Bluetooth communication |
| ⚙️ Dual Motor Drivers | Two L298N modules for four DC motors |
| 🔄 Zero-Radius Turns | Differential steering for tight navigation |
| 🔋 Battery Powered | Rechargeable battery-powered platform |
| 📱 Android Control | SriTu Hobby mobile application |
| 🛞 4WD Platform | Four independently mounted drive wheels |

---

<div align="center">

## ◈ HARDWARE CONFIGURATION

</div>

| COMPONENT | SPECIFICATION | QTY |
|:---|:---|:---:|
| Arduino Nano | ATmega328P, 5V, 16MHz | 1 |
| L298N Motor Driver | Dual H-Bridge Module | 2 |
| HC-05 Bluetooth | Serial Bluetooth Module | 1 |
| DC Gear Motor | BO-Type DC Gear Motor | 4 |
| Wheels | 65mm Rubber Grip | 4 |
| Chassis | 4WD Circular Base Plate | 1 |
| Battery | Compatible rechargeable battery pack | 1 |

### GPIO Pin Mapping

| ARDUINO NANO | COMPONENT | FUNCTION |
|:---:|:---|:---|
| D0 (RX) | HC-05 TXD | Receives serial commands |
| D1 (TX) | HC-05 RXD | Serial communication |
| D2 | L298N Inputs | Left motor direction |
| D3 | L298N Inputs | Left motor direction |
| D4 | L298N Inputs | Right motor direction |
| D5 | L298N Inputs | Right motor direction |
| 5V | HC-05 VCC | Bluetooth logic supply |
| GND | System Ground | Common ground |

<details>
<summary><b>⚡ Power & Wiring Notes</b></summary>

- Verify the battery voltage against the motor and driver specifications.
- Use a suitable regulated supply for the Arduino and Bluetooth module.
- Connect all system grounds to a common ground.
- HC-05 RX uses 3.3V logic. Use an appropriate level shifter or voltage divider when connecting to a 5V Arduino TX output.
- Check the L298N regulator's ratings before using it to supply other components.

</details>

---

<div align="center">

## ◈ CONTROL PROTOCOL

</div>

The rover uses single-character commands over Bluetooth serial communication. The firmware and application must use matching command characters.

| KEY | ACTION |
|:---:|:---|
| `U` | Forward |
| `D` | Backward |
| `L` | Turn Left |
| `R` | Turn Right |
| `S` | Stop |

<caption>Actual command mapping depends on the uploaded Arduino firmware and SriTu Hobby app configuration.</caption>

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

### 03 — Flash Arduino Firmware

Open the firmware in Arduino IDE:

```text
firmware/
└── remotecar/
    └── remotecar.ino
```

| SETTING | VALUE |
|:---|:---|
| Board | Arduino Nano |
| Processor | ATmega328P |
| Port | Your connected COM / serial port |

Upload the firmware to your Arduino Nano.

### 04 — Install SriTu Hobby App

Download the Android application from Google Play Store.

<div align="center">

<a href="https://play.google.com/store/apps/details?id=com.srituhobby">
<img src="https://img.shields.io/badge/📱_DOWNLOAD-SriTu_Hobby_App-38BDF8?style=for-the-badge&logo=google-play&logoColor=white" alt="Download SriTu Hobby"/>
</a>

</div>

**Application:** SriTu Hobby

**Platform:** Android

**Download:** [Google Play Store](https://play.google.com/store/apps/details?id=com.srituhobby)

### 05 — Bluetooth Pairing

1. Switch on the rover.
2. Enable Bluetooth on your Android smartphone.
3. Find the HC-05 module in Bluetooth settings.
4. Pair with the module using its configured PIN, if requested.

### 06 — Control the Rover

1. Open the SriTu Hobby application.
2. Navigate to its Bluetooth Car Remote feature.
3. Connect to the HC-05 module.
4. Use the available joystick or on-screen controls.
5. Test the movement commands on a clear, flat surface.

---

<div align="center">

## ◈ SYSTEM ARCHITECTURE

</div>

```text
       ANDROID SMARTPHONE
       [ SriTu Hobby App ]
                |
         BLUETOOTH LINK
                |
          [ HC-05 MODULE ]
                |
           UART SERIAL
                |
         [ ARDUINO NANO ]
                |
          MOTOR CONTROL
                |
          +-----+-----+
          |           |
      [L298N #1]  [L298N #2]
          |           |
      LEFT MOTORS RIGHT MOTORS
          |           |
          +-----+-----+
                |
          [ 4WD CHASSIS ]
```

---

<div align="center">

## ◈ TROUBLESHOOTING

</div>

<details>
<summary><b>🔌 Bluetooth module not detected</b></summary>

- Check HC-05 power and ground connections.
- Confirm that the module is in pairing mode.
- Check Bluetooth permissions on Android.
- Restart the application and reconnect.

</details>

<details>
<summary><b>⚙️ Wheels spinning in the wrong direction</b></summary>

- Check motor polarity.
- Verify the motor driver connections.
- Confirm that the firmware direction mapping is correct.

</details>

<details>
<summary><b>📡 Commands not responding</b></summary>

- Confirm the HC-05 connection.
- Verify the serial baud rate.
- Check whether the app sends the commands expected by the firmware.
- Inspect the serial connections.

</details>

<details>
<summary><b>🔋 Rover resets under load</b></summary>

- Check battery condition and voltage stability.
- Verify the power supply can handle the motor load.
- Use a properly rated regulated supply for the controller.

</details>

---

<div align="center">

## ◈ FUTURE ROADMAP

</div>

| VERSION | FEATURE |
|:---:|:---|
| v1.1 | PWM speed control |
| v2.0 | HC-SR04 ultrasonic obstacle detection |
| v2.1 | Battery voltage monitoring |
| v3.0 | Dedicated Android controller |
| v3.1 | Live Bluetooth telemetry dashboard |

---

<div align="center">

## ◈ PROJECT INFORMATION

</div>

| DETAIL | INFORMATION |
|:---|:---|
| Project | Project X · Remote Car |
| Category | Robotics / Embedded Systems |
| Controller | Arduino Nano (ATmega328P) |
| Motor Driver | Dual L298N |
| Communication | Bluetooth (HC-05) |
| Android Application | SriTu Hobby |
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
