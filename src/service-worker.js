const OFFLINE_URL = '/pages/offline/';

importScripts('sw-toolbox.js');

self.toolbox.precache([
    'assets/firestarter/css/main.css',
    'assets/firestarter/js/main.js',
    'assets/firestarter/css/fonts/icomoon.woff',
    'manifest.json',
    OFFLINE_URL,
    'index.html',
    '/'
]);

self.toolbox.router.default = self.toolbox.networkFirst;

self.toolbox.router.get('/(.*)', function (req, vals, opts) {
    return self.toolbox.networkFirst(req, vals, opts)
        .catch(function (error) {
            if (req.method === 'GET' && req.headers.get('accept').includes('text/html')) {
                return self.toolbox.cacheOnly(new Request(OFFLINE_URL), vals, opts);
            }
            throw error;
        });
    });

