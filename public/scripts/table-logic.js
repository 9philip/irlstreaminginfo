window.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('tableSearch');
  const tableRows = document.querySelectorAll('tbody tr');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();

      tableRows.forEach(row => {
        const text = row.innerText.toLowerCase();
        row.style.display = text.includes(searchTerm) ? '' : 'none';
      });
    });
  }

    document.querySelectorAll('td:nth-child(n+4)').forEach(cell => {
      const text = cell.innerText.trim();
      const columnIndex = cell.cellIndex + 1;

      const bad = ['None', '0', 'RTMP', 'N/A', '720p30', '720p60'];
      const limited = ['1080p30', 'Basic', '1'];
      const goodKeywords = ['SRTLA', '1080p60', 'Advanced', 'Unlimited'];

      if (limited.some(key => text.includes(key))) {
        cell.classList.add('status-limited');
      }
        
      else if (goodKeywords.some(key => text.includes(key))) {
        cell.classList.add('status-good');
      }

      else if (bad.some(key => text.includes(key))) {
        cell.classList.add('status-bad');
      }

      if (columnIndex === 6 || columnIndex === 7) {
        const num = parseInt(text);
        if (!isNaN(num) && num >= 2) {
          cell.classList.remove('status-bad', 'status-limited');
          cell.classList.add('status-good');
        }
      }
    });
});
