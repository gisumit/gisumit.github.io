var app = document.getElementById('app');
app.page = 'notice';


var lblcurrentmsg = document.getElementById('lblcurrentmsg'),
    txtnewmsg = document.getElementById('txtnewmsg'),
    btnupdatemsg = document.getElementById('btnupdatemsg'),
    rootref = new Firebase('https://alert-msg.firebaseio.com/'),
    currentmsgref = rootref.child('currentmsgref');

    document.getElementById('btnupdatemsg').addEventListener("click", function(){
        currentmsgref.set(txtnewmsg.value);
        txtnewmsg.value = '';
    });
    
    currentmsgref.on('value', function(snapshot){
        lblcurrentmsg.innerText = snapshot.val();
    });