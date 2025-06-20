document.getElementById('send-button').addEventListener('click', () => {
            // Hide feedback form and show thank-you message
            document.getElementById('feedback-card').classList.add('d-none');
            document.getElementById('thank-you-card').classList.remove('d-none');
        });

