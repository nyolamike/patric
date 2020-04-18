

$(function () {
    // alert("Hello there");
    var app = new Vue({
        el: '#app_wrapper',
        data(){
            return {
                query: "",
                is_searching: true,
                menu_links: menu_links,
                results: []
            }
        },
        methods: {
            search: function(){
                var query = this.query.trim();
                if(query.length > 0){
                    localStorage.setItem("q",query);
                    this.search_helper(query);
                }
            },
            getParameterByName(name, url) {
                if (!url) url = window.location.href;
                name = name.replace(/[\[\]]/g, '\\$&');
                var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                    results = regex.exec(url);
                if (!results) return null;
                if (!results[2]) return '';
                return decodeURIComponent(results[2].replace(/\+/g, ' '));
            },
            gotoresult(result){
                window.location = result.link;
            },
            search_helper: function(qp){
                var vm = this;
                var results = [];
                vm.query = qp;
                vm.is_searching = true;
                var params = qp.toLowerCase().split(" ");
                var next_results_index = 1;
                for(var i=0;i < page_data.hospitals.length; i++){
                    var hospital = page_data.hospitals[i];
                    //top search
                    //name of hospital
                    //index_tile_name
                    //description
                    for(var p=0;p< params.length;p++){
                        var param = params[p];
                        if( (hospital.name && hospital.name.toLowerCase().indexOf(param) > -1)||
                            (hospital.index_tile_name && hospital.index_tile_name.toLowerCase().indexOf(param) > -1)||
                            (hospital.description && hospital.description.toLowerCase().indexOf(param) > -1) 
                         ){
                            results.push({
                                id: next_results_index,
                                image: hospital.image,
                                title: hospital.index_tile_name,
                                body: hospital.description,
                                hospital: hospital.index_tile_name,
                                department: "",
                                link: hospital.url  + "#" + hospital.search_anchor
                            });
                            next_results_index += 1;
                            break;//no need for other params to add the same search results
                        }
                    }
                    //location
                    for(var p=0;p< params.length;p++){
                        var param = params[p];
                        if(hospital.location.description.toLowerCase().indexOf(param) > -1){
                            results.push({
                                id: next_results_index,
                                image: hospital.image,
                                title: "Location of  " + hospital.index_tile_name,
                                body: hospital.location.description,
                                hospital: hospital.index_tile_name,
                                department: "",
                                link: hospital.url  + "#" + hospital.location.search_anchor
                            });
                            next_results_index += 1;
                            break;//no need for other params to add the same search results
                        }
                    }
                    //immunization_department
                    for(var p=0;p< params.length;p++){
                        var param = params[p];
                        //search through services_lists
                        var found = "";
                        for (let index = 0; index < hospital.immunization_department.services_list.length; index++) {
                            var item = hospital.immunization_department.services_list[index];
                            if(item.toLowerCase().indexOf(param) > -1){
                                found = item; //no need for other params to add the same search results
                                break;
                            }
                        }
                        var normal_is_true = hospital.immunization_department.name.toLowerCase().indexOf(param) > -1 || 
                        hospital.immunization_department.description.toLowerCase().indexOf(param) > -1 ||
                        hospital.immunization_department.services_list_heading.toLowerCase().indexOf(param) > -1;

                        if( normal_is_true || found.length > 0){
                            if(normal_is_true == true){
                                found = "";
                            }
                            results.push({
                                id: next_results_index,
                                image: hospital.immunization_department.image,
                                title: "Immunization Department  " + hospital.immunization_department.name,
                                body: (found.length > 0)? "Immunization Service:  " + found : hospital.immunization_department.description,
                                hospital: hospital.index_tile_name,
                                department: hospital.immunidzation_department.name,
                                link: hospital.url  + "#" + hospital.immunidzation_department.search_anchor
                            });
                            next_results_index += 1;
                            break;//no need for other params to add the same search results
                        }
                    }
                    //outpatients_clinic
                    for(var p=0;p< params.length;p++){
                        var param = params[p];

                        var normal_is_true = hospital.outpatients_clinic.name.toLowerCase().indexOf(param) > -1 ||
                        hospital.outpatients_clinic.description.toLowerCase().indexOf(param) > -1 ;

                        if( normal_is_true ){
                            results.push({
                                id: next_results_index,
                                image: hospital.outpatients_clinic.image,
                                title: "Out Patient's Clinic  " + hospital.outpatients_clinic.name,
                                body:  hospital.outpatients_clinic.description,
                                hospital: hospital.index_tile_name,
                                department: "",
                                link: hospital.url  + "#" + hospital.outpatients_clinic.search_anchor
                            });
                            next_results_index += 1;
                            break;//no need for other params to add the same search results
                        }
                    }
                    //dental clinic
                    for(var p=0;p< params.length;p++){
                        var param = params[p];

                        var normal_is_true = hospital.dental_clinic.name.toLowerCase().indexOf(param) > -1 ||
                        hospital.dental_clinic.description.toLowerCase().indexOf(param) > -1  ||
                        hospital.dental_clinic.services_list_heading.toLowerCase().indexOf(param) > -1;

                        //search through services_lists
                        var found = "";
                        for (let index = 0; index < hospital.dental_clinic.services_list.length; index++) {
                            var item = hospital.dental_clinic.services_list[index];
                            if(item.toLowerCase().indexOf(param) > -1){
                                found = item; //no need for other params to add the same search results
                                break;
                            }
                        }

                        //dental procedure
                        if(found.length == 0){

                            if(hospital.dental_clinic.dental_procedure.name.toLowerCase().indexOf(param) > -1){
                                found = hospital.dental_clinic.dental_procedure.name;
                            }

                            for (let index = 0; index < hospital.dental_clinic.dental_procedure.items.length; index++) {
                                var item = hospital.dental_clinic.dental_procedure.items[index];
                                if(item.procedure.toLowerCase().indexOf(param) > -1 ||
                                   item.service.toLowerCase().indexOf(param) > -1
                                ){
                                    found = "Dental Procedure: " + item.procedure + " -- " + item.service; //no need for other params to add the same search results
                                    break;
                                }
                            }
                        }

                        if(found.length == 0){

                            if(hospital.dental_clinic.dental_procedure_local_anesthesia.name.toLowerCase().indexOf(param) > -1){
                                found = hospital.dental_clinic.dental_procedure_local_anesthesia.name;
                            }

                            for (let index = 0; index < hospital.dental_clinic.dental_procedure_local_anesthesia.items.length; index++) {
                                var item = hospital.dental_clinic.dental_procedure_local_anesthesia.items[index];
                                if(item.procedure.toLowerCase().indexOf(param) > -1 ||
                                   item.service.toLowerCase().indexOf(param) > -1
                                ){
                                    found = "Dental Procedure Anesthesia: " + item.procedure + " -- " + item.service; //no need for other params to add the same search results
                                    break;
                                }
                            }
                        }

                        if( normal_is_true || found.length > 0 ){
                            results.push({
                                id: next_results_index,
                                image: hospital.dental_clinic.image,
                                title: "Dental Clinic:   " + hospital.dental_clinic.name,
                                body:  (found.length > 0)? found : hospital.dental_clinic.description,
                                hospital: hospital.index_tile_name,
                                department: "Dental",
                                link: hospital.url  + "#" + hospital.dental_clinic.search_anchor
                            });
                            next_results_index += 1;
                            break;//no need for other params to add the same search results
                        }
                    }
                    //laboratory_services
                    for(var p=0;p< params.length;p++){
                        var param = params[p];

                        var normal_is_true = hospital.laboratory_services.name.toLowerCase().indexOf(param) > -1;
                        if( normal_is_true ){
                            results.push({
                                id: next_results_index,
                                image: hospital.image,
                                title: "Laboratory Service ",
                                body:  hospital.laboratory_services.name,
                                hospital: hospital.index_tile_name,
                                department: "",
                                link: hospital.url  + "#" + hospital.laboratory_services.search_anchor
                            });
                            next_results_index += 1;
                            break;//no need for other params to add the same search results
                        }else{
                            //the items
                            for (let index = 0; index < hospital.laboratory_services.items.length; index++) {
                                var item = hospital.laboratory_services.items[index];
                                if(item.name.toLowerCase().indexOf(param) > -1 ||
                                   item.description.toLowerCase().indexOf(param) > -1
                                ){
                                    results.push({
                                        id: next_results_index,
                                        image: item.image,
                                        title: "Laboratory Service " + item.name,
                                        body:  item.description,
                                        hospital: hospital.index_tile_name,
                                        department: "",
                                        link: hospital.url  + "#" + hospital.laboratory_services.search_anchor
                                    });
                                    next_results_index += 1;
                                }else {
                                    //list_items
                                    for (let index_item = 0; item.list_items && index_item < item.list_items.length; index_item++) {
                                        var list_item = item.list_items[index_item];
                                        if(list_item.toLowerCase().indexOf(param) > -1){
                                            results.push({
                                                id: next_results_index,
                                                image: item.image,
                                                title: "Laboratory Service ",
                                                body:  list_item,
                                                hospital: hospital.index_tile_name,
                                                department: "",
                                                link: hospital.url  + "#" + hospital.laboratory_services.search_anchor
                                            });
                                            next_results_index += 1;
                                            break;
                                        }
                                    }
                                    //list_items_mixed
                                    for (let index_item = 0; item.list_items_mixed && index_item < item.list_items_mixed.length; index_item++) {
                                        var list_item = item.list_items_mixed[index_item];
                                        if(typeof list_item == "string" && list_item.toLowerCase().indexOf(param) > -1){
                                            results.push({
                                                id: next_results_index,
                                                image: item.image,
                                                title: "Laboratory Service ",
                                                body:  list_item,
                                                hospital: hospital.index_tile_name,
                                                department: "",
                                                link: hospital.url  + "#" + hospital.laboratory_services.search_anchor
                                            });
                                            next_results_index += 1;
                                            break;
                                        }else if(typeof list_item != "string" ){
                                            //list_items
                                            var x = "";
                                            console.log("ivest", list_item);
                                            for (let z = 0; z < list_item.list_items.length; z++) {
                                                var li = list_item.list_items[z];
                                                if(li.toLowerCase().indexOf(param) > -1 ){
                                                    results.push({
                                                        id: next_results_index,
                                                        image: item.image,
                                                        title: "Laboratory Service ",
                                                        body:  li,
                                                        hospital: hospital.index_tile_name,
                                                        department: "",
                                                        link: hospital.url  + "#" + hospital.laboratory_services.search_anchor
                                                    });
                                                    next_results_index += 1;
                                                    break;
                                                }
                                            }
                                        }
                                    }
                                    //list_items_sold
                                    for (let index_item = 0; item.list_items_sold && index_item < item.list_items_sold.length; index_item++) {
                                        var list_item = item.list_items_sold[index_item];
                                        if(typeof list_item == "string" && list_item.toLowerCase().indexOf(param) > -1){
                                            results.push({
                                                id: next_results_index,
                                                image: item.image,
                                                title: "Laboratory Service ",
                                                body:  list_item,
                                                hospital: hospital.index_tile_name,
                                                department: "",
                                                link: hospital.url  + "#" + hospital.laboratory_services.search_anchor
                                            });
                                            next_results_index += 1;
                                            break;
                                        }else{
                                            //list_items
                                            var x = "";
                                            for (let z = 0; z < list_item.list_items.length; z++) {
                                                var li = list_item.list_items[z];
                                                if(li.toLowerCase().indexOf(param) > -1 ){
                                                    results.push({
                                                        id: next_results_index,
                                                        image: item.image,
                                                        title: "Laboratory Service ",
                                                        body:  li,
                                                        hospital: hospital.index_tile_name,
                                                        department: "",
                                                        link: hospital.url  + "#" + hospital.laboratory_services.search_anchor
                                                    });
                                                    next_results_index += 1;
                                                    break;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    //ent_clinic
                    for(var p=0;p< params.length;p++){
                        var param = params[p];

                        var normal_is_true = hospital.ent_clinic.name.toLowerCase().indexOf(param) > -1 || 
                        hospital.ent_clinic.description.toLowerCase().indexOf(param) > -1 ;

                        if( normal_is_true ){
                            results.push({
                                id: next_results_index,
                                image: hospital.outpatients_clinic.image,
                                title: "ENT Clinic:  " + hospital.ent_clinic.name,
                                body:  hospital.ent_clinic.description,
                                hospital: hospital.index_tile_name,
                                department: "",
                                link: hospital.url  + "#" + hospital.ent_clinic.search_anchor
                            });
                            next_results_index += 1;
                            break;//no need for other params to add the same search results
                        }
                    }
                    //out_patients_clinich
                    for(var p=0;p< params.length;p++){
                        var param = params[p];

                        var normal_is_true = hospital.out_patients_clinic.name.toLowerCase().indexOf(param) > -1 || 
                        hospital.out_patients_clinic.description.toLowerCase().indexOf(param) > -1 || 
                        hospital.out_patients_clinic.services_list_heading.toLowerCase().indexOf(param) > -1;

                        //search through services_lists
                        var found = "";
                        for (let index = 0; index < hospital.out_patients_clinic.table_schedule.length; index++) {
                            var item = hospital.out_patients_clinic.table_schedule[index];
                            if(item.clinics.toLowerCase().indexOf(param) > -1){
                                found = item.clinics; //no need for other params to add the same search results
                                break;
                            }
                        }

                        if( normal_is_true ||  found.length  > 0){
                            results.push({
                                id: next_results_index,
                                image: hospital.out_patients_clinic.image,
                                title: "Clinic Schedule:  " + hospital.ent_clinic.name,
                                body:  (found.length > 0)? found : hospital.ent_clinic.description,
                                hospital: hospital.index_tile_name,
                                department: "",
                                link: hospital.url  + "#" + hospital.out_patients_clinic.search_anchor
                            });
                            next_results_index += 1;
                            break;//no need for other params to add the same search results
                        }
                    }
                    //sickle_cell_clinic
                    for(var p=0;p< params.length;p++){
                        var param = params[p];

                        var normal_is_true = hospital.sickle_cell_clinic.name.toLowerCase().indexOf(param) > -1 ||
                        hospital.sickle_cell_clinic.description.toLowerCase().indexOf(param) > -1 ;

                        if( normal_is_true ){
                            results.push({
                                id: next_results_index,
                                image: hospital.sickle_cell_clinic.image,
                                title:  hospital.sickle_cell_clinic.name,
                                body:  hospital.sickle_cell_clinic.description,
                                hospital: hospital.index_tile_name,
                                department: "",
                                link: hospital.url  + "#" + hospital.sickle_cell_clinic.search_anchor
                            });
                            next_results_index += 1;
                            break;//no need for other params to add the same search results
                        }
                    }
                    //tuber_clinic
                    for(var p=0;p< params.length;p++){
                        var param = params[p];

                        var normal_is_true = hospital.tuber_clinic.name.toLowerCase().indexOf(param) > -1 ||
                        hospital.tuber_clinic.description.toLowerCase().indexOf(param) > -1 ;

                        if( normal_is_true ){
                            results.push({
                                id: next_results_index,
                                image: hospital.tuber_clinic.image,
                                title:  hospital.tuber_clinic.name,
                                body:  hospital.tuber_clinic.description,
                                hospital: hospital.index_tile_name,
                                department: "",
                                link: hospital.url  + "#" + hospital.tuber_clinic.search_anchor
                            });
                            next_results_index += 1;
                            break;//no need for other params to add the same search results
                        }
                    }
                    //wards
                    for(var p=0;p< params.length;p++){
                        var param = params[p];

                        var normal_is_true = hospital.wards.name.toLowerCase().indexOf(param) > -1;

                        if( normal_is_true ){
                            results.push({
                                id: next_results_index,
                                image: hospital.image,
                                title: "Hospital ward ",
                                body:  hospital.wards.name,
                                hospital: hospital.index_tile_name,
                                department: "",
                                link: hospital.url  + "#" + hospital.wards.search_anchor
                            });
                            next_results_index += 1;
                            break;//no need for other params to add the same search results
                        }else{
                            for (let index = 0; index < hospital.wards.list.length; index++) {
                                var item = hospital.wards.list[index];
                                if(item.toLowerCase().indexOf(param) > -1){
                                    results.push({
                                        id: next_results_index,
                                        image: hospital.image,
                                        title: "Hospital ward ",
                                        body:  item,
                                        hospital: hospital.index_tile_name,
                                        department: "",
                                        link: hospital.url  + "#" + hospital.wards.search_anchor
                                    });
                                    next_results_index += 1;
                                    break;
                                }
                            }
                        }
                    }
                } 
                window.setTimeout(()=>{
                    vm.is_searching = false;
                    //randomly shaffle results
                    results = shuffle(results);
                    vm.results = results;
                    //Highlight
                    window.setTimeout(()=>{
                        $('#search_results_body').removeHighlight().highlight(qp);
                    },2000);
                },500);
            }
        },
        mounted(){
            var vm  =this;
            var qp = localStorage.getItem("q");
            if(qp){
                vm.search_helper(qp);
            }
            
        }
    })
});