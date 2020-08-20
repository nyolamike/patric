$(function () {
    //https://codemafia.hashnode.dev/adding-firebase-to-your-web-application-ck222jl4r000q19s1v01aliqc?guid=none&deviceId=b51f21ea-2802-4b3e-83a7-8313bd7dabad
    // // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyCNtSQa8_a7d8Tt6WhtplMNgxyrfcCqA1I",
        authDomain: "patric-msd.firebaseapp.com",
        databaseURL: "https://patric-msd.firebaseio.com",
        projectId: "patric-msd",
        storageBucket: "patric-msd.appspot.com",
        messagingSenderId: "1086663479416",
        appId: "1:1086663479416:web:504980477ef7ccf8e79d8d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var db = firebase.database();

    // alert("Hello there");
    var app = new Vue({
        el: '#app_wrapper',
        data(){
            return {
                menu_links: menu_links,
                questions: [{
                    id: 1,
                    code: "q1",
                    kind: "radio",
                    value: "What is your sex ?",
                    possible_answers: [{
                        id: 1,
                        value: "male",
                        label: "Male"
                    },{
                        id: 2,
                        value: "female",
                        label: "Female"
                    }]
                },{
                    id: 2,
                    code: "q2",
                    kind: "radio",
                    value: "It was simple to use the application/ system",
                    possible_answers: [{
                        id: 3,
                        value: "1",
                        label: "1"
                    },{
                        id: 4,
                        value: "2",
                        label: "2"
                    },{
                        id: 5,
                        value: "3",
                        label: "3"
                    },{
                        id: 6,
                        value: "4",
                        label: "4"
                    },{
                        id: 7,
                        value: "5",
                        label: "5"
                    }]
                },{
                    id: 3,
                    code: "q3",
                    kind: "radio",
                    value: "I was able to get information about the services offered by the hospital",
                    possible_answers: [{
                        id: 8,
                        value: "1",
                        label: "1"
                    },{
                        id: 9,
                        value: "2",
                        label: "2"
                    },{
                        id: 10,
                        value: "3",
                        label: "3"
                    },{
                        id: 11,
                        value: "4",
                        label: "4"
                    },{
                        id: 12,
                        value: "5",
                        label: "5"
                    }]
                },{
                    id: 4,
                    code: "q4",
                    kind: "radio",
                    value: "It easy to learn to use the application on services offered by the hospital",
                    possible_answers: [{
                        id: 13,
                        value: "1",
                        label: "1"
                    },{
                        id: 14,
                        value: "2",
                        label: "2"
                    },{
                        id: 15,
                        value: "3",
                        label: "3"
                    },{
                        id: 16,
                        value: "4",
                        label: "4"
                    },{
                        id: 17,
                        value: "5",
                        label: "5"
                    }]
                },{
                    id: 5,
                    code: "q5",
                    kind: "radio",
                    value: "I believe that most people would learn to use this application on services offered by the hospital",
                    possible_answers: [{
                        id: 18,
                        value: "1",
                        label: "1"
                    },{
                        id: 19,
                        value: "2",
                        label: "2"
                    },{
                        id: 20,
                        value: "3",
                        label: "3"
                    },{
                        id: 21,
                        value: "4",
                        label: "4"
                    },{
                        id: 22,
                        value: "5",
                        label: "5"
                    }]
                },{
                    id: 6,
                    code: "q6",
                    kind: "radio",
                    value: "The information on the application was clear",
                    possible_answers: [{
                        id: 18,
                        value: "1",
                        label: "1"
                    },{
                        id: 19,
                        value: "2",
                        label: "2"
                    },{
                        id: 20,
                        value: "3",
                        label: "3"
                    },{
                        id: 21,
                        value: "4",
                        label: "4"
                    },{
                        id: 22,
                        value: "5",
                        label: "5"
                    }]
                },{
                    id: 7,
                    code: "q7",
                    kind: "radio",
                    value: "Overall, I am satisfied with the ease of accessing information about health services offered by the hospital",
                    possible_answers: [{
                        id: 21,
                        value: "1",
                        label: "1"
                    },{
                        id: 22,
                        value: "2",
                        label: "2"
                    },{
                        id: 23,
                        value: "3",
                        label: "3"
                    },{
                        id: 24,
                        value: "4",
                        label: "4"
                    },{
                        id: 25,
                        value: "5",
                        label: "5"
                    }]
                },{
                    id: 8,
                    code: "q8",
                    kind: "radio",
                    value: "Overall, I am satisfied with the amount of time taken to get the information I wanted",
                    possible_answers: [{
                        id: 21,
                        value: "1",
                        label: "1"
                    },{
                        id: 22,
                        value: "2",
                        label: "2"
                    },{
                        id: 23,
                        value: "3",
                        label: "3"
                    },{
                        id: 24,
                        value: "4",
                        label: "4"
                    },{
                        id: 25,
                        value: "5",
                        label: "5"
                    }]
                },{
                    id: 9,
                    code: "q9",
                    kind: "radio",
                    value: "User interface of the application is pleasant",
                    possible_answers: [{
                        id: 21,
                        value: "1",
                        label: "1"
                    },{
                        id: 22,
                        value: "2",
                        label: "2"
                    },{
                        id: 23,
                        value: "3",
                        label: "3"
                    },{
                        id: 24,
                        value: "4",
                        label: "4"
                    },{
                        id: 25,
                        value: "5",
                        label: "5"
                    }]
                },
                {
                    id: 10,
                    code: "q10",
                    kind: "radio",
                    value: "Would you recommend the application to some else ?",
                    possible_answers: [{
                        id: 21,
                        value: "1",
                        label: "1"
                    },{
                        id: 22,
                        value: "2",
                        label: "2"
                    },{
                        id: 23,
                        value: "3",
                        label: "3"
                    },{
                        id: 24,
                        value: "4",
                        label: "4"
                    },{
                        id: 25,
                        value: "5",
                        label: "5"
                    }]
                },{
                    id: 11,
                    code: "q11",
                    kind: "text",
                    value: "List the most negative aspect(s) about this application",
                    possible_answers: []
                },{
                    id: 12,
                    code: "q12",
                    kind: "text",
                    value: "List the most positive aspect(s) about this application",
                    possible_answers: []
                }],
                answers: {
                    q1: "",
                    q2: "",
                    q3: "",
                    q4: "",
                    q5: "",
                    q6: "",
                    q7: "",
                    q8: "",
                    q9: "",
                    q10: "",
                    q11: "",
                    q12: ""
                },
                question_errors: {
                    q1: "",
                    q2: "",
                    q3: "",
                    q4: "",
                    q5: "",
                    q6: "",
                    q7: "",
                    q8: "",
                    q9: "",
                    q10: "",
                    q11: "",
                    q12: ""
                },
                is_submitting: false
            }
        },
        methods: {
            save_questionare(){

                //validate
                var has_errors =false;
                var now = new Date();
                var final_data = {
                    date: now.toString(),
                    time: now.getTime()
                };
                for (var key in this.answers) {
                    var value = this.answers[key];
                    this.question_errors[key] = "";
                    // console.log("qtn :", key, value);
                    value = value.trim();
                    if(value.length == 0){
                        this.question_errors[key] = "Please provide an answer";
                        has_errors = true;
                    }
                    final_data[key] = value;
                }
                if(has_errors == true){
                    alert("Please answer all questions to submit");
                }
                // return false;
                this.is_submitting = true;

                // Get a key for a new Post.
                var newPostKey = db.ref().child('questionare_v1').push().key;
                // Write the new post's data simultaneously in the posts list and the user's post list.
                var updates = {};
                this.answers
                updates['/answers/' + newPostKey] = final_data;
                var res =  db.ref().update(updates);
                console.log("res ", res);
                this.is_submitting = false;
                alert("Thank you for participating");
                window.location = "/";
            }
        }
    })
});