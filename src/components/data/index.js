
import skillsData from './pages/skills.js';
import cardsData from './pages/cards.js';
import educationData from './pages/education.js';

const getPageContext = (pagePath) => {
    console.log("Page Path to Provide:", pagePath);

    let pageData = {};

    switch (pagePath) {
        case '/index.html':
        case '/':
            pageData = {
                ...skillsData,
                ...cardsData,
                ...educationData
            };
            break;
    }

    console.log(
        "Data to Inject:",
        JSON.stringify(pageData, null, 2)
    );

    return pageData;
};

export default getPageContext;
