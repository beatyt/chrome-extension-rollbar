const style = `
.fixed_headers {
  border-collapse: collapse !important;
}
.fixed_headers td,
.fixed_headers thead th {
  padding: 5px !important;
  text-align: left !important;
  resize: both;
  overflow: auto;
  width: 100%;
  height: 100%;
}
.fixed_headers thead, textarea {
  background-color: #333 !important;
  color: #FDFDFD !important;
}
.fixed_headers thead tr {
  position: relative !important;
}
.fixed_headers tbody tr:nth-child(even) {
  background-color: #DDD !important;
}

.fixed_headers thead th {
  position: sticky !important;
  top: 0 !important;  /* REQUIRED: https://stackoverflow.com/a/43707215 */
  background-color: #333 !important;
  z-index: 10 !important;
  resize: horizontal !important;
  overflow: auto !important;
  min-width: 70px !important;
}
`

function run() {
  console.info('Rollbar UI fix extension loaded')

  // append stylesheet
  const customStyle = document.createElement('style', { type: 'text/css' });
  customStyle.type = 'text/css';
  document.head.appendChild(customStyle);

  customStyle.appendChild(document.createTextNode(style));
}

run();
