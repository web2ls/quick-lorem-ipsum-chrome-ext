console.log('ext calling');

navigator.clipboard.writeText("This is the text to be copied").then(() => {
  console.log('Content copied to clipboard');
  /* Resolved - text copied to clipboard successfully */
},() => {
  console.error('Failed to copy');
  /* Rejected - text failed to copy to the clipboard */
});