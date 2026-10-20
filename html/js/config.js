const CONFIG = {
    server: {
        name: "FM Script Roleplay",
        logo: "img/logo.png",
        caseNumber: "FILE NO. 7741-B",
    },

    background: {
        type: "video",                  // "video" | "image"
        videoSrc: "video/background.mp4", // only used if type is "video"
        imageSrc: "img/background.jpg",
        overlayOpacity: 0.2,            // 0 to 1, darkens background for readability
        videoLoop: true,
        videoMuted: true,
    },
    music: {
        enabled: true,
        src: "sounds/audio.mp3",
        loop: true,
        defaultVolume: 0.1,
        autoplay: true,
    },
    progress: {
        showPercentage: true,
        loadingTexts: [
            "DECRYPTING ASSET STREAM...",
            "VERIFYING CLEARANCE...",
            "ESTABLISHING UPLINK...",
            "FINALIZING ENTRY...",
        ],
    },

    // ---------------------------------------------------------------
    // TABS / CATEGORY SYSTEM ("FOLDER TABS")
    // Add, remove, or reorder freely. content supports basic HTML.
    // ---------------------------------------------------------------
    tabs: [
        {
            id: "updates",
            label: "Updates",
            content: `
                <p class="doc-meta">LOG — JUNE 2026</p>
                <h3>v1.4.3</h3>
                <ul>
                    <li>New Police Stations added</li>
                    <li>Police Vehicles updated</li>
                    <li>Added new EMS callouts</li>
                    <li>Fixed various minor bugs</li>
                    <li>Performance improvements to streaming</li>
                    <li>Added new vehicle import system</li>
                </ul>
                <h3>v1.4.2</h3>
                <ul>
                    <li>Added new vehicle import system</li>
                    <li>Fixed banking duplication exploit</li>
                    <li>Reworked job center UI</li>
                    <li>Performance improvements to streaming</li>
                </ul>
                <h3>v1.4.1</h3>
                <ul>
                    <li>New apartment interiors added</li>
                    <li>Police MDT updated</li>
                </ul>
            `,
        },
        {
            id: "team",
            label: "Team",
            content: `
                <p class="doc-meta">PERSONNEL ROSTER</p>
                <div class="dossier-row">
                    <span class="dossier-role">Owner</span>
                    <span class="dossier-name">YourName</span>
                </div>
                <div class="dossier-row">
                    <span class="dossier-role">Lead Developer</span>
                    <span class="dossier-name">DevName</span>
                </div>
                <div class="dossier-row">
                    <span class="dossier-role">Community Manager</span>
                    <span class="dossier-name">CMName</span>
                </div>
                <div class="dossier-row">
                    <span class="dossier-role">Head Admin</span>
                    <span class="dossier-name">AdminName</span>
                </div>
            `,
        },
        {
            id: "rules",
            label: "Rules",
            content: `
                <p class="doc-meta">CONDUCT AGREEMENT</p>
                <ol>
                    <li>No metagaming or powergaming.</li>
                    <li>Stay in character at all times in-game.</li>
                    <li>No racism, hate speech, or harassment.</li>
                    <li>Combat logging will result in a ban.</li>
                    <li>Follow staff instructions during incidents.</li>
                    <li>Fail RP and NVL are not tolerated.</li>
                </ol>
                <p class="doc-footer">Full rules on file at <strong>yourserver.com/rules</strong></p>
            `,
        },
        {
            id: "social",
            label: "Social",
            content: `
                <p class="doc-meta">EXTERNAL CONTACTS</p>

                <div class="contact-list">

                    <button class="contact-row copy-link"
                            data-link="https://discord.gg/yourinvite">
                        <span class="contact-label">Discord</span>
                        <span class="contact-arrow">Copy</span>
                    </button>

                    <button class="contact-row copy-link"
                            data-link="https://twitter.com/yourserver">
                        <span class="contact-label">Twitter / X</span>
                        <span class="contact-arrow">Copy</span>
                    </button>

                    <button class="contact-row copy-link"
                            data-link="https://youtube.com/yourserver">
                        <span class="contact-label">YouTube</span>
                        <span class="contact-arrow">Copy</span>
                    </button>

                    <button class="contact-row copy-link"
                            data-link="https://tiktok.com/@yourserver">
                        <span class="contact-label">TikTok</span>
                        <span class="contact-arrow">Copy</span>
                    </button>

                    <button class="contact-row copy-link"
                            data-link="https://yourserver.com">
                        <span class="contact-label">Website</span>
                        <span class="contact-arrow">Copy</span>
                    </button>

                </div>
            `,
        },
    ],
    keybinds: [
        { key: "M", action: "Mute audio" },
        { key: "←  →", action: "Switch tab" },
        { key: "TAB", action: "Toggle file" },
    ],
    misc: {
        defaultTab: "updates",  // id of the tab to show by default
        showLoadingTextRotation: true,
        loadingTextRotationMs: 2600,
    },
};
