export async function postData(url="", data={}, token = ""){
    let response:Response;
    response = await fetch(url, {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    const result = response.json();
    if((response.status / 100) !== 2){
        throw result;
    }
    return result;

}

export async function getData(url="", token = ""){
    let response:Response;
    response = await fetch(url, {
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    });

    const result = response.json();
    if((response.status / 100) !== 2){
        throw result;
    }
    return result;

}



// function _getBlobUrl(canvas){
//     return new Promise((res, rej)=>{
//         canvas.toBlob((blob)=>{
//             res(URL.createObjectURL(blob));
//         })
//     })
// }

// export async function urlToBlb(url){
//     let obUrl = "";
//     const image = new Image();
//     image.src = `${SERVER_URL}/images/${url}`;
//     image.crossOrigin = "Anonymous";
//     await image.decode();

//     const canv = document.createElement("canvas");
//     canv.width = image.width;
//     canv.height = image.height;
//     const ctx = canv.getContext("2d");

//     ctx.drawImage(image, 0, 0);

//     obUrl = await _getBlobUrl(canv)
//     // canv.toBlob((blob)=>{
//     //     obUrl = URL.createObjectURL(blob);
//     //     console.log("object url", obUrl);
//     // })

//     return obUrl;
// }



