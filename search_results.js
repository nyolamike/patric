

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