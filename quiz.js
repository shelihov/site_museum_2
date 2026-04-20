// Обработка интерактивных тестов
const quizForms = document.querySelectorAll("[data-quiz]");

quizForms.forEach((quizForm) => {
    const resultNode = quizForm.querySelector("[data-quiz-result]");
    const resetButton = quizForm.querySelector("[data-quiz-reset]");

    quizForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const questions = quizForm.querySelectorAll(".quiz_question");
        let score = 0;
        let answeredCount = 0;

        questions.forEach((question) => {
            const correctAnswer = question.dataset.answer;
            const selectedOption = question.querySelector("input:checked");

            question.classList.remove("is-correct", "is-wrong");

            if(!selectedOption) {
                return;
            }

            answeredCount +=1;

            if(selectedOption.value === correctAnswer) {
                score += 1;
                question.classList.add("is-correct");
            } else {
                question.classList.add("is-wrong");
            }
        });

        if(!resultNode) {
            return;
        }

        if (answeredCount < questions.length) {
            resultNode.textContent = "Пожалуйста, ответьте на все вопросы.";
            resultNode.classList.remove("is-success");
            return;
        }

        const passScore = Number(quizForm.dataset.passScore) || questions.length
        resultNode.textContent = `Ваш результат: ${score} из ${questions.length}.`;
        resultNode.classList.toggle("is-success", score >= passScore);

        if (!resetButton) {
            return;
        }

        resetButton.addEventListener("click", () => {
            quizForm.reset();

            quizForm.querySelectorAll(".quiz_question").forEach((question) => {
                question.classList.remove("is-correct", "is-wrong");
            });

            if (resultNode) {
                resultNode.textContent = "";
                resultNode.classList.remove("is-success");
            }
        });
    });
});
