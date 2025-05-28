<script>
  const toggle = document.getElementById('modeToggle');
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    document.querySelectorAll('.section-block').forEach(el => {
      el.classList.toggle('dark-mode');
    });

    document.querySelectorAll('li').forEach(el => {
      el.classList.toggle('dark-mode');
    });
  });
</script>
