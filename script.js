
    window.addEventListener("load",()=>{
        for (const bar of document.getElementsByClassName("cf")){
            for(const a of bar.getElementsByTagName("a")){
                if(a.href==window.location.href){
                        a.className="active";
                    }
                }
            }
        }
    );
