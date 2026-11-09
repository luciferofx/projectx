<!DOCTYPE html>
<html lang="en">
<head>
<!--
  ============================================================
  PROJECT X · INTELLIGENT ROBOT (PREMIUM SHOWCASE)
  File: index.html
  Version: 4.0.0 · Build 2024.12
  ============================================================
-->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<meta name="theme-color" content="#05070d">
<meta name="description" content="Project X · Intelligent AI Robot Dashboard & Showcase">
<title>Project X — Intelligent Robot</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&family=Orbitron:wght@600;700;800&display=swap" rel="stylesheet">
<!-- Global CSS -->
<link rel="stylesheet" href="../../styles.css">
<style>
  /* Small Local Tweaks for Premium Look */
  .premium-card {
    background: linear-gradient(165deg, rgba(13, 21, 34, 0.7), rgba(17, 27, 44, 0.9));
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(47, 212, 255, 0.15);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    border-radius: 16px;
    transition: transform 0.3s ease, border-color 0.3s ease;
  }
  .premium-card:hover {
    border-color: rgba(176, 106, 255, 0.4);
    transform: translateY(-2px);
  }
  .icon-box {
    width: 48px; height: 48px; border-radius: 12px; display: grid; place-items: center;
    font-size: 1.5rem; margin-bottom: 12px;
    background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.05);
  }
  .hero-gradient {
    background: linear-gradient(to top, #05070d 0%, rgba(5,7,13,0.8) 50%, rgba(5,7,13,0) 100%);
  }
</style>
</head>
<body>
<div class="shell">

  <!-- ===== TOPBAR ===== -->
  <div class="topbar">
    <div class="brand">
      <div class="mark" style="border-color: var(--violet); box-shadow: 0 0 20px rgba(176,106,255,0.3);">
        <b style="color: var(--violet); text-shadow: 0 0 10px var(--violet);">PX</b>
      </div>
      <div>
        <h1>PROJECT X · AI ROBOT</h1>
        <p style="color: var(--violet);">Intelligent Collaborative Effort</p>
      </div>
    </div>
    <div class="status-pill live" style="border-color: var(--violet); color: var(--violet);">
      <span class="led" style="background: var(--violet); box-shadow: 0 0 8px var(--violet);"></span>
      <span>SYSTEM ONLINE</span>
    </div>
  </div>

  <!-- ===== HERO SECTION ===== -->
  <section class="premium-card" style="padding: 0; overflow: hidden; margin-bottom: 24px; border-color: var(--violet);">
    <div style="position: relative;">
      <!-- Fallback color if image is missing -->
      <div style="background: #0a0f18; min-height: 350px; display: flex; justify-content: center; align-items: center;">
        <img src="assets/images/prototype.jpeg" alt="Robot Prototype" style="width: 100%; max-height: 500px; object-fit: cover; display: block; opacity: 0.9;">
      </div>
      <div class="hero-gradient" style="position: absolute; bottom: 0; left: 0; width: 100%; padding: 40px 30px 30px 30px;">
        <div style="display: inline-block; background: rgba(176,106,255,0.15); border: 1px solid var(--violet); color: var(--violet); font-family: var(--mono); font-size: 0.7rem; padding: 4px 10px; border-radius: 99px; margin-bottom: 12px; font-weight: bold; letter-spacing: 1px;">FLAGSHIP PROJECT</div>
        <h2 style="font-family: var(--disp); font-size: clamp(1.8rem, 5vw, 3rem); color: #fff; text-shadow: 0 4px 15px rgba(0,0,0,0.9); margin-bottom: 8px; line-height: 1.1; letter-spacing: 1px;">THE INTELLIGENT<br>ROBOT</h2>
        <p style="font-family: var(--mono); font-size: clamp(0.75rem, 2.5vw, 0.95rem); color: var(--cyan); letter-spacing: 2px;">ARDUINO MEGA · OPENCV AI · MG995 SERVOS · HC-05</p>
      </div>
    </div>
  </section>

  <div class="cols">
    
    <!-- ===== MAIN COLUMN ===== -->
    <div class="main-col">
      
      <!-- FEATURES -->
      <section class="premium-card" style="padding: 24px;">
        <h3 style="color: #fff; font-size: 1.1rem; margin-bottom: 20px; display: flex; align-items: center; gap: 10px;">
          <span style="width: 4px; height: 20px; background: var(--violet); border-radius: 2px;"></span> Project Functions
        </h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px;">
          
          <div style="background: rgba(176,106,255,0.04); border: 1px solid rgba(176,106,255,0.15); border-radius: 12px; padding: 20px;">
            <div class="icon-box" style="color: var(--violet);">📱</div>
            <div style="font-family: var(--sans); font-weight: 800; color: #fff; font-size: 0.95rem; margin-bottom: 6px;">Mobile / IP Control</div>
            <div style="font-family: var(--mono); font-size: 0.72rem; color: var(--ink-dim); line-height: 1.6;">The robot can be controlled remotely through a mobile app or IP interface.</div>
          </div>

          <div style="background: rgba(111,240,194,0.04); border: 1px solid rgba(111,240,194,0.15); border-radius: 12px; padding: 20px;">
            <div class="icon-box" style="color: var(--mint);">😊</div>
            <div style="font-family: var(--sans); font-weight: 800; color: #fff; font-size: 0.95rem; margin-bottom: 6px;">Facial Expressions</div>
            <div style="font-family: var(--mono); font-size: 0.72rem; color: var(--ink-dim); line-height: 1.6;">The robot can simulate various facial expressions using servo motors.</div>
          </div>

          <div style="background: rgba(255,183,0,0.04); border: 1px solid rgba(255,183,0,0.15); border-radius: 12px; padding: 20px;">
            <div class="icon-box" style="color: var(--amber);">🗣️</div>
            <div style="font-family: var(--sans); font-weight: 800; color: #fff; font-size: 0.95rem; margin-bottom: 6px;">Bluetooth & Speech</div>
            <div style="font-family: var(--mono); font-size: 0.72rem; color: var(--ink-dim); line-height: 1.6;">Connects via Bluetooth and is capable of speech using text-to-speech.</div>
          </div>

          <div style="background: rgba(255,93,115,0.04); border: 1px solid rgba(255,93,115,0.15); border-radius: 12px; padding: 20px;">
            <div class="icon-box" style="color: var(--rose);">🤖</div>
            <div style="font-family: var(--sans); font-weight: 800; color: #fff; font-size: 0.95rem; margin-bottom: 6px;">Autonomous Movement</div>
            <div style="font-family: var(--mono); font-size: 0.72rem; color: var(--ink-dim); line-height: 1.6;">The robot is capable of moving from one location to another autonomously.</div>
          </div>

        </div>
      </section>

      <!-- AI VISION SIMULATOR -->
      <section class="premium-card" style="padding: 24px; margin-top: 20px;">
        <h3 style="color: #fff; font-size: 1.1rem; margin-bottom: 20px; display: flex; align-items: center; gap: 10px;">
          <span style="width: 4px; height: 20px; background: var(--mint); border-radius: 2px;"></span> AI Vision Simulator
        </h3>
        
        <div style="background: #03060c; border: 1px solid var(--line); border-radius: 12px; padding: 20px;">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            
            <!-- Camera Feed -->
            <div style="position: relative; background: #0a1018; border: 1px solid var(--line-hi); border-radius: 8px; aspect-ratio: 4/3; overflow: hidden; display: flex; justify-content: center; align-items: center;">
              <div id="cameraFeed" style="width: 100%; height: 100%; background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px); position: relative;">
                <div id="scanline" style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: var(--mint); box-shadow: 0 0 10px var(--mint); animation: scan 2s linear infinite;"></div>
                <div id="faceBox" style="position: absolute; top: 30%; left: 30%; width: 40%; height: 50%; border: 2px solid var(--mint); opacity: 0; transition: opacity 0.3s; box-shadow: 0 0 15px var(--mint);">
                  <div id="faceName" style="position: absolute; bottom: -24px; left: 0; width: 100%; background: var(--mint); color: #000; font-family: var(--mono); font-size: 0.75rem; font-weight: bold; text-align: center; padding: 3px;">RAJA</div>
                </div>
              </div>
              <div style="position: absolute; top: 8px; left: 8px; font-family: var(--mono); font-size: 0.65rem; color: var(--rose); display: flex; align-items: center; gap: 6px;">
                <span style="width: 6px; height: 6px; border-radius: 50%; background: var(--rose); animation: blink 1s infinite;"></span> LIVE
              </div>
            </div>

            <!-- Detection Log -->
            <div style="display: flex; flex-direction: column;">
              <div style="font-family: var(--mono); font-size: 0.7rem; color: var(--ink-dim); margin-bottom: 8px; border-bottom: 1px solid var(--line); padding-bottom: 6px;">DETECTION LOG</div>
              <div id="aiLog" style="flex-grow: 1; height: 150px; overflow-y: auto; font-family: var(--mono); font-size: 0.72rem; line-height: 1.6; color: var(--ink-faint);">
                <div>[System] AI Model Loaded.</div>
                <div>[System] Scanning for faces...</div>
              </div>
              <button class="primary" style="margin-top: 16px; width: 100%;" onclick="simulateAI()">▶ START RECOGNITION</button>
            </div>

          </div>
        </div>
      </section>

      <!-- HARDWARE BLUEPRINTS -->
      <section class="premium-card" style="padding: 24px; margin-top: 20px;">
        <h3 style="color: #fff; font-size: 1.1rem; margin-bottom: 20px; display: flex; align-items: center; gap: 10px;">
          <span style="width: 4px; height: 20px; background: var(--cyan); border-radius: 2px;"></span> Hardware Blueprints
        </h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 12px;">
          <!-- Item 1 -->
          <div style="background: #0a0610; border: 1px solid var(--line); border-radius: 8px; padding: 8px; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            <img src="assets/images/1.jfif" style="width: 100%; border-radius: 4px; aspect-ratio: 1/1; object-fit: cover;">
            <div style="font-family: var(--mono); font-size: 0.65rem; color: var(--ink-dim); text-align: center; margin-top: 6px;">Chassis Base</div>
          </div>
          <div style="background: #0a0610; border: 1px solid var(--line); border-radius: 8px; padding: 8px; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            <img src="assets/images/4.jpeg" style="width: 100%; border-radius: 4px; aspect-ratio: 1/1; object-fit: cover;">
            <div style="font-family: var(--mono); font-size: 0.65rem; color: var(--ink-dim); text-align: center; margin-top: 6px;">Servo Mount</div>
          </div>
          <div style="background: #0a0610; border: 1px solid var(--line); border-radius: 8px; padding: 8px; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            <img src="assets/images/5.jpeg" style="width: 100%; border-radius: 4px; aspect-ratio: 1/1; object-fit: cover;">
            <div style="font-family: var(--mono); font-size: 0.65rem; color: var(--ink-dim); text-align: center; margin-top: 6px;">Arm Joint</div>
          </div>
          <div style="background: #0a0610; border: 1px solid var(--line); border-radius: 8px; padding: 8px; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            <img src="assets/images/6.jpeg" style="width: 100%; border-radius: 4px; aspect-ratio: 1/1; object-fit: cover;">
            <div style="font-family: var(--mono); font-size: 0.65rem; color: var(--ink-dim); text-align: center; margin-top: 6px;">Head Bracket</div>
          </div>
          <div style="background: #0a0610; border: 1px solid var(--line); border-radius: 8px; padding: 8px; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            <img src="assets/images/7.jpeg" style="width: 100%; border-radius: 4px; aspect-ratio: 1/1; object-fit: cover;">
            <div style="font-family: var(--mono); font-size: 0.65rem; color: var(--ink-dim); text-align: center; margin-top: 6px;">Gear Assembly</div>
          </div>
          <div style="background: #0a0610; border: 1px solid var(--line); border-radius: 8px; padding: 8px; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            <img src="assets/images/8.jpeg" style="width: 100%; border-radius: 4px; aspect-ratio: 1/1; object-fit: cover;">
            <div style="font-family: var(--mono); font-size: 0.65rem; color: var(--ink-dim); text-align: center; margin-top: 6px;">Chest Panel</div>
          </div>
          <div style="background: #0a0610; border: 1px solid var(--line); border-radius: 8px; padding: 8px; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            <img src="assets/images/9.jpeg" style="width: 100%; border-radius: 4px; aspect-ratio: 1/1; object-fit: cover;">
            <div style="font-family: var(--mono); font-size: 0.65rem; color: var(--ink-dim); text-align: center; margin-top: 6px;">Wiring Layout</div>
          </div>
          <div style="background: #0a0610; border: 1px solid var(--line); border-radius: 8px; padding: 8px; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            <img src="assets/images/10.jpeg" style="width: 100%; border-radius: 4px; aspect-ratio: 1/1; object-fit: cover;">
            <div style="font-family: var(--mono); font-size: 0.65rem; color: var(--ink-dim); text-align: center; margin-top: 6px;">Motor Mounts</div>
          </div>
          <div style="background: #0a0610; border: 1px solid var(--line); border-radius: 8px; padding: 8px; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            <img src="assets/images/11.jpeg" style="width: 100%; border-radius: 4px; aspect-ratio: 1/1; object-fit: cover;">
            <div style="font-family: var(--mono); font-size: 0.65rem; color: var(--ink-dim); text-align: center; margin-top: 6px;">Full Frame</div>
          </div>
          <div style="background: #0a0610; border: 1px solid var(--line); border-radius: 8px; padding: 8px; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            <img src="assets/images/12.jpeg" style="width: 100%; border-radius: 4px; aspect-ratio: 1/1; object-fit: cover;">
            <div style="font-family: var(--mono); font-size: 0.65rem; color: var(--ink-dim); text-align: center; margin-top: 6px;">Sensor Mount</div>
          </div>
          <div style="background: #0a0610; border: 1px solid var(--line); border-radius: 8px; padding: 8px; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            <img src="assets/images/13.jpeg" style="width: 100%; border-radius: 4px; aspect-ratio: 1/1; object-fit: cover;">
            <div style="font-family: var(--mono); font-size: 0.65rem; color: var(--ink-dim); text-align: center; margin-top: 6px;">Back Plate</div>
          </div>
          <div style="background: #0a0610; border: 1px solid var(--line); border-radius: 8px; padding: 8px; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            <img src="assets/images/14.jpeg" style="width: 100%; border-radius: 4px; aspect-ratio: 1/1; object-fit: cover;">
            <div style="font-family: var(--mono); font-size: 0.65rem; color: var(--ink-dim); text-align: center; margin-top: 6px;">Battery Tray</div>
          </div>
          <div style="background: #0a0610; border: 1px solid var(--line); border-radius: 8px; padding: 8px; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            <img src="assets/images/15.jpeg" style="width: 100%; border-radius: 4px; aspect-ratio: 1/1; object-fit: cover;">
            <div style="font-family: var(--mono); font-size: 0.65rem; color: var(--ink-dim); text-align: center; margin-top: 6px;">Final Assembly</div>
          </div>
          <div style="background: #0a0610; border: 1px solid var(--line); border-radius: 8px; padding: 8px; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            <img src="assets/images/16.jpeg" style="width: 100%; border-radius: 4px; aspect-ratio: 1/1; object-fit: cover;">
            <div style="font-family: var(--mono); font-size: 0.65rem; color: var(--ink-dim); text-align: center; margin-top: 6px;">CAD Render</div>
          </div>
        </div>
      </section>

    </div>

    <!-- ===== SIDEBAR ===== -->
    <div>
      
      <!-- TEAM MEMBERS -->
      <section class="premium-card" style="padding: 20px;">
        <h3 style="color: #fff; font-size: 1rem; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
          <span style="color: var(--violet);">👥</span> Team Effort
        </h3>
        <div class="statuslist">
          <div class="srow" style="background: rgba(176,106,255,0.1); border-color: rgba(176,106,255,0.3);">
            <span class="k" style="color: var(--violet); font-weight: bold;">Lead Dev</span>
            <span class="v" style="color: var(--violet); font-weight: bold;">RAJA</span>
          </div>
          <div class="srow"><span class="k">Member</span><span class="v">Anshul Varsha</span></div>
          <div class="srow"><span class="k">Member</span><span class="v">Purushan</span></div>
          <div class="srow"><span class="k">Member</span><span class="v">Abhay</span></div>
          <div class="srow"><span class="k">Member</span><span class="v">Hamdan</span></div>
          <div class="srow"><span class="k">Member</span><span class="v">Shriyansh</span></div>
        </div>
      </section>

      <!-- DISPLAY VIDEOS -->
      <section class="premium-card" style="padding: 20px; margin-top: 20px;">
        <h3 style="color: #fff; font-size: 1rem; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
          <span style="color: var(--cyan);">📺</span> Display Telemetry
        </h3>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          
          <div style="background: #0a0610; border: 1px solid var(--line); border-radius: 8px; overflow: hidden;">
            <video src="assets/images/display/display%20prototype.mp4" controls preload="metadata" style="width: 100%; display: block; aspect-ratio: 16/9; object-fit: cover;"></video>
            <div style="padding: 10px; font-family: var(--mono); font-size: 0.7rem; color: var(--ink-dim); text-align: center; border-top: 1px solid var(--line);">DISPLAY PROTOTYPE</div>
          </div>

          <div style="background: #0a0610; border: 1px solid var(--line); border-radius: 8px; overflow: hidden;">
            <video src="assets/images/display/display%20result.mp4" controls preload="metadata" style="width: 100%; display: block; aspect-ratio: 16/9; object-fit: cover;"></video>
            <div style="padding: 10px; font-family: var(--mono); font-size: 0.7rem; color: var(--ink-dim); text-align: center; border-top: 1px solid var(--line);">DISPLAY RESULT</div>
          </div>

        </div>
      </section>

      <!-- CONTROL CONTROLS -->
      <section class="premium-card" style="padding: 20px; margin-top: 20px;">
        <h3 style="color: #fff; font-size: 1rem; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
          <span style="color: var(--mint);">🎮</span> Quick Controls
        </h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px;">
          <div></div>
          <button class="primary" onclick="moveRobot('F')" style="padding: 12px 0;">▲</button>
          <div></div>
          
          <button class="primary" onclick="moveRobot('L')" style="padding: 12px 0;">◀</button>
          <button class="danger" onclick="moveRobot('S')" style="padding: 12px 0; font-size: 0.7rem;">STOP</button>
          <button class="primary" onclick="moveRobot('R')" style="padding: 12px 0;">▶</button>
          
          <div></div>
          <button class="primary" onclick="moveRobot('B')" style="padding: 12px 0;">▼</button>
          <div></div>
        </div>
      </section>

    </div>
  </div>

  <footer style="margin-top: 40px; border-top: 1px solid var(--line); padding-top: 20px;">
    <span style="color: var(--violet);">PROJECT X · INTELLIGENT ROBOT</span>
    <span style="color: var(--ink-faint);">BUILD 4.0.0 · PREMIUM EDITION</span>
  </footer>
</div>

<style>
  @keyframes scan { 0% { top: 0; } 100% { top: 100%; } }
  @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
</style>

<script>
  const faces = ['RAJA', 'PURUSHAN', 'UNKNOWN', 'ABHAY'];
  const faceNames = ['Raja', 'Purushan', 'Unknown', 'Abhay'];
  let aiRunning = false;
  let matchCount = 0;

  function simulateAI() {
    if (aiRunning) return;
    aiRunning = true;
    const logBox = document.getElementById('aiLog');
    const faceBox = document.getElementById('faceBox');
    const nameBox = document.getElementById('faceName');
    
    logBox.innerHTML = '<div style="color:var(--cyan)">[System] AI Model Loaded.</div><div>[System] Scanning for faces...</div>';

    let step = 0;
    const interval = setInterval(() => {
      if (step >= faces.length) {
        clearInterval(interval);
        aiRunning = false;
        faceBox.style.opacity = '0';
        logBox.innerHTML += '<div style="color:var(--mint); margin-top:4px;">[System] Scan Complete.</div>';
        return;
      }

      const face = faces[step];
      const name = faceNames[step];

      faceBox.style.opacity = '1';
      nameBox.textContent = name;
      
      if (face !== 'UNKNOWN') {
        nameBox.style.background = 'var(--mint)';
        faceBox.style.borderColor = 'var(--mint)';
        logBox.innerHTML += `<div style="margin-top:4px;">[Match] Found: <b style="color:var(--mint)">${name}</b> (99.2%)</div>`;
        matchCount++;
      } else {
        nameBox.style.background = 'var(--rose)';
        faceBox.style.borderColor = 'var(--rose)';
        logBox.innerHTML += `<div style="margin-top:4px;">[Scan] Unknown face detected.</div>`;
      }
      
      logBox.scrollTop = logBox.scrollHeight;
      step++;
    }, 2000);
  }

  function moveRobot(cmd) {
    console.log(`Sending command: ${cmd}`);
  }
</script>
</body>
</html>
