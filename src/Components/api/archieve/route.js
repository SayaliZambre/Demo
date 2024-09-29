import JSZip from "jszip"

export async function GET(){
    const zip = new JSZip();

zip.file("Hello.txt", "Hello World\n");

const img = zip.folder("images");
img.file("smile.gif", imgData, {base64: true});

zip.generateAsync({type:"blob"}).then(function(content) {
    // see FileSaver.js
    saveAs(content, "example.zip");
});
    return new Response(JSON.stringify({test: true}),{
status: 200,
headers: {
    'Content-Type':'application/json'
}
})
}