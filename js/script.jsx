function validation(){

    // validation on first name regular expression
    if(document.frm.fname.value=="")
    {
        alert('Please enter your First Name');
        document.frm.fname.focus();
        return false;
    }
    // check valid first name regular expression 
    var nm =  /^[a-zA-Z]+$/;
    
    if(!nm.test(document.frm.fname.value))
    {
        alert('Please enter your First Name Alphabatick ch');
        document.frm.fname.focus();
        return false;
    }

    // last name
    if(document.frm.lname.value=="")
    {
        alert('Please Enter Your LastName');
        document.frm.lname.focus();
        return false;
    }
    // chack valis last name
    var nm =  /^[a-zA-Z]+$/;
    
    // email id
    if(document.frm.email.value=="")
    {
        alert('Please Enter Your Address');
        document.email.address.focus();
        return false;
    }

    // check regular email id
    var em = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!em.test(document.frm.email.value))
    {
        alert('Please Enter Your valid Address');
        document.frm.email.focus();
        return false;
    }

    // mobile 
    if(document.frm.mobile.value=="")
    {
        alert('Please Enter Your mobile number');
        document.frm.mobile.focus();
        return false;
    }
    // regular mobile 
   
    var number =  /^\d{10}$/;

    if(!number.test(document.frm.mobile.value))
    {
        alert('Please Enter Your valid mobile number');
        document.frm.mobile.focus();
        return false;
    }
}



