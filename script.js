document.getElementById('package').addEventListener('click', function() {
    var package = document.getElementById('package');
    var openedPackage = document.getElementById('openedPackage');

    // Change the background image to the opened package
    package.style.backgroundImage = "url('0217edd2-a956-46ef-b2ef-0cab01214a68.webp')"; // Update this path

    // Show the buttons
    openedPackage.classList.remove('hidden');
});
