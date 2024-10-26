$(document).ready(function() {
    // Form validation
    $('#signup-form').submit(function(e) {
        e.preventDefault();
        if (this.checkValidity()) {
            alert('Form submitted successfully!');
            this.reset();
        } else {
            $(this).addClass('was-validated');
        }
    });

    // Add feature button
    $('#add-feature').click(function() {
        var newFeature = prompt('Enter a new feature:');
        if (newFeature) {
            $('#feature-list').append('<li>' + newFeature + '</li>');
        }
    });

    // Hover effect on buttons and links
    $('.btn, a').hover(
        function() { $(this).css('opacity', '0.8'); },
        function() { $(this).css('opacity', '1'); }
    );
});

