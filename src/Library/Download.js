export const downloadCanvas = (canvasId, filename) => {
  var link = document.createElement('a');
  link.href = document.getElementById(canvasId).toDataURL();
  link.download = filename;
  link.click();
};
