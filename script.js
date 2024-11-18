const GAME_URLS = [
    "https://ItzMicMac.github.io/MemoryMinigame",
    "https://ItzMicMac.github.io/HLCrate",
    "https://ItzMicMac.github.io/HLDes",
    "https://ItzMicMac.github.io/HLRVCooking",
    "https://ItzMicMac.github.io/HLHouse",
    "https://ItzMicMac.github.io/HLUsb",
    "https://ItzMicMac.github.io/CubicDrill"
]
const GAME_NAMES = [
    "Prestige Memory Minigame",
    "Highlife Crate Minigame",
    "Highlife Des Minigame",
    "Highlife Cooking Minigame",
    "Highlife House Minigame",
    "Highlife USB Minigame",
    "Cubic Drill Minigame"
];

function addButtons(){
    const app_con = document.querySelector(".app-container");
    for (let i = 0; i < GAME_NAMES.length; i++) {
        const button = document.createElement("button");
        button.classList.add("app-button");
        button.innerHTML = GAME_NAMES[i];
        button.onclick = () => {
            window.location.href = GAME_URLS[i];
        }
        app_con.appendChild(button);
    }
}