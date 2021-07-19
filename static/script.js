function getQuotes()
{
    let url="https://type.fit/api/quotes";
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        let n=Math.floor((Math.random() * 1000) + 1);
        // console.log(data[n]);
        document.getElementById('text1').innerText=data[n].text;
        document.getElementById('auth').innerText=data[n].author;
    })
}
getQuotes();
document.querySelector('.next').addEventListener('click',()=>{
    document.querySelector('.timg').classList.add('tani');
    setTimeout(() => {
        document.querySelector('.timg').classList.remove('tani');
    }, 299);
    document.getElementById('text1').innerText="Loading...";
    getQuotes();
})
document.querySelector('.twitter').addEventListener('click',()=>{
    let text= document.getElementById('text1').innerText;
    let url=`https://twitter.com/intent/tweet?text=${text}`;
    window.location.href=url;
})