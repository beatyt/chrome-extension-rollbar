function run() {
  // fix table
  const table =
    document.evaluate(
      '//*[@id="instances"]/div[2]/table',
      document, null, XPathResult.FIRST_ORDERED_NODE_TYPE
    ).singleNodeValue;

  if (!table) {
    console.debug('Chrome-Extension-Rollar:  Could not locate table');
    return;
  }

  table.classList.add('fixed_headers')

  // fix cells to have widths
  const allCells = document.evaluate('//td', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE);

  for (let i = 0; i < allCells.snapshotLength; i++) {
    allCells.snapshotItem(i).style.width = "300px";
    allCells.snapshotItem(i).style.maxWidth = "300px";
    // allCells.snapshotItem(i).removeAttribute("nowrap");
  }
}

run();
