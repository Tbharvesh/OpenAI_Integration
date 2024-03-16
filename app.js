
function getOpenAIResponse() {
    const userPrompt = document.getElementById('userPrompt').value;
    console.log(userPrompt)
    fetch('http://localhost:3000/getResponse', {
        method: 'POST',  //client is making a POST request --> bec we need to send data to server
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userPrompt })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('openAIResponse').innerText = data;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
