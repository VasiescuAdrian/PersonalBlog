document.addEventListener('DOMContentLoaded', function() {
    const questions = [
        {
            question: "Te simți fericit?",
            options: { a: "Da", b: "Nu" },
            correctAnswer: "a",
            correctResponse: "Super! Mă bucur pentru tine!",
            incorrectResponse: "Îmi pare rău să aud asta. Sper să fie mai bine în curând."
        },
        {
            question: "Îți place JavaScript?",
            options: { a: "Da", b: "Nu", c: "Uneori" },
            correctAnswer: "a",
            correctResponse: "Excelent! Continuă să înveți!",
            incorrectResponse: "Poate ar trebui să încerci mai multe tutoriale!"
        },
        {
            question: "Ai folosit vreodată un chatbot înainte?",
            options: { a: "Da", b: "Nu" },
            correctAnswer: "a",
            correctResponse: "Perfect! Atunci știi cum funcționează.",
            incorrectResponse: "Nu-i nimic, acum ai ocazia să înveți!"
        }
    ];

    let currentQuestionIndex = 0;
    const chatContainer = document.getElementById("chat-container");
    const chatForm = document.getElementById("chat-form");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");

    
    setTimeout(() => displayQuestion(), 1500);

    function displayQuestion() {
        if (currentQuestionIndex >= questions.length) {
            currentQuestionIndex = 0; 
        }

        const currentQuestion = questions[currentQuestionIndex];
        const optionsHTML = Object.keys(currentQuestion.options)
            .map(key => `<span class="option">${key}. ${currentQuestion.options[key]}</span>`)
            .join(' ');

        addMessage(`Bot: ${currentQuestion.question}<br>${optionsHTML}`, 'bot');
    }

    function addMessage(text, sender) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", sender);
        
        const processedText = text.replace(/(Bot:|You:)/, '<strong>$1</strong>');
        
        messageDiv.innerHTML = processedText;
        chatContainer.appendChild(messageDiv);
        scrollChatContainerToBottom();
    }

    function scrollChatContainerToBottom() {
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    chatForm.addEventListener("submit", function(event) {
        event.preventDefault();
        handleUserInput();
    });

   
    userInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            handleUserInput();
        }
    });

    function handleUserInput() {
        const userResponse = userInput.value.trim().toLowerCase();
        
        if (!userResponse) return;
        
        
        addMessage(`You: ${userResponse}`, 'user');
        
        
        userInput.disabled = true;
        sendButton.disabled = true;
        
        
        setTimeout(() => {
            processUserAnswer(userResponse);
            userInput.value = "";
            userInput.disabled = false;
            sendButton.disabled = false;
            userInput.focus();
        }, 500);
    }

    function processUserAnswer(userResponse) {
        const currentQuestion = questions[currentQuestionIndex];
        let botResponse;
        
        if (userResponse === currentQuestion.correctAnswer) {
            botResponse = currentQuestion.correctResponse;
        } else {
            botResponse = currentQuestion.incorrectResponse;
        }
        
        addMessage(`Bot: ${botResponse}`, 'bot');
        
        
        setTimeout(() => {
            currentQuestionIndex++;
            displayQuestion();
        }, 1000);
    }
});