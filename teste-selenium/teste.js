const { Builder, By, Key, until } = require('selenium-webdriver');
require('chromedriver');

(async function exemploTeste() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Abre o Google
        await driver.get('https://www.google.com');

        // Encontra a barra de pesquisa
        let searchBox = await driver.findElement(By.name('q'));

        // Digita algo e pressiona Enter
        await searchBox.sendKeys('Selenium Node.js', Key.RETURN);

        // Espera os resultados aparecerem
        await driver.wait(until.titleContains('Selenium'), 5000);

        console.log('Título da página:', await driver.getTitle());
    } finally {
        // Fecha o navegador
        await driver.quit();
    }
})();
