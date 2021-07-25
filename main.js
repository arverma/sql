document.addEventListener('DOMContentLoaded', () => {
    hljs.initHighlightingOnLoad();

    const codeBlockX = document.getElementById('code-x');
    const codeBlockY = document.getElementById('code-y');
    const copyButtonX = document.getElementById('copy-button-x');
    const copyButtonY = document.getElementById('copy-button-y');
    const copySuccess = document.getElementById('copy-success');

    const copyTextHandlerX = () => {
        const text = codeBlockX.innerText;

        // Clipboard API
        navigator.clipboard.writeText(text).then(
            () => {
                copySuccess.classList.add('show-message');
                setTimeout(() => {
                    copySuccess.classList.remove('show-message');
                }, 1000);
            },
            () => {
                console.log('Error writing to the clipboard');
            }
        );
    };

    const copyTextHandlerY = () => {
        const text = codeBlockY.innerText;

        // Clipboard API
        navigator.clipboard.writeText(text).then(
            () => {
                copySuccess.classList.add('show-message');
                setTimeout(() => {
                    copySuccess.classList.remove('show-message');
                }, 1000);
            },
            () => {
                console.log('Error writing to the clipboard');
            }
        );
    };

    copyButtonX.addEventListener('click', copyTextHandlerX);
    copyButtonY.addEventListener('click', copyTextHandlerY);
});