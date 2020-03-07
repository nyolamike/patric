

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
                    var path = "/search_results.html";
                    window.location = path;
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
            }
        },
        mounted(){
            var vm  =this;
            var qp = localStorage.getItem("q");
            if(qp){
                vm.query = qp;
            }
            window.setTimeout(()=>{
                vm.is_searching = false;
                vm.results = [{
                    id:1,
                    image: "https://images.unsplash.com/photo-1575468332949-4bd46064dd66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=225&q=60",
                    title: "The Treament Given to Sick Patients Is Here",
                    body: "The thing that works well is very much liked by the thing that is like as if we are here ",
                    hospital: "Mulago",
                    department: "Dental",
                    link: "/mulago.html#dental_search"
                },{
                    id:2,
                    image: "https://images.unsplash.com/photo-1575468332949-4bd46064dd66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=225&q=60",
                    title: "The Treament Given to Sick Patients Is Here",
                    body: "The thing that works well is very much liked by the thing that is like as if we are here ",
                    hospital: "Mulago",
                    department: "Dental",
                    link: "/mulago.html#dental_search2"
                },{
                    id:3,
                    image: "https://images.unsplash.com/photo-1575468332949-4bd46064dd66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=225&q=60",
                    title: "The Treament Given to Sick Patients Is Here",
                    body: "The thing that works well is very much liked by the thing that is like as if we are here ",
                    hospital: "Mulago",
                    department: "Dental",
                    link: "/mulago.html#dental_search3"
                }];
            },3000);
        }
    })
});