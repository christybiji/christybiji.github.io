// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    // Theme management
    window.hbb = {
        defaultTheme: document.documentElement.dataset.wcThemeDefault || 'system',
        setDarkTheme: function() {
            document.documentElement.classList.add('dark');
            document.documentElement.style.colorScheme = 'dark';
            localStorage.setItem('wc-color-theme', 'dark');
        },
        setLightTheme: function() {
            document.documentElement.classList.remove('dark');
            document.documentElement.style.colorScheme = 'light';
            localStorage.setItem('wc-color-theme', 'light');
        }
    };

    // Initialize theme based on stored preference or system preference
    function initializeTheme() {
        const storedTheme = localStorage.getItem('wc-color-theme');
        
        if (storedTheme) {
            if (storedTheme === 'dark') {
                window.hbb.setDarkTheme();
            } else {
                window.hbb.setLightTheme();
            }
        } else {
            if (window.hbb.defaultTheme === 'dark') {
                window.hbb.setDarkTheme();
            } else if (window.hbb.defaultTheme === 'light') {
                window.hbb.setLightTheme();
            } else if (window.hbb.defaultTheme === 'system') {
                if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    window.hbb.setDarkTheme();
                } else {
                    window.hbb.setLightTheme();
                }
            }
        }
    }

    // Theme toggle button functionality
    function setupThemeToggle() {
        const themeToggle = document.querySelector('.theme-toggle');
        if (!themeToggle) return;

        themeToggle.addEventListener('click', function() {
            const isDark = document.documentElement.classList.contains('dark');
            if (isDark) {
                window.hbb.setLightTheme();
            } else {
                window.hbb.setDarkTheme();
            }
        });

        // Update button state
        function updateButtonState() {
            const isDark = document.documentElement.classList.contains('dark');
            const moonIcon = themeToggle.querySelector('#moon');
            const sunIcon = themeToggle.querySelector('#sun');
            
            if (isDark) {
                moonIcon.style.display = 'none';
                sunIcon.style.display = 'block';
                themeToggle.setAttribute('data-theme', 'dark');
            } else {
                moonIcon.style.display = 'block';
                sunIcon.style.display = 'none';
                themeToggle.setAttribute('data-theme', 'light');
            }
        }

        // Initial button state
        updateButtonState();

        // Listen for theme changes
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    updateButtonState();
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });
    }

    // System theme change detection
    function setupSystemThemeDetection() {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        mediaQuery.addEventListener('change', function(e) {
            const storedTheme = localStorage.getItem('wc-color-theme');
            if (!storedTheme && window.hbb.defaultTheme === 'system') {
                if (e.matches) {
                    window.hbb.setDarkTheme();
                } else {
                    window.hbb.setLightTheme();
                }
            }
        });
    }

    // Initialize everything
    initializeTheme();
    setupThemeToggle();
    setupSystemThemeDetection();

    // Debug logging
    console.debug(`Default Hugo Blox Builder theme is ${window.hbb.defaultTheme}`);
});

// Additional utility functions
function getCurrentTheme() {
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

function isDarkMode() {
    return getCurrentTheme() === 'dark';
}

// Export for global access
window.getCurrentTheme = getCurrentTheme;
window.isDarkMode = isDarkMode;
