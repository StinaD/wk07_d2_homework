const PubSub = require('../helpers/pub_sub.js');


const MenuView = function(element) {
  this.element = element;
};

MenuView.prototype.bindEvents = function(){
  PubSub.subscribe('Instrumentfamilies:all', (event) => {
    const allInstrumentFamilies = event.detail;
    this.populateDropdown(allInstrumentFamilies);
  });

  this.element.addEventListener('change', (event) => {
  const selectedIndex = event.target.value;
  PubSub.publish('SelectView:selected', selectedIndex);
  });

};


MenuView.prototype.populateDropdown = function(instrumentFamiliesData){
  instrumentFamiliesData.forEach((family, index) => {
    const option = document.createElement('option');
    option.textContent = family.name;
    option.value = index;
    this.element.appendChild(option);
  });
};



module.exports = MenuView;
