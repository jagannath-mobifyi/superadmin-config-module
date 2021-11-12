export const downloadUrl = (url: string, filename: string) => {
    var element = document.createElement('a');
    document.body.appendChild(element);
    element.href = url;
    element.download = filename || 'config.js';
    element.click();
    window.URL.revokeObjectURL(url)
    document.body.removeChild(element);
}