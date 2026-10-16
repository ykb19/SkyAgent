document.getElementById('copy-link').addEventListener('click', async () => {
  const status = document.getElementById('copy-status');
  try {
    await navigator.clipboard.writeText('https://github.com/ykb19/SkyAgent');
    status.textContent = 'Project link copied.';
  } catch {
    status.textContent = 'Project link: https://github.com/ykb19/SkyAgent';
  }
});
