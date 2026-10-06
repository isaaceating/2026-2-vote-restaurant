const restaurants = [
  {
    name: '客家本色', type: '客家合菜',
    address: '新竹縣竹北市光明一路466號',
    price: '約 NT$500／人（公開均消參考）',
    feature: '客家風味合菜，客家小炒、白切雞與梅干扣肉等下飯料理，適合多人分享。',
    map: 'https://maps.app.goo.gl/DZtMj9Q9CoVgNmYNA',
    details: 'https://www.opentable.com.tw/restaurant/profile/310505',
    source: 'https://ifoodie.tw/restaurant/6a70a046eb74c4ab672a89d7',
    sourceName: '愛食記／店家訂位頁',
    photoSource: 'https://www.ubereats.com/tw/store/客家本色-竹北店/G8B9yn0kXi6078MMseusjg',
    photoName: '店家 Uber Eats 頁面',
    images: ['https://tb-static.uber.com/prod/image-proc/processed_images/dbc5c5cfab370a17b04018822d5fa380/5283d81c664b43c5f57a3a186d273063.jpeg']
  },
  {
    name: '彼刻 Piccola Enoteca', type: '義式餐酒館',
    address: '新竹縣竹北市成功二街102號',
    price: '義大利麵約 NT$380–580／份；部分品項較高',
    feature: '自製新鮮義大利麵、義式前菜與燉飯，搭配豐富的義大利葡萄酒選擇。',
    map: 'https://maps.app.goo.gl/k3yaar41cvi19VsC7',
    details: 'https://www.piccolaenoteca.com/menu',
    source: 'https://www.piccolaenoteca.com/menu', sourceName: '彼刻官方菜單',
    photoSource: 'https://www.piccolaenoteca.com/', photoName: '彼刻官方網站',
    images: ['https://lirp.cdn-website.com/5d5e4871/dms3rep/multi/opt/20181205-_DSC9351-2-1920w.jpg','https://lirp.cdn-website.com/5d5e4871/dms3rep/multi/opt/20181204-_DSC8802-2-1920w.jpg']
  },
  {
    name: '暖肴聚所｜台菜料理', type: '當代台菜',
    address: '新竹縣竹北市勝利八街一段405號1樓',
    price: '待確認（合菜依人數與點餐內容計算）',
    feature: '以經典台菜手路為基礎，融合閩菜、客家與眷村飲食元素，適合圍桌共享。',
    map: 'https://maps.app.goo.gl/Ln5ADrn48XYQoRce7',
    details: 'https://ground-food.com/brands/yu-dew',
    source: 'https://ground-food.com/brands/yu-dew', sourceName: '葛朗餐飲官方網站',
    photoSource: 'https://ground-food.com/brands/yu-dew', photoName: '葛朗餐飲官方網站',
    images: ['https://ground-food.com/wp-content/uploads/2026/08/DSC_4183-800x533.jpg']
  },
  {
    name: '呷奔來坐 懷舊食客', type: '古早味熱炒・客家菜',
    address: '新竹縣竹北市六家五路一段129號',
    price: '約 NT$300–500／人（2024 食記參考）',
    feature: '復古懷舊空間，供應客家菜與家常熱炒；多人一起點合菜，可分享更多菜色。',
    map: 'https://maps.app.goo.gl/ubpdJroC455XibrTA',
    details: 'https://www.gomaji.com/store/129565',
    source: 'https://carlming.net/24039', sourceName: '卡爾茗食記（2024）',
    photoSource: 'https://www.gomaji.com/store/129565', photoName: 'Gomaji 店家頁面',
    images: ['https://picdn.gomaji.com/uploads/stores/565/129565/226136/IMG_0033.jpg','https://picdn.gomaji.com/uploads/stores/565/129565/226136/IMG_0009.jpg']
  }
];

const externalLink = (url, label, className = '') => {
  const a = document.createElement('a');
  a.href = url; a.textContent = label; a.className = className;
  a.target = '_blank'; a.rel = 'noopener noreferrer'; return a;
};

restaurants.forEach((item, index) => {
  const card = document.createElement('article'); card.className = 'card';
  const photo = document.createElement('div'); photo.className = 'image-wrap';
  const img = document.createElement('img');
  img.src = item.images[0]; img.alt = `${item.name}餐廳或餐點照片`;
  img.loading = index > 1 ? 'lazy' : 'eager'; img.decoding = 'async';
  img.addEventListener('error', () => { img.hidden = true; });
  const overlay = document.createElement('div'); overlay.className = 'overlay';
  const caption = document.createElement('div'); caption.className = 'image-text';
  const type = document.createElement('div'); type.className = 'type'; type.textContent = item.type;
  const name = document.createElement('h3'); name.textContent = item.name;
  caption.append(type, name); photo.append(img, overlay, caption);
  if (item.images.length > 1) {
    let current = 0;
    const next = document.createElement('button'); next.type = 'button'; next.className = 'photo-button';
    next.textContent = `照片 1 / ${item.images.length}`;
    next.setAttribute('aria-label', `查看${item.name}下一張照片`);
    next.addEventListener('click', () => {
      current = (current + 1) % item.images.length;
      img.hidden = false; img.src = item.images[current];
      next.textContent = `照片 ${current + 1} / ${item.images.length}`;
    }); photo.append(next);
  }
  const content = document.createElement('div'); content.className = 'content';
  const info = document.createElement('dl'); info.className = 'info';
  [['地址', item.address], ['價位', item.price], ['特色', item.feature]].forEach(([label, value]) => {
    const row = document.createElement('div'), dt = document.createElement('dt'), dd = document.createElement('dd');
    dt.textContent = label; dd.textContent = value; row.append(dt, dd); info.append(row);
  });
  const actions = document.createElement('div'); actions.className = 'actions';
  actions.append(externalLink(item.details, index === 1 ? '查看菜單' : '餐廳資訊', 'btn btn-secondary'), externalLink(item.map, '查看地圖', 'btn btn-dark'));
  const source = document.createElement('div'); source.className = 'source';
  source.append('資料：', externalLink(item.source, item.sourceName), ' · 照片：', externalLink(item.photoSource, item.photoName));
  content.append(info, actions, source); card.append(photo, content);
  document.getElementById('restaurant-grid').append(card);
});

const config = window.EVENT_CONFIG;
document.getElementById('event-title').textContent = config.title;
document.getElementById('event-date').textContent = config.date;
document.getElementById('event-deadline').textContent = config.deadline;
if (/^https:\/\/(docs\.google\.com\/forms\/|forms\.gle\/)/.test(config.formUrl)) {
  const link = document.getElementById('vote-link');
  link.href = config.formUrl; link.target = '_blank'; link.rel = 'noopener noreferrer';
  link.removeAttribute('aria-disabled'); link.textContent = '前往投票';
  document.getElementById('vote-status').textContent = '請填寫參加意願，並選擇你想去的餐廳。';
}
