export class DesignerConversions {
    constructor() {

    }
    /*
        rgb2hex() converts rgb color value to hex color value
    */
    rgb2hex(rgb: any) {
        if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;
        rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        return "#" + this.hex(rgb[1]) + this.hex(rgb[2]) + this.hex(rgb[3]);
    }

    hex(x: any) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }

    /*
    strtonum() converts string to integer
    */
    strtonum(str: any) {
        var res = str.replace(/\D/g, "");
        return res
    }
}