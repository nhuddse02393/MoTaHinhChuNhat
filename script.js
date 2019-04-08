function Reactangle(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.area = function () {
        return this.width * this.height;
    }

    this.perimeter = function () {
        return (this.width + this.height) * 2;
    }

    this.draw = function () {
        let ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.beginPath();
        ctx.strokeRect(this.x, this.y, this.width, this.height);
    }

    this.setWH = function (w, h) {
        this.width = w;
        this.height = h;
    }
}

let rec = new Reactangle(50,50,50,50);
rec.draw();
rec.setWH(60,70);
alert("Dien tich bang " + rec.area() + ", chu vi bang " + rec.perimeter());

