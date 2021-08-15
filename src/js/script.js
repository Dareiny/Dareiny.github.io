




if (confirm("Рассчитать стоимость заказа?")){
    var caluclator = {
        price: [
            siteType = [100, 50 , 200],
            siteDesign = [100, 100, 150],
            siteAdapt = [50, 0, 200]
        ],
        timings: [
            siteType = [4, 3 , 6],
            siteDesign = [1, 1, 2],
            siteAdapt = [2, 2, 4]
        ],
    };
    type = prompt("Тип сайта: 1 - Лэндинг: 100 рублей. 2 - Сайт-визитка: 50 рублей. 3 - Корпоротивный сайт: 200 рублей.", 1);
    design = prompt("Дизайн: 1 - Минимализм: +100 рублей. 2 - Классический: + 100 рублей. 3 - Корпоротивный: +150 рублей", 1);
    adapt = prompt("Адаптивность: 1 - Телефоны: +50 рублей. 2 - Компьютеры: +0 рублей. 3 - Адаптивный: +200 рублей", 1); 
    
    function priceCount (siteType, siteDesign, siteAdapt){
        siteType = caluclator.price["0"][type - 1];
        siteDesign = caluclator.price["1"][design - 1];
        siteAdapt = caluclator.price["2"][adapt - 1];
        return siteAdapt + siteDesign + siteType;
    }
    function timeCount (siteType, siteDesign, siteAdapt){
        siteType = caluclator.timings["0"][type - 1];
        siteDesign = caluclator.timings["1"][design - 1];
        siteAdapt = caluclator.timings["2"][adapt - 1];
        return siteAdapt + siteDesign + siteType;
    }
    alert("Стоимость заказа: " + priceCount() + "  " + "рублей. Длительность выполнения: " + timeCount() + "  " + "дней.");
};

    
    
