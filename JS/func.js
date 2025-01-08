function f() {
    let x, y, z;
    x = 5, y = 9;
    z = x ** y;
    // document.getElementById("demo").innerHTML = typeof(new_color()());
    // document.getElementById("demo").innerHTML = "The value of z is " + z + ".";
    // document.getElementById("demo2").innerHTML = new_color()();
    // document.getElementById("demo").style.color = `rgb(${new_color()()})`
    // document.getElementById("demo").style.color = textColor()
    // document.body.style.backgroundColor = color()
    document.body.style.backgroundColor = `rgb(${new_color().r}, ${new_color().g}, ${new_color().b})`
    // document.getElementById("demo1")
}

function color() {
    // document.getElementById("test").
    return "rgb(128,0,43)"
}

const new_color = function (){
    // document.getElementById("test").
    let r = Math.floor(255 * Math.random())
    let g = Math.floor(255 * Math.random())
    let b = Math.floor(255 * Math.random())
    return () => {
        r = Math.floor(255 * Math.random())
        g = Math.floor(255 * Math.random())
        b = Math.floor(255 * Math.random())
        return {r,g,b}
    }
}()

function textColor() {
    // document.getElementById("test").
    return "rgb(127,255,212)"
}