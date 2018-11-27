const PubSub = require('../helpers/pub_sub.js');


const ResultsView = function(container){
  this.container = container;
};

ResultsView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:selected-family-ready', (event) => {
    const family = event.detail;
    this.renderFamilyInfo(family);
  });
};

ResultsView.prototype.createLi = function(textContent, ul) {
  const li = document.createElement('li');
  li.textContent = textContent;
  ul.appendChild(li);
};

ResultsView.prototype.renderFamilyInfo = function(instrumentFamily) {
  const header = document.createElement('h2');
  header.textContent = instrumentFamily.name;

  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = instrumentFamily.description;

  this.container.innerHTML = '';
  this.container.appendChild(header);
  this.container.appendChild(infoParagraph);
};







module.exports = ResultsView;
