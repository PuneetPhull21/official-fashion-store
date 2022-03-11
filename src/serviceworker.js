//path of the sw file 



export default function serviceworker(){
    const sw = `${process.env.PUBLIC_URL}/sw.js`;
navigator.serviceWorker.register(sw).then(response=>{
    console.log(response);
})
}