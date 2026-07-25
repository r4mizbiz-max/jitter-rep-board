// Paste into script.google.com (new project) -> Deploy -> Web app -> Execute as Me -> Anyone
const SHEET_ID = "13WwiKgLkVNo37YtHHn3bGtkHsDfGyoaVlVyrb0jI-aE";

function doGet() {
  const values = SpreadsheetApp.openById(SHEET_ID).getSheets()[0].getDataRange().getValues();
  return ContentService
    .createTextOutput(JSON.stringify({ updated: new Date().toISOString(), rows: values }))
    .setMimeType(ContentService.MimeType.JSON);
}
