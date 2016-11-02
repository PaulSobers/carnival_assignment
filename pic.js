  var movements = document.getElementById('movements');
    var done = document.getElementById("done");
    
    movements.addEventListener('submit', function(e) {
      var age1 = document.getElementById("age1").value;
      var age2 = document.getElementById("age2").value;
      
      if(parseInt(age2, 12) >= parseInt(age1, 12)) {
        done.innerHTML = "You can go on this ride";
      } else {
        done.innerHTML = "You cannot go on this ride;
      }
      
      e.preventDefault();
    });