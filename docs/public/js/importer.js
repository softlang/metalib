var setButtonExpanded = function (button) {
    var buttonIcon = document.createElement('i');
    button.innerHTML = '';
    buttonIcon.className += 'material-icons';
    buttonIcon.innerHTML = '&#xE5CE;';
    button.appendChild(buttonIcon);
};

var setButtonFolded = function (button) {
    var buttonIcon = document.createElement('i');
    button.innerHTML = '';
    buttonIcon.className += 'material-icons';
    buttonIcon.innerHTML = '&#xE5CF;';
    button.appendChild(buttonIcon);
};

var createToggleExpand = function (button, element) {
    var expanded = false;
    return function () {
        expanded = !expanded;
        button.innerHTML = '';
        expanded ? element.classList.remove('folded') : element.classList.add('folded');
        (expanded ? setButtonExpanded : setButtonFolded)(button);
    };
};

var initHighlight = function (element) {
    var url = element.getAttribute('src');
    var from = parseInt(element.getAttribute('from'));
    var to = parseInt(element.getAttribute('to'));
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onreadystatechange = function () {
        if (this.readyState === 4) {
            var contentLines =
                event
                    .target
                    .response
                    .split(/\r\n|\r|\n/)
                    .filter(function (l, i) {
                        return (from === 0 ? true : i >= from) && (to === 0 ? true : i <= to);
                    });
            var trimCount = Math.min
                .apply(null, contentLines.filter(function (l) {
                    return l.length > 0;
                }).map(function (l) {
                    var p = 0;
                    for (var i = 0; i < l.length; i++) {
                        if (l[i] !== ' ') {
                            break;
                        }
                        p++;
                    }
                    return p;
                }));
            element.innerHTML = contentLines
                .map(function (l) {
                    return l.slice(trimCount);
                })
                .reduce(function (agg, cur) {
                    return agg + '\r\n' + cur;
                });
            element.classList.add('folded');
            hljs.highlightBlock(element);
            if (from || to) {
                var button = document.createElement('button');
                button.classList.add('button-code');
                button.onclick = createToggleExpand(button, element);
                element.parentNode.appendChild(button);
                setButtonFolded(button);
            }
        }
    };
    request.send();
};

document.addEventListener('DOMContentLoaded', function () {
    Array.prototype.slice.apply(document.querySelectorAll('code')).forEach(function (e) {
        initHighlight(e);
    });
});