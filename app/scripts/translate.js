var translate = ['$translateProvider', function ($translateProvider) {
  // TODO: load these via a separate file, don't really need to for now

  $translateProvider.translations('en', {

  });

  // $translateProvider.translations('de', {
  //   'TITLE': 'Hallo',
  //   'FOO': 'Dies ist ein Paragraph'
  // });

  $translateProvider.preferredLanguage('en');
}];

module.exports = translate;
