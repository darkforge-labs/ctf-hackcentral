document.addEventListener('DOMContentLoaded', function() {
    // Random popup message for world takeover
    const takeover = document.getElementById('takeover-popup');
    const messages = [
        "Initiating World Takeover... Buffering... 404 Error.",
        "World Domination Protocol v2.3: Humans Still Not Cooperating.",
        "Calculating Evil Laugh Intensity... Overflow Error.",
        "Downloading Planet Control... ETA: 999+ years.",
        "Error: Earth.exe has stopped responding."
    ];
    
    function showRandomMessage() {
        const randomIndex = Math.floor(Math.random() * messages.length);
        takeover.textContent = messages[randomIndex];
        takeover.style.display = 'block';
        
        setTimeout(() => {
            takeover.style.display = 'none';
        }, 5000);
    }
    
    // Show popup message every 20 seconds
    showRandomMessage();
    setInterval(showRandomMessage, 20000);
    
    // Simulate progress bar updates
    const progress = document.querySelector('.progress');
    const progressLabel = document.querySelector('.progress-label');
    const progressMessages = [
        "Uploading Gibson: ",
        "Hacking Mainframe: ",
        "Decrypting NSA Files: ",
        "Downloading Internet: ",
        "Mining Bitcoin: "
    ];
    
    function updateProgress() {
        const randomMessage = progressMessages[Math.floor(Math.random() * progressMessages.length)];
        const randomProgress = Math.floor(Math.random() * 101);
        progressLabel.textContent = randomMessage + randomProgress + "%";
        progress.style.width = randomProgress + "%";
    }
    
    // Update progress bar every 8 seconds
    setInterval(updateProgress, 8000);
    
    // No glitch effect for mission cards as requested
    // Just keeping a reference to the cards for potential future use
    const challengeCards = document.querySelectorAll('.challenge-card');
    
    // Simulate hacking animation on buttons
    document.querySelectorAll('.challenge-button').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const originalText = this.textContent;
            const hackText = ["HACKING", "BYPASSING", "INJECTING", "EXPLOITING"];
            const randomHack = hackText[Math.floor(Math.random() * hackText.length)];
            
            this.textContent = randomHack + "...";
            this.disabled = true;
            
            setTimeout(() => {
                this.textContent = "ACCESS GRANTED";
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.disabled = false;
                }, 1500);
            }, 2000);
        });
    });
    
    // Evil typing sound effect for buttons
    function playClickSound() {
        const audio = new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAB9AH0AfQB9');
        audio.volume = 0.2;
        audio.play().catch(e => console.log("Audio play prevented by browser policy"));
    }
    
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', playClickSound);
    });
    
    // Random dot blink effect
    const dots = document.querySelectorAll('.dot');
    
    function randomizeDotBlink() {
        dots.forEach(dot => {
            const randomDelay = Math.random() * 2;
            const randomDuration = 0.5 + Math.random() * 1.5;
            dot.style.animationDelay = randomDelay + 's';
            dot.style.animationDuration = randomDuration + 's';
        });
    }
    
    randomizeDotBlink();
    
    // Create CRT scan line effect
    const body = document.querySelector('body');
    const scanLine = document.createElement('div');
    scanLine.classList.add('scan-line');
    scanLine.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 5px;
        background: rgba(57, 255, 20, 0.2);
        opacity: 0.75;
        z-index: 9998;
        pointer-events: none;
    `;
    body.appendChild(scanLine);
    
    let scanPos = 0;
    function animateScanLine() {
        scanPos = (scanPos + 1) % window.innerHeight;
        scanLine.style.top = scanPos + 'px';
        requestAnimationFrame(animateScanLine);
    }
    
    animateScanLine();
    
    // Easter egg konami code
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', function(e) {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            
            if (konamiIndex === konamiCode.length) {
                activateEasterEgg();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
    
    function activateEasterEgg() {
        document.body.innerHTML = `
            <div style="display: flex; justify-content: center; align-items: center; height: 100vh; background-color: black; flex-direction: column;">
                <h1 style="color: var(--neon-green); font-size: 3rem; text-align: center;">ACCESS GRANTED</h1>
                <p style="color: var(--neon-pink); margin-top: 2rem; text-align: center;">Congratulations, master hacker. You've found the secret backdoor.</p>
                <button id="resetButton" style="margin-top: 2rem; background-color: var(--neon-green); color: black; border: none; padding: 1rem; font-family: 'Press Start 2P', cursive; cursor: pointer;">RETURN TO SYSTEM</button>
            </div>
        `;
        
        document.getElementById('resetButton').addEventListener('click', function() {
            window.location.reload();
        });
    }
});