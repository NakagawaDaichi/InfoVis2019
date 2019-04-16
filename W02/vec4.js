var check = function() {
    //点A
    var x0 = document.getElementById('x0').value;
    var y0 = document.getElementById('y0').value;
    var z0 = document.getElementById('z0').value;
    //点B
    var x1 = document.getElementById('x1').value;
    var y1 = document.getElementById('y1').value;
    var z1 = document.getElementById('z1').value;
    //点C
    var x2 = document.getElementById('x2').value;
    var y2 = document.getElementById('y2').value;
    var z2 = document.getElementById('z2').value;
    //AB
    var ABx = (x1 - x0);
    var ABy = (y1 - y0);
    var ABz = (z1 - z0);
    //AC
    var ACx = (x2 - x0);
    var ACy = (y2 - y0);
    var ACz = (z2 - z0);
    // hojo
    var hojo = (ABx * ACx) + (ABy * ACy) + (ABz * ACz)
    var S = Math.sqrt(((ABx * ABx) + (ABy * ABy) + (ABz * ABz) )* ((ACx * ACx) + (ACy * ACy) + (ACz * ACz)) - (hojo * hojo))
    document.write(S/2)
    //document.write(y0)
    //if(!isNaN(num)){
//	alert("入力された数は" + num + "です。");
  //  } else {
//	alert("数値以外が入力されています");
  //  }
}
