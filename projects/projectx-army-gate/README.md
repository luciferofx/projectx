<div align="center">

<img src="assets/images/gate-prototype.svg" width="800" alt="Project X Army Gate Prototype"/>

# 🚧 PROJECT X
## ARMY GATE

### `RFID AUTOMATED SECURITY BARRIER`

**SMART ACCESS CONTROL · ARDUINO MEGA · RFID · SERVO MOTOR**

<img src="https://img.shields.io/badge/PROJECT%20X-ECOSYSTEM-8B5CF6?style=for-the-badge&logo=github&logoColor=white"/>
<img src="https://img.shields.io/badge/ARDUINO-MEGA-00979D?style=for-the-badge&logo=arduino&logoColor=white"/>
<img src="https://img.shields.io/badge/SECURITY-RFID%20MFRC522-38BDF8?style=for-the-badge"/>
<img src="https://img.shields.io/badge/STATUS-PROTOTYPE-F59E0B?style=for-the-badge"/>

**Designed & Developed by Raja Sharma**

*An automated boom barrier system built with RFID authentication and servo mechanics.*

</div>

---

<div align="center">

## ◈ ABOUT THE PROJECT

</div>

**Project X · Army Gate** is a secure, RFID-based access control system. It simulates a military-grade boom barrier that opens only when an authorized RFID card is scanned.

The core logic resides on an **Arduino Mega**, which reads RFID tags via the **MFRC522 module**. If the card's UID matches the authorized list, a **Servo Motor** lifts the barrier, a Green LED turns on, and a buzzer stays silent. If an unauthorized card is scanned, access is denied, a Red LED flashes, and the buzzer alarms.

> **CORE OBJECTIVE**
>
> Demonstrate secure, automated physical access control using RFID authentication and servo-driven mechanical barriers.

---

<div align="center">

## ◈ SYSTEM ARCHITECTURE & WORKFLOW

</div>

```text
       [ RFID CARD ]
             │
       (13.56 MHz RF)
             │
      [ MFRC522 Reader ]
             │
      (SPI Interface)
             │
       [ ARDUINO MEGA ]
             │
     ┌───────┴───────┐
     │               │
[ Access Granted ] [ Access Denied ]
     │               │
[ Servo Opens ]    [ Buzzer Sounds ]
[ Green LED ]      [ Red LED ]
     │               │
(Wait 5 secs)      (Wait 1 sec)
     │               │
[ Gate Closes ]    [ System Reset ]
