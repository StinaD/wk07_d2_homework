const PubSub = require('./helpers/pub_sub.js');
const MenuView = require('./views/menu_view.js');
const ResultsView = require('./views/results_view.js');
const InstrumentFamilies = require('./models/instrument_families.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectElement = document.querySelector('select#instrument-families');
  const menuView = new MenuView(selectElement);
  menuView.bindEvents();


  const dataSource = new InstrumentFamilies();
  dataSource.bindEvents();

});
