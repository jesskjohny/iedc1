const fs = require('fs');

const appendCss = `

/* Seeds Grid Layout Override */
#seeds .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    gap: 4rem 2rem;
}

#seeds .team-card {
    padding-bottom: 2rem;
    gap: 1rem;
}

#seeds .member-name {
    font-size: clamp(2rem, 4vw, 2.5rem);
    max-width: 300px;
}

#seeds .member-image-wrapper {
    max-width: 300px;
}
`;

fs.appendFileSync('styles.css', appendCss);
console.log('Appended Seeds CSS rules to styles.css');
