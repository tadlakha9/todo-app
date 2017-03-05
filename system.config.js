(function (global) {
  System.config({
    paths: {
      'npm:': 'node_modules/',
    },
    map: {
      app: 'dist',
      angular: 'npm:angular',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/upgrade/static': 'npm:@angular/upgrade/bundles/upgrade-static.umd.js',
      rxjs: 'npm:rxjs',
    },
    packages: {
      app: {main: 'main', defaultExtension: 'js'},
      angular: {main: 'index', defaultExtension: 'js'},
      rxjs: {defaultExtension: 'js'},
    },
  });
})(this);