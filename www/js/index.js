var app = {

    users : {
        loginerror : [],
        name : ["winnie", "doni", "geek237"],
        pwd: "dieusauve",
        storageKey : "geek-app-237"
    },

   

    checkusername: function(username){
        for(var i=0; i< app.users.name.length; i++){
           
            if (username == app.users.name[i]){
                    return true;
            }

        }
        return false;
    },


    checkpassword: function(pwds){
        if(pwds==app.users.pwd){
            return true;
        }
        return false;
    },

    checkGoodLogin: function(){
        
        var username = $("#usrid").val();
        
        var pwd =$("#pwdid").val();
       if (this.checkpassword(pwd)){
           console.log("pass pb");
       }

        if(this.checkusername(username) || this.checkpassword(pwd)){
            
           window.location.href="home.html";
            
        }else{

                app.users.loginerror.push("u: "+username);
                app.users.loginerror.push("p: " +pwd);
                this.saveloginerror();
        }
       
        
    },

  

    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        $("#sendenid").click(this.checkGoodLogin.bind(this));

    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
     //immer da bei Aufruf der Seite
     app.loadloginerror();
    },

    saveloginerror: function(){
        var geekJSON = JSON.stringify(app.users.loginerror);
        
        localStorage.setItem(app.users.storageKey, geekJSON);
    },

    loadloginerror: function() {
        var geekJSON= localStorage.getItem(app.users.storageKey);
        if (geekJSON != null) {
         app.users.loginerror = JSON.parse(geekJSON);
        }
       }

    
};

app.initialize();