document.getElementById('toggle-details').addEventListener('click', () => {
    const details = document.getElementById('details');
    if (details.style.display === 'none') {
        details.style.display = 'block';
        document.getElementById('toggle-details').textContent = 'Sembunyikan Detail';
    } else {
        details.style.display = 'none';
        document.getElementById('toggle-details').textContent = 'Lihat Detail Lengkap';
    }
});