function showLoader() {
    const preloader = document.getElementById("preloader");
    preloader.style.visibility = "visible";

    const loader = document.getElementById("loader");

    loader.style.visibility = "visible";
}

function hideLoader() {
    const preloader = document.getElementById("preloader");
    preloader.style.visibility = "hidden";

    const loader = document.getElementById("loader");

    loader.style.visibility = "hidden";
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function addProblem(source, description) {
    const block = `<h3 class="main__h3">
    ${source}</h3>
    <p class="theorem__p">
             ${description}</p>`

    problems.insertAdjacentHTML('beforeend', block);
}

const delay = ms => new Promise(res => setTimeout(res, ms));

const fetchProblems = async () => {
    showLoader();
    await delay(300);
    try {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${getRandomInt(10)}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                data.forEach((p) => {
                    addProblem(p.title, p.body);
                });
            });
    } catch (e) {
        problems.innerHTML = '<p class="theorem__p">Что-то пошло не так. Попробуйте позже</p>';
    } finally {
        hideLoader();
    }
}

window.addEventListener("load", fetchProblems);