page_data = {
    hospitals:[{
        name: "Mulago",
        url:"mulago.html",
        image: "MulagoHospital703422-703x422.jpg",
        index_tile_name: "Mulago National Hospital",
        
    },
    {
        name: "Kiruddu",
        url:"kiruddu.html",
        image: "Kiruddu-hospital-e1526463079413.jpeg",
        index_tile_name: "Kiruddu National Referral Hospital"
    },
    {
        name: "Kawempe",
        url:"kawempe.html",
        image: "kawempe.jpg",
        index_tile_name: "Kawempe National Referral Hospital"
    },
    {
        name: "Mulago Womens Hospital",
        url:"mulago_womens_hospital.html",
        image: "Female-Hospital-Mulago.jpg",
        index_tile_name: "Mulago Womens Hospital"
    }]
};


menu_links = [];
page_data.hospitals.forEach(page => {
    menu_links.push({
        title: page.name,
        link: page.url
    });
});