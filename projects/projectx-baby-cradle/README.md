 <div align="center">

<img src="assets/images/CradlePrototype.svg" width="850" alt="Project X Baby Cradle"/>

# 🍼 PROJECT X
## BABY CRADLE

### `IoT AUTOMATIC CRADLE SWING SYSTEM`

**SMART INFANT MONITORING · ESP8266 · IoT AUTOMATION**

<br/>

<a href="https://github.com/luciferofx/projectxweb">
  <img src="https://img.shields.io/badge/PROJECT%20X-ECOSYSTEM-8B5CF6?style=for-the-badge&logo=github&logoColor=white"/>
</a>
<img src="https://img.shields.io/badge/ESP8266-NODEMCU-00C9A7?style=for-the-badge&logo=espressif&logoColor=white"/>
<img src="https://img.shields.io/badge/CONNECTIVITY-WiFi-38BDF8?style=for-the-badge"/>
<img src="https://img.shields.io/badge/STATUS-PROTOTYPE-F59E0B?style=for-the-badge"/>

<br/><br/>

**Designed & Developed by Raja Sharma**

*An experimental IoT project built with electronics, embedded systems and web technologies.*

</div>

---

<div align="center">

## ◈ ABOUT THE PROJECT

</div>

**Project X · Baby Cradle** is an IoT-based automatic cradle swing prototype powered by the ESP8266 NodeMCU.

The system creates its own local Wi-Fi Access Point (`Baby Cradle`), allowing users to access a web-based control dashboard directly from their smartphones without requiring an external Wi-Fi router or internet connection.

The project combines embedded hardware, PWM motor control and a responsive web interface to demonstrate an interactive automated cradle prototype.

> **CORE OBJECTIVE**
>
> Demonstrate IoT-based motor control automation through a standalone Wi-Fi network and an interactive browser-based dashboard.

---

<div align="center">

## ◈ LIVE HARDWARE DEMONSTRATION

*Watch the actual prototype in operation.*

</div>

### 01 / Final Output — Dashboard + Cradle Swing

<div align="center">

<a href="https://github.com/luciferofx/projectxweb/blob/main/projects/projectx-baby-cradle/assets/images/final-output-of-babycradle.mp4">
<img src="https://img.shields.io/badge/▶%20WATCH%20FINAL%20OUTPUT-00C9A7?style=for-the-badge&logo=github&logoColor=white" alt="Watch Final Output"/>
</a>

</div>

### 02 / Motor Working — Hardware Demonstration

<div align="center">

<a href="https://github.com/luciferofx/projectxweb/blob/main/projects/projectx-baby-cradle/assets/images/baby%20cradle%20motor%20work.mp4">
<img src="https://img.shields.io/badge/▶%20WATCH%20MOTOR%20DEMO-8B5CF6?style=for-the-badge&logo=github&logoColor=white" alt="Watch Motor Demo"/>
</a>

</div>

---

<div align="center">

## ◈ KEY FEATURES

</div>

| FEATURE | DESCRIPTION |
|:---|:---|
| 📡 **Standalone Wi-Fi** | ESP8266 creates its own wireless network |
| 🎛️ **PWM Motor Control** | Adjustable motor speed from 0–255 |
| 🎨 **Animated Dashboard** | Interactive SVG cradle visualizer |
| ⚡ **Motor Controls** | Web-based Start / Stop functionality |
| 📱 **Responsive UI** | Mobile-first dashboard experience |
| 💾 **State Memory** | Last selected speed stored in localStorage |
| 🌐 **Offline Operation** | Local Wi-Fi control without internet |

---

<div align="center">

## ◈ HARDWARE CONFIGURATION

*Electronics · Components · Connectivity*

</div>

| COMPONENT | ROLE |
|:---|:---|
| ESP8266 NodeMCU | Main microcontroller |
| L298N Motor Driver | Motor control interface |
| DC Motor | Swing mechanism prototype |
| External Power Supply | Motor power |
| Jumper Wires | Electrical connections |
| Cradle Prototype Frame | Mechanical structure |

### GPIO Pin Mapping

| ESP8266 | GPIO | L298N | FUNCTION |
|:---:|:---:|:---:|:---|
| D2 | GPIO 4 | ENA | PWM Speed Control |
| D5 | GPIO 14 | IN1 | Direction Control |
| D6 | GPIO 12 | IN2 | Direction Control |
| GND | GND | GND | Common Ground |

<details>
<summary><b>⚡ Power Configuration & Hardware Notes</b></summary>

The ESP8266 and motor driver require an appropriate power arrangement.

- Follow the voltage specifications of the NodeMCU and motor driver.
- Use a suitable external motor power supply.
- Ensure a common ground where required.
- Never connect a motor directly to an ESP8266 GPIO.

</details>

---

<div align="center">

## ◈ GETTING STARTED

`01 CLONE` → `02 CONFIGURE` → `03 FLASH` → `04 CONNECT`

</div>

### 01 — Clone Repository

```bash
git clone https://github.com/luciferofx/projectxweb.git
```

### 02 — Navigate to Project

```bash
cd projectxweb/projects/projectx-baby-cradle
```

### 03 — Flash ESP8266 Firmware

Open the following firmware file in Arduino IDE:

```text
firmware/
└── babycradle/
    └── babycradle.ino
```

**Board Configuration**

| SETTING | VALUE |
|:---|:---|
| Board | NodeMCU 1.0 (ESP-12E Module) |
| IDE | Arduino IDE |
| Firmware | ESP8266 C++ |

Install the ESP8266 board package if required, connect your NodeMCU and upload the firmware.

### 04 — Connect to the Device

Once the firmware starts, the ESP8266 creates its own Wi-Fi network.

<div align="center">

| NETWORK CONFIGURATION | VALUE |
|:---|:---|
| SSID | `Baby Cradle` |
| Password | Open Network |
| Gateway | `192.168.4.1` |

</div>

Connect your smartphone or laptop to the network.

### 05 — Launch Dashboard

Open your browser and visit:

<div align="center">

# `http://192.168.4.1`

<sub>Local ESP8266 Web Server</sub>

</div>

### 06 — Control the Prototype

- Start or stop motor operation through the dashboard.
- Adjust motor speed using the PWM slider.
- Observe the animated cradle visualizer.

---

<div align="center">

## ◈ SYSTEM ARCHITECTURE

*How the hardware and software communicate*

</div>

```text
       ┌──────────────────────────┐
       │    SMARTPHONE / LAPTOP   │
       └────────────┬─────────────┘
                    │
               Wi-Fi Network
                    │
       ┌────────────▼─────────────┐
       │    ESP8266 ACCESS POINT  │
       │      192.168.4.1         │
       └────────────┬─────────────┘
                    │
       ┌────────────▼─────────────┐
       │      WEB DASHBOARD       │
       │   HTML / CSS / JavaScript│
       └────────────┬─────────────┘
                    │
                HTTP API
                    │
       ┌────────────▼─────────────┐
       │      ESP8266 GPIO        │
       │       PWM OUTPUT         │
       └────────────┬─────────────┘
                    │
       ┌────────────▼─────────────┐
       │      L298N DRIVER        │
       └────────────┬─────────────┘
                    │
       ┌────────────▼─────────────┐
       │         DC MOTOR         │
       └──────────────────────────┘
```

### API Endpoints

| ROUTE | OPERATION |
|:---|:---|
| `/` | Serves the web dashboard |
| `/forward` | Starts motor operation |
| `/stop` | Stops motor operation |
| `/speed?value=XXX` | Updates PWM speed |

---

<div align="center">

## ◈ TECHNOLOGY STACK

<img src="https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=cplusplus&logoColor=white"/>
<img src="https://img.shields.io/badge/Arduino_IDE-00979D?style=for-the-badge&logo=arduino&logoColor=white"/>
<img src="https://img.shields.io/badge/ESP8266-E7352C?style=for-the-badge&logo=espressif&logoColor=white"/>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
<img src="https://img.shields.io/badge/SVG-FFB13B?style=for-the-badge&logo=svg&logoColor=black"/>

</div>

### Libraries

| LIBRARY | PURPOSE |
|:---|:---|
| `ESP8266WiFi.h` | Wi-Fi Access Point |
| `ESP8266WebServer.h` | HTTP Server |
| PWM | Motor speed control |

---

<div align="center">

## ◈ TROUBLESHOOTING

</div>

<details>
<summary><b>📡 Wi-Fi network is not visible</b></summary>

Check ESP8266 power, firmware upload and board operation.

</details>

<details>
<summary><b>⚙️ Motor is not spinning</b></summary>

Check motor driver connections, external power and motor wiring.

</details>

<details>
<summary><b>🌐 Dashboard is not opening</b></summary>

Ensure your device is connected to the `Baby Cradle` Wi-Fi network and open `192.168.4.1`.

</details>

<details>
<summary><b>🎛️ Speed slider is not working</b></summary>

Check the ENA connection and PWM configuration.

</details>

<details>
<summary><b>🔌 ESP8266 keeps restarting</b></summary>

Verify power stability, connections and the firmware.

</details>

---

<div align="center">

## ⚠️ SAFETY & DISCLAIMER

</div>

**This project is an educational electronics prototype, not a certified infant-care device.**

- Never use this prototype with a real infant.
- Do not leave the motorized mechanism unattended.
- Secure all electrical components and wiring.
- Real-world infant-care applications require independent mechanical safety systems, professional engineering and appropriate certification.

---

<div align="center">

## ◈ PROJECT INFORMATION

| DETAIL | INFORMATION |
|:---|:---|
| Project | Project X · Baby Cradle |
| Category | Internet of Things |
| Controller | ESP8266 NodeMCU |
| Motor Driver | L298N |
| Interface | Web Dashboard |
| Developer | Raja Sharma |
| Year | 2024 |
| License | MIT |

<br/>

<a href="https://github.com/luciferofx/projectxweb">
<img src="https://img.shields.io/badge/EXPLORE-PROJECT%20X-8B5CF6?style=for-the-badge&logo=github&logoColor=white"/>
</a>

<a href="https://github.com/luciferofx">
<img src="https://img.shields.io/badge/DEVELOPER-RAJA%20SHARMA-00C9A7?style=for-the-badge&logo=github&logoColor=white"/>
</a>

<br/><br/>

### ⚡ BUILT WITH CURIOSITY, ELECTRONICS & CODE.

*Experiment. Engineer. Innovate.*

**© 2024 Raja Sharma · Project X Ecosystem**

</div>
