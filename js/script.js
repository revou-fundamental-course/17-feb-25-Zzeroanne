// Ini JavaScript External

// welcoming the guest
var welcome = prompt('What can we call you?');
document.getElementById('nama').innerHTML = welcome;

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('call-us-form');
    const nameInput = document.getElementById('name-input');
    const emailInput = document.getElementById('email-input');

    form.addEventListener('submit', (e) => {
        let isValid = true;

        // Validate name
        if (nameInput.value.trim() === '') {
            nameInput.setCustomValidity('Name cannot be blank');
            nameInput.reportValidity();
            isValid = false;
        } else {
            nameInput.setCustomValidity('');
        }

        // Validate email
        const emailPattern = /.+@.+\..+/;
        if (!emailPattern.test(emailInput.value)) {
            emailInput.setCustomValidity('Please use a valid email (must include @)');
            emailInput.reportValidity();
            isValid = false;
        } else {
            emailInput.setCustomValidity('');
        }

        if (!isValid) {
            e.preventDefault(); // Stop submit if validation fails
        }
    });
});


    //for index identifier
    let indexBanner = 0;

    showBanner();

    function nextBanner() {
        //increment dari indexBanner
        indexBanner += 1;
        showBanner();
    }

    function showBanner() {
        let banner = document.getElementsByClassName('main-banner');

        //for reset condition
        if (indexBanner > banner.length -1) {
            indexBanner = 0;
        }

        //loop for hide banner
        for (let i = 0; i < banner.length; i++) {
            banner[i].style.display = 'none';
            }
        //for showing the banner
        banner[indexBanner].style.display = 'block';
    }

    //auto play banner awokawok
    setInterval(nextBanner, 2000);