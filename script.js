// Fungsi untuk mencari nama dalam absensi
document.getElementById('searchInput').addEventListener('keyup', function() {
    const filter = this.value.toLowerCase();
    const rows = document.querySelectorAll('#attendanceTable tbody tr');
    
    rows.forEach(row => {
        const nameCell = row.cells[1]; // Kolom nama ada di index 1
        const name = nameCell.textContent || nameCell.innerText;
        
        if (name.toLowerCase().indexOf(filter) > -1) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
});

// Fungsi untuk menyorot baris yang diklik
document.querySelectorAll('#attendanceTable tbody tr').forEach(row => {
    row.addEventListener('click', () => {
        row.classList.toggle('highlighted');
    });
});
