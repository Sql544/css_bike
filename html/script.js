function onUpdateReady() {
  console.log(0);
  var message = document.getElementById('update')
  message.innerHTML = '已更新，<a href="javascript:void(0)" onclick="location.reload()">刷新</a>'
}

window.applicationCache.addEventListener('updateready', onUpdateReady, false)

if (window.applicationCache.status === window.applicationCache.UPDATEREADY) {
  onUpdateReady()
}
