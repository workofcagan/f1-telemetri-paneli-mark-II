self.addEventListener('install', (e) => {
  console.log('Service Worker: Kuruldu');
});

self.addEventListener('fetch', (e) => {
  // İnternet isteklerini buradan yönetebiliriz
});