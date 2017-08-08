(function () {
  // function myMap()
  // {
  //   myCenter=new google.maps.LatLng(41.878114, -87.629798);
  //   var mapOptions= {
  //     center:myCenter,
  //     zoom:12, scrollwheel: false, draggable: false,
  //     mapTypeId:google.maps.MapTypeId.ROADMAP
  //   };
  //   var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);
  //
  //   var marker = new google.maps.Marker({
  //     position: myCenter,
  //   });
  //   marker.setMap(map);
  // }

  // Modal Image Gallery
  function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }

  // Change style of navbar on scroll
  window.onscroll = function() {myFunction()};
  function myFunction() {
      var navbar = document.getElementById("myNavbar");
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          navbar.className = "w3-bar" + " w3-card-2" + " w3-animate-top" + " w3-white";
      } else {
          navbar.className = navbar.className.replace(" w3-card-2 w3-animate-top w3-white", "");
      }
  }

  // Used to toggle the menu on small screens when clicking on the menu button
  function toggleFunction() {
      var x = document.getElementById("navDemo");
      if (x.className.indexOf("w3-show") == -1) {
          x.className += " w3-show";
      } else {
          x.className = x.className.replace(" w3-show", "");
      }
  }

  // Exhibit btn click handlre
  document.getElementById("show-list-btn").addEventListener("click", function(){
    var card = document.getElementsByClassName("card1");
    var div = card[0].childNodes[3].childNodes[3]

    if (hasClass(div, "hide-list")) {
      removeClass(div, "hide-list");
      addClass(div, "show-list");
    } else {
      removeClass(div, "show-list");
      addClass(div, "hide-list");
    }
  });

  function hasClass(el, className) {
  if (el.classList)
    return el.classList.contains(className)
  else
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

function addClass(el, className) {
  if (el.classList)
    el.classList.add(className)
  else if (!hasClass(el, className)) el.className += " " + className
}

function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className)
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className=el.className.replace(reg, ' ')
  }
}


})();
