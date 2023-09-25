console.log('ext loaded');
// alert('aler fro mextension');

chrome.action.onClicked.addListener(
  () => {
    alert('aler fro mextension');
  }
);

chrome.action.enable(
  () => {
    alert('aler fro mextension');
  }
)
