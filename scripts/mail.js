// 

var form=document.getElementById('cform');
form.addEventListener('submit',function submit1(e)
{
  e.preventDefault()
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var message=document.getElementById("message").value;
    // console.log(name)
    // console.log(email)
    // console.log(message)

    sendEmail(name,email,message);
});

function sendEmail(name,email,message)
{
    Email.send({
        Host:"smtp.gmail.com",
        Username: 'prabhavtewari@gmail.com',
        Password:"nkmlyapdhsyyslom",
        To: '1905331@kiit.ac.in',
        From:'prabhavtewari@gmail.com',
        Subject:`Message form ${name} via porfolio website`,
        Body:`Name: ${name}<br>Email: ${email}<br>Message: ${message}`

    }).then((message)=>alert("Message Sent"))
}
