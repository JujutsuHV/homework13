const inputDate = document.getElementById('input_date');
const button = document.getElementById('push');
const result = document.getElementById('result');
const text_forms = ['день', 'дня', 'дней'];

function calculateDate() {
    const dateValue = inputDate.value;
    const dateTimestamp = Date.parse(dateValue);
    const currentTimestamp = Date.now();
    const timeDiff = dateTimestamp - currentTimestamp;
    const diffDays = Math.floor(timeDiff / (1000 * 3600 * 24));

    let wordForm = function (diffDays, word) {
        cases = [2, 0, 1, 1, 1, 2];
        return word[(diffDays % 100 > 4 && diffDays % 100 < 20) ? 2 : cases[(diffDays % 10 < 5) ? diffDays % 10 : 5]];
    }
    result.textContent = `До вашего дня рождения осталось ${diffDays} ${wordForm(diffDays, ['день', 'дня', 'дней'])} `;
}


button.addEventListener('click', calculateDate);