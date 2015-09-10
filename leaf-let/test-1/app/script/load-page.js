var lblcurrentmsg = document.getElementById('lblcurrentmsg'),
    txtnewmsg = document.getElementById('txtnewmsg'),
    btnupdatemsg = document.getElementById('btnupdatemsg'),
    rootRef = new Firebase('https://alert-msg.firebaseIO.com'),
    currentMessageRef = rootRef.child('currentmsgref');
/* btnupdatemsg.addEventListener('click',function(){ currentMessageRef.set(txtnewmsg.value); }); */
function myFunction(){ currentMessageRef.set(txtnewmsg.value); txtnewmsg.value='';}
currentMessageRef.on('value', function(snapshot) { lblcurrentmsg.innerText = snapshot.val(); });
