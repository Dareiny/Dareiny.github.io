$(".setSelect select").change(function(){
    var caluclator = {
        price: [
             siteType = [0, 100, 50 , 200],
             siteDesign = [0, 100, 100, 150],
             siteAdapt = [0, 50, 0, 200]
        ],
        timings: [
            siteType = [0, 4, 3 , 6],
            siteDesign = [0, 1, 1, 2],
            siteAdapt = [0, 2, 2, 4]
        ],
    };
    let sT =document.getElementById('sType');
    let sD =document.getElementById('sDesign');
    let sA =document.getElementById('sAability');
    let type = sT.value;
    let design = sD.value;
    let adapt = sA.value; 
    function priceCount (siteType, siteDesign, siteAdapt){
        siteType = caluclator.price["0"][type];
        siteDesign = caluclator.price["1"][design];
        siteAdapt = caluclator.price["2"][adapt];
        return siteAdapt + siteDesign + siteType;
    };
    function timeCount (siteType, siteDesign, siteAdapt){
        siteType = caluclator.timings["0"][type];
        siteDesign = caluclator.timings["1"][design];
        siteAdapt = caluclator.timings["2"][adapt];
        if(siteAdapt + siteDesign + siteType > 4){
            cDays = " дней"
        }
        else{
            cDays =" дня"
        }
        return siteAdapt + siteDesign + siteType;
    };
    
    document.getElementById('countTime').innerHTML = timeCount()+ cDays;
    document.getElementById('countPrice').innerHTML = priceCount()+' Рублей';
});

$(document).ready(function(){
    
    $(window).scroll(() =>{
        
        let scrollDistance = $(window).scrollTop();
        
        $("section").each((i, el) =>{
           
            if($(el).offset().top - $("nav").outerHeight() <= scrollDistance){
                    $("nav a").each((i, el) =>{
                    if($(el).hasClass("active_nav")){
                        $(el).removeClass("active_nav");
                    };
                    });
                    $('nav li:eq('+ i +')').find('a').addClass("active_nav");        
            };
        });
    });
    let options = {threshold: [0.5]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $(".element_animation");
    elements.each((i, el) =>{
        observer.observe(el);
    })
    
    
    var time = 2,
      cc = 1;
    $(window).scroll(function() {
      $('#statList').each(function() {
        var
          cPos = $(this).offset().top,
          topWindow = $(window).scrollTop();
        if (cPos < topWindow + 150) {
          if (cc < 2) {
            $(".statNumber").addClass("viz");
            $('div').each(function() {
              var
                i = 1,
                num = $(this).data('num'),
                step = 1000 * time / num,
                that = $(this),
                int = setInterval(function() {
                  if (i <= num) {
                    that.html(i);
                  } else {
                    cc = cc + 2;
                    clearInterval(int);
                  }
                  i++;
                }, step);
            });
          }
        }
      });
    });
    
});
function onEntry(entry){
    entry.forEach(change =>{
        if (change.isIntersecting){
            change.target.classList.add('show_animation')
        }
    });
    
	
    
}


/*if (document.siteType.value != 0 && document.siteDesign.value != 0 && document.siteAability.value != 0){ */

/*};*/


/*
    type = prompt("Тип сайта: 1 - Лэндинг: 100 рублей. 2 - Сайт-визитка: 50 рублей. 3 - Корпоротивный сайт: 200 рублей.", 1);
    design = prompt("Дизайн: 1 - Минимализм: +100 рублей. 2 - Классический: + 100 рублей. 3 - Корпоротивный: +150 рублей", 1);
    adapt = prompt("Адаптивность: 1 - Телефоны: +50 рублей. 2 - Компьютеры: +0 рублей. 3 - Адаптивный: +200 рублей", 1); 
*/
    
