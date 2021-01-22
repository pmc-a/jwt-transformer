window.onload = async () => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');

    if (!token) {
        // noop
    }

    try {
        const response = await fetch('/decode', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token }),
        });

        const parsedResponse = await response.json();
        const userFeedback = !response.ok ? parsedResponse.error : JSON.stringify(parsedResponse);

        document.getElementById('api-response').innerText = `Response from API: ${userFeedback}`;
    } catch (error) {
        console.error(error);
    }
}