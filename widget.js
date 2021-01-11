WidgetCallback({
    "app.type":"desktop",
    "app.apikey":"f9040ab1b9c802857aa783c469d0e0ff7e7366e4",
    count:4,
    "source.type":"video",
    "source.id":"214321562187",
    "source.url":"http://www.site.com/videos/214321562187.html"
})();
function WidgetCallback(obj){
    const url="http://api.taboola.com/1.0/json/taboola-templates/recommendations.get?app.type="+obj["app.type"]+"&app.apikey="+obj["app.apikey"]+"&count="+obj["count"]+"&source.type="+obj["source.type"]+"&source.id="+obj["source.id"]+"&source.url="+obj["source.url"];
    return function(){
        const test=fetch(url).then(r=>r.json()).then(d=>createWidget(d));
        const createSponsoredThumbnail=obj=>{
                let aImg = document.createElement("a");
                let aText= document.createElement("a");
                let divImg=document.createElement("div");
                let divThumbnail=document.createElement("div");
                let img=document.createElement("img");
                let textSpan=document.createElement("span");
                let titleSpan=document.createElement("span");
                titleSpan.textContent=obj.name;
                let typeSpan=document.createElement("span");
                typeSpan.textContent=obj.branding+" | SPONSORED";
                img.src=obj.thumbnail[0].url;
                img.alt=obj.name;
                img.className="suggestionImg";
                aImg.href=obj.url;
                aText.href=obj.url;
                aImg.appendChild(divImg);
                divImg.appendChild(img);
                textSpan.appendChild(titleSpan);
                textSpan.appendChild(typeSpan);
                aText.appendChild(textSpan);
                divThumbnail.appendChild(aImg);
                divThumbnail.appendChild(aText);
                divThumbnail.className="suggestionWidgetThumbnail";
                titleSpan.className="title";
                typeSpan.className="type";
                return divThumbnail;
        }
        const createWidget=(data)=>{
            
            const list =data.list;
            let table=document.createElement("table");
            let tr;
            for(let i=0;i<list.length;i++){
                let item=list[i];
                if(i%4==0){
                    tr=document.createElement("tr");
                    table.appendChild(tr);
                 }
                 let td=document.createElement("td");
                let thumbnail;
                switch(item.origin){
                    case "sponsored":
                        thumbnail=createSponsoredThumbnail(item);
                        break;
                        default:
                            thumbnail=null;
                }
                if(thumbnail){
                    td.appendChild(thumbnail);
                    td.className="suggestionCell";
                    tr.appendChild(td);
                }
              
            }
            document.getElementById("suggestionsWidget").appendChild(table);
        }
    }

}

