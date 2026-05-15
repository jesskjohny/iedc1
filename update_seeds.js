const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Find the seeds section
let seedsStart = html.indexOf('<section id=\"seeds\"');
let seedsEnd = html.indexOf('</section>', seedsStart) + 10;
let seedsContent = html.substring(seedsStart, seedsEnd);

let newSeedsContent = `        <section id="seeds" class="section team-section">
            <div class="section-container">
                <div class="section-header text-center scroll-reveal">
                    <h2 class="section-title">SEEDS <span class="highlight">MEMBERS</span></h2>
                    <p class="monospace-text">// SYSTEM TRAINEES // FOUNDATION CORE</p>
                    <p class="hero-description" style="margin-top: 1rem;">seeds are the upcoming icons of iedc</p>
                </div>

                <div class="team-grid">
`;

let regex = /<h3[^>]*>([^<]+)<\/h3>[\s\S]*?<!-- Seed 1 -->[\s\S]*?<img src="([^"]+)" alt="([^"]+)"[^>]*>[\s\S]*?<h3 class="member-name"[^>]*>([^<]+)<\/h3>[\s\S]*?<!-- Seed 2 -->[\s\S]*?<img src="([^"]+)" alt="([^"]+)"[^>]*>[\s\S]*?<h3 class="member-name"[^>]*>([^<]+)<\/h3>/g;
let match;
while ((match = regex.exec(seedsContent)) !== null) {
    let roleTitle = match[1].trim(); 
    let roleName = roleTitle.replace(' SEEDS', '');
    let img1 = match[2];
    let alt1 = match[3];
    let name1 = match[4];
    let img2 = match[5];
    let alt2 = match[6];
    let name2 = match[7];
    
    newSeedsContent += `
                    <!-- ${roleName} Seed 1 -->
                    <div class="team-card scroll-reveal">
                        <div class="member-image-wrapper">
                            <img src="${img1}" alt="${alt1}" class="member-image" onerror="this.src='assets/team/placeholder.png'">
                        </div>
                        <div class="member-info">
                            <h3 class="member-name">${name1}</h3>
                            <p class="member-role highlight">${roleName} SEED</p>
                            <div class="member-socials">
                                <a href="#" class="social-icon-small">LI</a>
                                <a href="#" class="social-icon-small">GH</a>
                            </div>
                        </div>
                    </div>

                    <!-- ${roleName} Seed 2 -->
                    <div class="team-card scroll-reveal">
                        <div class="member-image-wrapper">
                            <img src="${img2}" alt="${alt2}" class="member-image" onerror="this.src='assets/team/placeholder.png'">
                        </div>
                        <div class="member-info">
                            <h3 class="member-name">${name2}</h3>
                            <p class="member-role highlight">${roleName} SEED</p>
                            <div class="member-socials">
                                <a href="#" class="social-icon-small">LI</a>
                                <a href="#" class="social-icon-small">GH</a>
                            </div>
                        </div>
                    </div>
`;
}

newSeedsContent += `                </div>
            </div>
        </section>`;

html = html.substring(0, seedsStart) + newSeedsContent + html.substring(seedsEnd);
fs.writeFileSync('index.html', html);
console.log('Seeds updated successfully');
