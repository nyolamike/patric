page_data = {
    hospitals:[{
        name: "Mulago",
        url:"mulago.html"
    },
    {
        name: "Kiruddu",
        url:"kiruddu.html"
    },
    {
        name: "Kawempe",
        url:"kawempe.html"
    },
    {
        name: "Mulago Womens Hospital",
        url:"mulago_womens_hospital.html"
    }]
};


menu_links = [];
page_data.hospitals.forEach(page => {
    menu_links.push({
        title: page.name,
        link: page.url
    });
});