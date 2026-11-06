const PAPER = {
    "Обычная": 1.5,
    "Повышенной белизны": 2.5,
    "Мелованная": 4,
    "Дизайнерская": 6
};

const COLOR = {
    "1-0": { form: 100, sheet: 15 },
    "1-1": { form: 150, sheet: 25 },
    "4-0": { form: 200, sheet: 60 },
    "4-1": { form: 210, sheet: 85 },
    "4-4": { form: 220, sheet: 112 }
};

const CARDS_PER_SHEET = 30;
const MIN_QUANTITY = 30;

const qtyField = document.getElementById("card-quantity");
const paperField = document.getElementById("card-paper");
const colorField = document.getElementById("card-color");
const priceLabel = document.getElementById("final-price");

function fillOptions(field, list) {
    for (const name in list) {
        field.add(new Option(name, name));
    }
}

function priceOf() {
    const qty = Math.max(MIN_QUANTITY, Number(qtyField.value) || 0);
    const sheets = Math.ceil(qty / CARDS_PER_SHEET);

    const paperCost = PAPER[paperField.value];
    const color = COLOR[colorField.value];

    return color.form + paperCost * sheets + color.sheet * sheets;
}

function redraw() {
    priceLabel.textContent = priceOf().toLocaleString("ru-RU");
}

fillOptions(paperField, PAPER);
fillOptions(colorField, COLOR);

[qtyField, paperField, colorField].forEach(control => {
    control.addEventListener("input", redraw);
});

redraw();