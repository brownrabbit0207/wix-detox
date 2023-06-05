const scrollViewDriver = {
  byId: () => by.id('FSScrollActions.scrollView'),
  element: () => element(scrollViewDriver.byId()),
  listItem: (index) => element(by.text(`Text${index}`)),
  firstItem: () => scrollViewDriver.listItem(1),
};

module.exports = {
  scrollViewDriver
};
