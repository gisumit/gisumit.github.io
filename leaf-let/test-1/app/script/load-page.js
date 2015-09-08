var lblcurrentmsg = document.getElementById('lblcurrentmsg'),
    txtnewmsg = document.getElementById('txtnewmsg'),
    btnupdatemsg = document.getElementById('btnupdatemsg'),
    rootRef = new Firebase('https://alert-msg.firebaseio.com'),
    currentmsgref = rootRef.child('currentmsgref');
<<<<<<< HEAD
btnupdatemsg.addEventListener('click', function () {
    currentmsgref.set(txtnewmsg.value);
    txtnewmsg.value = '';
});
=======

    btnupdatemsg.addEventListener('click', function(e){
        currentmsgref.set(txtnewmsg.value);
        txtnewmsg.value = '';
    });
>>>>>>> origin/master
    
currentmsgref.on('value', function (snapshot) {
    lblcurrentmsg.innerText = snapshot.val();
});
