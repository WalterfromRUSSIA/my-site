
const form = document.getElementById('telegram-form');
// let element = null;
// element.addEventListener('click', function() {
//     console.log('Element clicked');
// });
// const myLink = document.querySelector("#no_link");
// myLink?.addEventListener('click', () => {
//     console.log('You visited the link');
// });
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const name = formData.get('name');
    const message = formData.get('message');
    const token = '8107951588:AAFDIgcNcFcVTsrNJYq6bHTim4bO9GCgyeU'; // Replace with your actual token
    const chatId = '2105392986'; // Replace with your actual chat ID

    const text = `Имя: ${name}\nСообщение: ${message}`;
    const url = `https//api.telegram.org/bot8107951588:AAFDIgcNcFcVTsrNJYq6bHTim4bO9GCgyeU/sendMessage?chat_id=2105392986&text=${text}`

    // fetch(url)
    //     .then(response => response.json())
    //     .then(data => {
    //         if (data.ok) {
    //             window.location.href = 'thank-you.html'; // Redirect to thank-you page
    //         } else {
    //             alert('Ошибка отправки сообщения');
    //         }
    //     })
    //     .catch(error => console.error('Error:', error));
  
axios.get('your-url-here')
    .then(response => {
        if (response.data.ok) {
            window.location.href = 'thank-you.html'; // Redirect to thank-you page
        } else {
            alert('Ошибка отправки сообщения');
        }
    })
    .catch(error => {
        if (error.response) {
            // Error on the response (4xx or 5xx status codes)
            console.error('Server responded with:', error.response.status);
        } else if (error.request) {
            // Error on the request (no response received)
            console.error('No response received');
        } else {
            // Other errors
            console.error('Error:', error.message);
        }
    });
});