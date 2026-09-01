// 최소 서비스 워커: PWA 설치 요건 충족용
// (오프라인 캐싱은 하지 않음 - 항상 최신 파일 + 온라인 상태에서 구글 시트 전송 필요하므로)
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // 그냥 네트워크 요청 그대로 통과 (캐싱 없음)
  return;
});
