document.getElementById('jumpingElement').addEventListener('mouseover', function() {
    this.style.transform = 'translateY(-20px)';
});

document.getElementById('jumpingElement').addEventListener('mouseout', function() {
    this.style.transform = 'translateY(0)';
});