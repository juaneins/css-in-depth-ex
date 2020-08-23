let rootElement = document.documentElement;
let styles = getComputedStyle(rootElement);
let mainColor = styles.getPropertyValue('--main-color');
let mainBgColor = styles.getPropertyValue('--main-bg');
console.log(String(mainColor).trim());
console.log(String(mainBgColor).trim());
rootElement = document.documentElement;
rootElement.style.setProperty('--main-bg','#cdf');