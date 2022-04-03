x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
    document.writeln("x1: ", x);
    document.writeln("a2: ", a);
        var f = function() {
        b = a;
        document.writeln("b3: " + b);
        b = c;
        var a = 3;
        }
    f();
    document.writeln("b4: ", b);
    x = 6;
}
c(8, 9, 7);
document.writeln("b5: ", b);
document.writeln("x6: ", x);