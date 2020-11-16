onSubmit = () => {
    let person = {
        name: $('input.vistorName').val(),
        email: $('input.vistorEmail').val(),
        message: $('textarea.vistorMessage').val()
    }
    window.open('mailto:reiddain@outlook.com?subject=Message from: ' + person.name + " | At: " + person.email + "&body= " + person.message );
}
