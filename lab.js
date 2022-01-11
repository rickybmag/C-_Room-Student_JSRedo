function RoomCalculator() {
    let length = parseInt(prompt("Please enter Length"));
    let width = parseInt(prompt("Please enter width"));
    let height = parseInt(prompt("Please enter height"));

    let area = length * width;
    let perimeter = (length + width) * 2;
    let volume = length * width * height;

    let carpet = area / 5;
    let paint = perimeter / 5;

    let wallArea = (2 * (length * height)) + (2 * (width * height)) + (length * width);
    let paintCans = wallArea / 5;
    let floorCarpet = carpet;

    console.log("Area:" + area + "\n" +
        "Perimeter:" + perimeter + "\n" +
        "Volume:" + volume + "\n" +
        "Carpet Needed:" + carpet + "\n" +
        "Paint Cans Needed:" + paint);
}