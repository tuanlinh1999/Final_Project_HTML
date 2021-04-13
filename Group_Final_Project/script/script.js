window.onload = function() {
    document.getElementById('toggle').onclick = function() {
        this.previousElementSibling.classList.toggle('show');
    }
    document.getElementById('close').onclick = function() {
        document.getElementById('overlay').classList.toggle('showoverlay');
    }

    document.getElementById('registration').onclick = function() {
        document.getElementById('overlay').classList.toggle('showoverlay');
    }
};