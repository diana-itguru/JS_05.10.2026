const regexFio = /^[А-ЯЁа-яёA-Za-z\-]+(\s+[А-ЯЁа-яёA-Za-z\-]+){1,2}$/;
const regexPhone = /^(\+996|\+7|7|8)?[\s\-]?\(?[0-9]{3,4}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2,3}([\s\-]?[0-9]{2})?$/;
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validateForm(event) {
    if (event) event.preventDefault();

    const fio = document.getElementById('inputFio').value.trim();
    const phone = document.getElementById('inputPhone').value.trim();
    const email = document.getElementById('inputEmail').value.trim();

    let isValid = true;

    if (regexFio.test(fio)) {
        document.getElementById('errorFio').classList.add('hidden');
    } else {
        document.getElementById('errorFio').classList.remove('hidden');
        isValid = false;
    }

    if (regexPhone.test(phone)) {
        document.getElementById('errorPhone').classList.add('hidden');
    } else {
        document.getElementById('errorPhone').classList.remove('hidden');
        isValid = false;
    }

    if (regexEmail.test(email)) {
        document.getElementById('errorEmail').classList.add('hidden');
    } else {
        document.getElementById('errorEmail').classList.remove('hidden');
        isValid = false;
    }

    if (isValid) {
        alert("РЕГИСТРАЦИЯ ПРОШЛА УСПЕШНО!");

        document.getElementById('authScreen').classList.add('hidden');
        document.getElementById('gameScreen').classList.remove('hidden');

        const nameParts = fio.split(/\s+/);
        const firstName = nameParts.length > 1 ? nameParts[1] : nameParts[0];

        document.getElementById('welcomeText').innerText = `* Твоя ДУША наполнена РЕШИМОСТЬЮ, ${firstName}.`;
    }
}

function activateStealthChat() {
    document.getElementById('gameScreen').classList.add('hidden');
    document.getElementById('stealthChat').classList.remove('hidden');
}

function closeChatFast() {
    document.getElementById('stealthChat').classList.add('hidden');
    document.getElementById('gameScreen').classList.remove('hidden');
}
