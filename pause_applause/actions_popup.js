window.enableLikes = function (type) {
    chrome.tabs.executeScript({
        code: 'document.body.classList.add("' + type + '");'
    });
};

Array.prototype.forEach.call(document.getElementsByTagName('input'),
    function (input) {
        input.addEventListener('click', function () {
            enableLikes(this.getAttribute('id'));
        });
    }
);
