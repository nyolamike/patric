page_data = {
    hospitals:[{
        name: "Mulago",
        bg_name: "mulago",
        url:"mulago.html",
        image: "MulagoHospital703422-703x422.jpg",
        index_tile_name: "Mulago National Hospital",
        description: "Mulago National Referral Hospital, commonly known as Mulago Hospital, is a hospital in Uganda. It is the largest public hospital in the country, with 1,500 beds. In 2014, an average of 80 to 100 babies were delivered daily, in the hospital's three maternity wards.",
        location: {
            description: "The hospital is on Mulago Hill in the northern part of the city of Kampala, immediately west of the Makerere University College of Health Sciences. <br/><br/> It is approximately 5 kilometres (3.1 mi), by road, north-east of Kampala's central business district. <br/><br/> The coordinates of the hospital are 0°20'16.0\"N, 32°34'32.0\"E (Latitude:0.337786; Longitude:32.575550) <br/><br/> From Tthe new taxi park and the old taxi park, transport cost is 1,500 uganda shillings and if you are using a motocycle (boda boda) that is usually 3,000 ugx form the city center. ",
            map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5780.914776774461!2d32.57439339499222!3d0.33895764389603317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb0f51509de1%3A0xea12334542674d8c!2sNew%20Mulago%20Hospital!5e0!3m2!1sen!2sbw!4v1584274338688!5m2!1sen!2sbw"
        },
        immunization_department: {
            name: "Immunization Department",
            description: "Immunization takes place from Monday to Friday and from 8am and usually ends by 2pm",
            image: "https://images.unsplash.com/photo-1575468332949-4bd46064dd66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=225&q=60",
            services_list_heading: "The vaccines are free and include",
            services_list: [	
                "Poliomyelitis - OPV/IPV",
                "Whooping cough - Pertussis (DPT-HepB -Hib)",
                "Diphtheria - (DPT-HepB- Hib)",
                "Tetanus - Tetanus (DPT-HepB --Hib)",
                "Measles - Measles Vaccine",
                "Neonatal Tetanus - Tetanus Toxoid (for WCBA)",
                "Hepatitis B infection - Hepatitis B (DPT-HepB -Hib)",
                "H. Influenzae infection - Hib(DPT -HepB -Hib)",
                "Rota virus"
            ]
        },
        outpatients_clinic:{
            name: "Mulago Private Outpatient’s Clinic",
            description: "Operates in old Mulago near the causality ward. <br /> It offers a range of services and the public are able to see consultants privately. <br /> They pay a consultation fee of 25,000=. <br /> The patients also pay for diagnostics tests such as X-ray and laboratory depending of the doctor`s requests. <br /> The clinic runs from Monday to Friday and from 8am to 2pm.",
            image: "https://images.unsplash.com/photo-1575468332949-4bd46064dd66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=225&q=60"
        },
        dental_clinic:{
            name: "Mulago Dental Clinic",
            description: "Mulago hospital runs a dental clinic and it is located in old Mulago hill below the TB ward (5&6) and runs from Monday to Friday. <br/> It has general section and a private section. General side offers basically tooth extraction and is charged 10,000=",
            image: "https://images.unsplash.com/photo-1575468332949-4bd46064dd66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=225&q=60",
            services_list_heading: "The private side has a number of services they offer at a cost and are; ",
            services_list: [	
                "Extraction 20,000- 150,000",
                "Fillings 20,000- 50,000",
                "Root canal therapy 50,000- 200,000",
                "Periodontal treatment scale and polish 50,000",
                "Orthodontics-250,000-750,000"
            ]
        }
    },
    {
        name: "Kiruddu",
        bg_name: "kiruddu",
        url:"kiruddu.html",
        image: "Kiruddu-hospital-e1526463079413.jpeg",
        index_tile_name: "Kiruddu National Referral Hospital"
    },
    {
        name: "Kawempe",
        bg_name: "kawempe",
        url:"kawempe.html",
        image: "kawempe.jpg",
        index_tile_name: "Kawempe National Referral Hospital"
    },
    {
        name: "Mulago Womens Hospital",
        bg_name: "mulago_women",
        url:"mulago_womens_hospital.html",
        image: "Female-Hospital-Mulago.jpg",
        index_tile_name: "Mulago Womens Hospital"
    }]
};

page_data_reference = {
    "mulago.html" : 0,
    "kiruddu.html" : 1,
    "kawempe.html" : 2,
    "mulago_womens_hospital.html" : 3
};

menu_links = [];
page_data.hospitals.forEach(page => {
    menu_links.push({
        title: page.name,
        link: page.url
    });
});
