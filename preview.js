(() => {
  const width = 1280;
  const height = width * 210 / 297;
  function fitPages() {
    document.querySelectorAll('.sheet-frame').forEach(frame => {
      const scale = frame.clientWidth / width;
      frame.style.height = `${height * scale}px`;
      frame.querySelector('.sheet').style.transform = `scale(${scale})`;
    });
  }
  addEventListener('resize', fitPages);
  fitPages();
})();
