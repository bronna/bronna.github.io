function navigate(event) {
    if (event.target.classList.contains('nested-link')) {
        // If the nested link was clicked, allow the default action (the navigation to the href of the link)
    } else {
        // Otherwise, prevent the default action and navigate to the project page
        event.preventDefault();
        window.open = ('https://observablehq.com/@bronna/parametric-seashell', '_blank');
    }
}