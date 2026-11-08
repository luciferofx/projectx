# ⚡ PROJECT X: Multi-Project Robotics & IoT Ecosystem

An integrated engineering repository developed by a team of 7 Computer Science / IP students. **Project X** houses distinct automated engineering solutions ranging from autonomous AI robotics to smart IoT security and child-care automation.

---

## 📂 Sub-Projects Overview

Har project apni dedicated directory me organized hai, jisme uska firmware, circuit guide aur asset images maujood hain:

| Project | Controller / Tech | Core Capability | Directory |
| :--- | :--- | :--- | :--- |
| **Project X Robot**[cite: 3] | Raspberry Pi 4[cite: 2] + Arduino[cite: 8] | AI Vision Face Detection[cite: 2], Movement[cite: 6], OLED Expressions[cite: 10], TTS Speech[cite: 8, 10] | [`projects/projectx-robot/`](./projects/projectx-robot/) |
| **Project X Army Gate** | Arduino Uno | Ultrasonic Vehicle Detection, Automatic Security Boom Barrier | [`projects/projectx-army-gate/`](./projects/projectx-army-gate/) |
| **Project X Baby Cradle** | NodeMCU ESP8266 | IoT Swing Motor Speed Control & Local Web Server Automation | [`projects/projectx-baby-cradle/`](./projects/projectx-baby-cradle/) |
| **Project X ID Scanner** | Arduino + I2C Display | Smart Identity Verification & Attendance Terminal | [`projects/projectx-id-scanner/`](./projects/projectx-id-scanner/) |

---

## 🛠️ Monorepo Structure

```text
projectxweb/
├── .gitignore
├── LICENSE
├── README.md                          # Master Ecosystem Guide
│
├── projects/
│   ├── projectx-robot/                # Autonomous AI Robot Platform
│   │   ├── README.md
│   │   ├── index.html                 # Dedicated Robot Showcase Page
│   │   ├── assets/images/             # Robot Photos & Schematics
│   │   ├── firmware/                  # movementcontrol.ino & displaycoding.ino[cite: 11]
│   │   └── ai-vision/                 # OpenCV Face Recognition Scripts
│   │
│   ├── projectx-army-gate/            # Smart Security Boom Barrier
│   │   ├── README.md
│   │   ├── index.html                 # Dedicated Gate System Page
│   │   ├── assets/images/             # Gate Hardware & Setup Photos
│   │   └── firmware/                  # armygate.ino[cite: 11]
│   │
│   ├── projectx-baby-cradle/          # Automatic IoT Swing Cradle
│   │   ├── README.md
│   │   ├── index.html                 # Dedicated Cradle Control Page
│   │   ├── assets/images/             # Cradle Mechanical & Circuit Photos
│   │   └── firmware/                  # babycradle.ino[cite: 11]
│   │
│   └── projectx-id-scanner/           # Identity Verification Terminal
│       ├── README.md
│       ├── index.html                 # Scanner HUD Interface Page
│       ├── assets/images/
│       └── firmware/                  # displayidscanner.ino[cite: 11]
│
└── index.html                         # Master Central Web Portal
