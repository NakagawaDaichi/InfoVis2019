// Constructor
Vec3 = function( x, y, z )
{
this.x = x;
this.y = y;
this.z = z;
}

// Add method
Vec3.prototype.add = function( v )
{
this.x += v.x;
this.y += v.y;
this.z += v.z;
return this;
}

// Sum method
Vec3.prototype.sum = function()
{
return this.x + this.y + this.z;
}

//Min method
Vec3.prototype.min = function()
{
    var array = [this.x, this.y, this.z]
    array.sort(compareFunc);
    
return array[0];
}

//Max method
Vec3.prototype.max = function()
{
    var array = [this.x, this.y, this.z]
    array.sort(compareFunc);
    
return array[array.length-1];
}

//Mid method
Vec3.prototype.mid = function()
{
    var array = [this.x, this.y, this.z]
    array.sort(compareFunc);

    return array[(array.length-1)/2];
}

function compareFunc(a, b) {
  return a - b;
}
