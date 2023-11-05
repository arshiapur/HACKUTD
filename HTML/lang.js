function getUserLanguage() {
    return navigator.language || navigator.userLanguage;
}

async function translateText() {
    const userLanguage = getUserLanguage();
    const translatedText = await api.translate('en', userLanguage, 'Hello, world!');
    document.getElementById('translatedText').innerText = translatedText;
}

translateText();