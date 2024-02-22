function downloadPdf() {
  const pdfUrl = 'Rezume EN.pdf';
  const downloadLink = document.createElement('a');
  downloadLink.href = pdfUrl;
  downloadLink.download = 'Rezume EN'; 
  downloadLink.click();
}