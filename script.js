"use scrict";
$(function(){
    const $header=$('#header');
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
    window.addEventListener("scroll", () => {
    // windowのスクロール量を取得する
    const scrollTop = $(window).scrollTop();

    // ヘッダーの高さが60pxなので、この値を基準にする
    if (scrollTop > 60) {
      // hideクラスがない場合は、hideを追加する
      if (!$header.hasClass("hide")) {
        $header.addClass("hide");
      }
    } else {
      // hideクラスがある場合は、hideを削除する
      if ($header.hasClass("hide")) {
        $header.removeClass("hide");
      }
    }
  });
    
});
