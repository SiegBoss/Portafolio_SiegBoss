document.getElementById('btn-programming').addEventListener('click', function() {
    document.querySelector('.programming').style.display = 'flex';
    document.querySelector('.mechatronic').style.display = 'none';
    this.classList.add('active');
    document.getElementById('btn-mechatronic').classList.remove('active');
});

document.getElementById('btn-mechatronic').addEventListener('click', function() {
    document.querySelector('.programming').style.display = 'none';
    document.querySelector('.mechatronic').style.display = 'flex';
    this.classList.add('active');
    document.getElementById('btn-programming').classList.remove('active');
});
