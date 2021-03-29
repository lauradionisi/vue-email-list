Vue.config.devtools = true;

var app = new Vue({
    el: "#app",
    data: {
        mailingList: [],             
    },
     
    
    mounted() {
        axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((result) => {
                console.log(result.data.response);
                this.mailingList = result.data.response;
             });                   
    }
  
});
