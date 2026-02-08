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
    const colIdx = cell.cellIndex;
    const bad = ['None', '0', 'RTMP', 'N/A', '720p30', '720p60'];
    const limited = ['1080p30', 'Basic', '1'];
    const goodKeywords = ['SRTLA', '1080p60', 'Advanced', 'Unlimited'];

    const matches = (arr) => {
      if (colIdx === 3) {
        return arr.includes(text);
      }
      return arr.some(key => text.includes(key));
    };

    if (matches(goodKeywords)) {
      cell.classList.add('status-good');
    } else if (matches(limited)) {
      cell.classList.add('status-limited');
    } else if (matches(bad)) {
      cell.classList.add('status-bad');
    }

    if (colIdx === 5 || colIdx === 6) {
      const num = parseInt(text);
      if (!isNaN(num) && num >= 2) {
        cell.classList.remove('status-bad', 'status-limited');
        cell.classList.add('status-good');
      }
    }
  });
});
