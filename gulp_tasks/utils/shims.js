module.exports = {
  jquery: { exports: '$' },
  scrollTo: {
    // exports: null,
    depends: { 'jquery': '$' }
  },
  lodash: { exports: '_' },
  bootstrap: {
    depends: { 'jquery': '$' }
  }
};
