test('MutationObserver', () => {
    // Set up a test container element
    const container = document.createElement('div');
    document.body.appendChild(container);

    // Set up a MutationObserver instance to observe the test container element
    const observer = new MutationObserver((mutations) => {
        // The callback function should be called whenever there is a mutation
        // in the test container element
        mutations.forEach((mutation) => {
            
            expect(mutation.type).toBe('childList');
        });
    });
    observer.observe(container, { childList: true });

    // Create a test element and append it to the test container
    const testElement = document.createElement('div');
    container.appendChild(testElement);

    // Disconnect the observer to stop observing
    observer.disconnect();
});


