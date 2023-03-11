function showPattern() {
    const colorsArr = ['red', 'orange', 'blue', 'green', 'yellow', 'indigo', 'violet'];

    //let topPosition = 25;
    //let leftPosition = 25;
    //let width = 500;
    //let height = 500;
    //let borderTopLeftRadius = 500;
    //let borderTopRightRadius = 500;
    //let borderBottomLeftRadius = 500;
    //let borderBottomRightRadius = 500;
    let topPosition = 50;
    let leftPosition = 50;
    let borderRadius = 500;
    let width = 500;
    let height = 500;

    while (width > 10) {
        const randomColorIdx = Math.floor(Math.random() * colorsArr.length);
        const newDiv = document.createElement('div');

        //newDiv.style.top = topPosition + 'px';
        //newDiv.style.left = leftPosition + 'px';
        //newDiv.style.width = width + 'px';
        //newDiv.style.height = height + 'px';
        //newDiv.style.background = colorsArr[randomColorIdx];
        //newDiv.style.borderTopLeftRadius = borderTopLeftRadius + 'px';
        //newDiv.style.borderTopRightRadius = borderTopRightRadius + 'px';
        //newDiv.style.borderBottomLeftRadius = borderBottomLeftRadius + 'px';
        //newDiv.style.borderBottomRightRadius = borderBottomRightRadius + 'px';
        newDiv.style.top = topPosition + 'px';
        newDiv.style.left = leftPosition + 'px';
        newDiv.style.borderRadius = borderRadius + 'px';
        newDiv.style.width = width + 'px';
        newDiv.style.height = height + 'px';
        newDiv.style.background = colorsArr[randomColorIdx];

        document.body.appendChild(newDiv);
        //topPosition += 10;
        //leftPosition += 10;
        //borderBottomLeftRadius +=10;
        //borderBottomRightRadius +=10;
        //borderTopLeftRadius += 10;
        //borderTopRightRadius += 10;
        topPosition += 10;
        leftPosition += 10;
        borderRadius += 10;
        width -= 20;
        height -= 20;
    }
}