const form = document.getElementById("form");
const problems = document.getElementById("problems");

if (localStorage.getItem('problems')) {
    problems.innerHTML = "";
    const problems_ = JSON.parse(localStorage.getItem('problems'));
    problems_.forEach((p) => {
        createProblem(p.source, p.description, "saved");
    });
}


function retrieveFromValue(event) {
    event.preventDefault();

    const source = form.querySelector('[name="source"]'),
        description = form.querySelector('[name="description"]');

    const values = {
        source: source.value,
        description: description.value
    }

    if (!values.source) {
        alert("Поле источник не должно быть пустым");
        return;
    }

    if (!values.description) {
        alert("Описание задачи не должно быть пустым");
        return;
    }

    createProblem(values.source, values.description, "new")

    form.reset();
}


function createProblem(source, description, type) {
    const block = `<h3 class="main__h3">
    ${source}</h3>
    <p class="theorem__p">
             ${description}</p>`

    problems.insertAdjacentHTML('beforeend', block);

    if (type === "new") {

        let problems_ = [];

        if (localStorage.getItem('problems')) {
            problems_ = JSON.parse(localStorage.getItem('problems'));
        }

        problems_.push({source, description});

        localStorage.setItem('problems', JSON.stringify(problems_));
    }
}

form.addEventListener('submit', retrieveFromValue);
