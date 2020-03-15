$(function () {
    // alert("Hello there");
    var app = new Vue({
        el: '#app_wrapper',
        data(){
            return {
                common_medical_services: common_medical_services,
                query: "",
                menu_links: menu_links,
                page_data: page_data,
                hospital: {
                    index_tile_name: "",
                    bg_name: ""
                }
            }
        },
        methods: {
            search: function(){
                var query = this.query.trim();
                if(query.length > 0){
                    localStorage.setItem("q",query);
                    var path = "/search_results.html";
                    window.location = path;
                    // alert(path);
                    // window.location.assign(path);
                }
            },
            gotohospital(hospital){
                window.location = hospital.url;
            }
        },
        created(){
            var items = window.location.pathname.split("/");
            var item = items[items.length - 1];
            if(item.indexOf(".html") == -1){
                item = item + ".html";
            }
            var page_name =  item;
            var index = page_data_reference[page_name];
            var page_object = page_data.hospitals[index];
            this.hospital = page_object;
        }
    })
});