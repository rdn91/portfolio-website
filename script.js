document.addEventListener("DOMContentLoaded", () => {
    const terminalModel = document.getElementById("terminal-model");
    const openTerminalBtn = document.querySelector('a[href="#terminal"]');
    const closeTerminalBtn = document.getElementById("close-terminal");
    const terminalInput = document.getElementById("terminal-input");
    const terminalOutput = document.getElementById("terminal-output");

    if (openTerminalBtn && terminalModel) {
        openTerminalBtn.addEventListener("click", (e) => {
            e.preventDefault();
            terminalModel.classList.remove('hidden');
            terminalInput.focus();
        });
        closeTerminalBtn.addEventListener("click", (e) => {
            terminalModel.classList.add("hidden");
        });
        terminalInput.addEventListener("keypress", (e) => {
            if (e.key === 'Enter') {
                const command = terminalInput.value.trim();
                if (command) {
                    const historyLine = document.createElement("p");
                    historyLine.innerHTML = `<span class="prompt">jackforce@admin:$</span>${command}`;
                    terminalOutput.appendChild(historyLine);

                    const responseLine = document.createElement("p");
                    if (command.toLowerCase() === 'clear') {
                        terminalOutput.innerHTML = ''
                    } else if (command.toLowerCase() === 'help') {
                        responseLine.textContent = "Available commands: clear, help"
                    } else {
                        responseLine.textContent = command;
                        terminalOutput.appendChild(responseLine);
                    }
                    terminalOutput.scrollTop = terminalOutput.scrollHeight;
                }
                terminalInput.value = ""
            }
        });
    }
});