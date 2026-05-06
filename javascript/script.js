document.addEventListener('DOMContentLoaded', () => {
    
    const gamerForm = document.getElementById('gamerForm');
    const responseArea = document.getElementById('responseMessage');

    gamerForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const name = document.getElementById('userName').value;

        responseArea.innerHTML = `
            <div style="margin-top: 20px; padding: 20px; border: 2px dashed #00d2ff; border-radius: 10px;">
                <h3>Game On, ${name}!</h3>
                <p>You have successfully logged in. Whether you are surviving <strong>Resident Evil</strong>, 
                exploring <strong>Final Fantasy</strong>, or catching <strong>Pokémon</strong>, 
                your adventure starts now!</p>
            </div>
        `;

        gamerForm.reset();
    });
});
