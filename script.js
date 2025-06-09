function submitScore() {
  const score = parseInt(document.getElementById("viewScore").value);
  if (score < 3) {
    alert("提示：评分较低，部分评论将被隐藏");
  } else {
    alert("感谢您的评价！");
  }
}

const map = L.map('map').setView([47.5608, -122.0651], 14);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © OpenStreetMap contributors'
}).addTo(map);
L.marker([47.5608, -122.0651]).addTo(map)
  .bindPopup('Lake Sammamish State Park')
  .openPopup();
