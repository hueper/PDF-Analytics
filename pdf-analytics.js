(function(){
  'use strict';
  var doc = 'pdfdefault',
    download = document.getElementById('download'),
    secDownload = document.getElementById('secondaryDownload'),
    print = document.getElementById('print'),
    secPrint = document.getElementById('secondaryPrint');

  if (window.location.search) {
    doc = window.location.search.split('=')[1];
  }
  /**
   * Track pagechange
   */
  window.addEventListener('pagechange', function pagechange(evt) {
    window.trackInteraction(doc, 'page-'+evt.pageNumber);
  });

  /**
   * Track click on download
   */
  download.addEventListener('click', function click(evt) {
    window.trackInteraction(doc, 'download');
  });

  /**
   * Track click on secDownload
   */
  secDownload.addEventListener('click', function click(evt) {
    window.trackInteraction(doc, 'download');
  });

  /**
   * Track click on print
   */
  print.addEventListener('click', function click(evt) {
    window.trackInteraction(doc, 'print');
  });

  /**
   * Track click on secPrint
   */
  secPrint.addEventListener('click', function click(evt) {
    window.trackInteraction(doc, 'print');
  });
})();
