function downloadPdf() {
  const pdfUrl = 'Resume.pdf';
  const downloadLink = document.createElement('a');
  downloadLink.href = pdfUrl;
  downloadLink.download = 'Resume'; 
  downloadLink.click();
}