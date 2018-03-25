/*** Node Static ***/

var static = require('node-static');
var file = new static.Server('./');

require('http').createServer(function(request, response) {
  request.addListener('end', function() {
    file.serve(request, response);
  }).resume();
}).listen(process.env.PORT || 3000);

window.onload = function () {

    /* NAVIGATION VIA XMLHTTPReqs */
    function navigation() {        
        var main = document.querySelector('.widget');
        var request = new XMLHttpRequest();
        var housingBtn = document.getElementById('housing');
        var socialBtn = document.getElementById('twitter');
        var colabBtn = document.getElementById('colab');
        var contactBtn = document.getElementById('contact');

        /*request.onreadystatechange = function() {
            if(request.readyState === 4) {
                if(request.status === 200) {
                    main.innerHTML = request.responseText;
                } else {
                    main.innerHTML = 'An error occured during your request: ' + request.status + ' ' + request.statusText;
                }
            }
        }*/

        function get(url) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if(xhr.status === 200) {
                        main.innerHTML = this.responseText;
                    } else {
                        main.innerHTML = 'An error occured during your request: ' + xhr.status + ' ' + xhr.statusText;
                    }
                }
            };
            xhr.send();
        }

       // housingBtn.addEventListener('click', function() {
         //   get('./widget-housing.html');
        //});

        socialBtn.addEventListener('click', function() {
            get('./widget-social.html');
        });
        colabBtn.addEventListener('click', function() {
            get('./widget-colab.html');
        });
        contactBtn.addEventListener('click', function() {
            get('./widget-contact.html');
        });

    }
    navigation();

}




function burger() {
    var sidebar = document.querySelector('.sidebar');
    var dimmer = document.querySelector('.dimmer');
    sidebar.classList.toggle('active');
    dimmer.classList.toggle('active');
}

function dimmer() {
    var dimmer = document.querySelector('.dimmer');
    if(dimmer.classList.contains('active')) {
        burger()
    }
}