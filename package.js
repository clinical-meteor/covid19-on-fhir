Package.describe({
    name: 'symptomatic:covid19-on-fhir',
    version: '0.6.0',
    summary: 'COVID19 Hackathon',
    git: 'https://github.com/symptomatic/covid19-hackathon',
    documentation: 'README.md'
});
  

Package.onUse(function(api) {
    api.versionsFrom('1.4');
    
    api.use('meteor@1.9.3');
    api.use('webapp@1.10.0');
    api.use('ecmascript@0.15.0');

    api.use('react-meteor-data@2.1.2');

    api.use('session');
    api.use('mongo');
    api.use('http');
    api.use('ejson');
    api.use('random');
    api.use('fourseven:scss');

    api.use('clinical:hl7-fhir-data-infrastructure');

    api.addFiles('lib/TestingMethods.js');    
    
    api.mainModule('index.jsx', 'client');
});
