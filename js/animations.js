// Scroll Progress Indicator
        const header = document.querySelector('header');
        
        window.addEventListener('scroll', () => {
            const scrollProgress = document.querySelector('.scroll-progress');
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (window.scrollY / scrollHeight) * 100;
            scrollProgress.style.width = scrolled + '%';
            
            // Header blur effect
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Back to Top Button
        const backToTop = document.querySelector('.back-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Intersection Observer for scroll reveal animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, observerOptions);

        // Observe all sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.add('scroll-reveal');
            observer.observe(section);
        });

        // Animated number counters for metrics
        const animateCounter = (element, target, duration = 2000) => {
            const start = 0;
            const increment = target / (duration / 16);
            let current = start;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    element.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    element.textContent = target;
                }
            };

            updateCounter();
        };

        // Observe metric cards for counter animation
        const metricsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.dataset.counted) {
                    const valueElement = entry.target.querySelector('.metric-value');
                    const text = valueElement.textContent;
                    
                    // Extract number from text (handles $17M, 132%, etc)
                    const match = text.match(/\d+/);
                    if (match) {
                        const number = parseInt(match[0]);
                        const prefix = text.match(/^\D*/)[0];
                        const suffix = text.match(/\D*$/)[0];
                        
                        valueElement.textContent = prefix + '0' + suffix;
                        
                        setTimeout(() => {
                            let current = 0;
                            const increment = number / 50;
                            const timer = setInterval(() => {
                                current += increment;
                                if (current >= number) {
                                    valueElement.textContent = prefix + number + suffix;
                                    clearInterval(timer);
                                } else {
                                    valueElement.textContent = prefix + Math.floor(current) + suffix;
                                }
                            }, 30);
                        }, 200);
                        
                        entry.target.dataset.counted = 'true';
                    }
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.metric-card').forEach(card => {
            metricsObserver.observe(card);
        });

        // Parallax effect on scroll
        const heroBgImage = document.querySelector('.hero-bg-image');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const parallaxElements = document.querySelectorAll('.parallax');
            
            // Hero background image parallax (slower movement downward)
            if (heroBgImage && scrolled < 800) {
                heroBgImage.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
            
            parallaxElements.forEach(element => {
                if (element !== heroBgImage) {
                    const speed = element.dataset.speed || 0.5;
                    element.style.transform = `translateY(${scrolled * speed}px)`;
                }
            });
        });

        // Magnetic button effect (subtle)
        document.querySelectorAll('.btn, .contact-link').forEach(button => {
            button.addEventListener('mousemove', (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
            });

            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translate(0, 0)';
            });
        });

        // Add typing cursor effect to hero tagline on load
        window.addEventListener('load', () => {
            const tagline = document.querySelector('.hero-tagline');
            setTimeout(() => {
                tagline.classList.add('typing-cursor');
                setTimeout(() => {
                    tagline.classList.remove('typing-cursor');
                }, 3000);
            }, 2000);
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Add subtle entrance animation to value cards on hover
        document.querySelectorAll('.value-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) scale(1.02)';
            });
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Cursor spotlight effect on case studies
        document.querySelectorAll('.case-study').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const spotlight = card.querySelector('::after') || card;
                card.style.setProperty('--mouse-x', x + 'px');
                card.style.setProperty('--mouse-y', y + 'px');
                
                // Update the ::after position via custom properties
                card.style.background = `
                    radial-gradient(
                        600px circle at ${x}px ${y}px,
                        rgba(110, 193, 228, 0.05),
                        transparent 40%
                    ),
                    var(--white)
                `;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.background = 'var(--white)';
            });
        });

        // Performance optimization: Debounce scroll events
        function debounce(func, wait = 10) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        }

        // Apply debouncing to scroll handler
        const debouncedScroll = debounce(() => {
            // Scroll-dependent animations go here
        }, 10);

        window.addEventListener('scroll', debouncedScroll);

        console.log('🚀 Portfolio loaded with advanced animations');

        // ====== NEW ANIMATIONS ======

        // 1. PARTICLE NETWORK BACKGROUND
        (function() {
            const canvas = document.getElementById('particle-canvas');
            if (!canvas) return;
            
            const ctx = canvas.getContext('2d');
            const heroSection = document.querySelector('.hero');
            
            // Set canvas size
            function resizeCanvas() {
                canvas.width = heroSection.offsetWidth;
                canvas.height = heroSection.offsetHeight;
            }
            resizeCanvas();
            window.addEventListener('resize', resizeCanvas);
            
            // Particle system
            const particles = [];
            const particleCount = 50;
            const connectionDistance = 150;
            const mouse = { x: null, y: null, radius: 150 };
            
            // Track mouse in hero section
            heroSection.addEventListener('mousemove', (e) => {
                const rect = heroSection.getBoundingClientRect();
                mouse.x = e.clientX - rect.left;
                mouse.y = e.clientY - rect.top;
            });
            
            heroSection.addEventListener('mouseleave', () => {
                mouse.x = null;
                mouse.y = null;
            });
            
            class Particle {
                constructor() {
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * canvas.height;
                    this.vx = (Math.random() - 0.5) * 0.5;
                    this.vy = (Math.random() - 0.5) * 0.5;
                    this.radius = 2;
                }
                
                update() {
                    this.x += this.vx;
                    this.y += this.vy;
                    
                    // Mouse interaction
                    if (mouse.x && mouse.y) {
                        const dx = mouse.x - this.x;
                        const dy = mouse.y - this.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        
                        if (distance < mouse.radius) {
                            const force = (mouse.radius - distance) / mouse.radius;
                            const angle = Math.atan2(dy, dx);
                            this.vx -= Math.cos(angle) * force * 0.2;
                            this.vy -= Math.sin(angle) * force * 0.2;
                        }
                    }
                    
                    // Bounce off edges
                    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
                    
                    // Keep in bounds
                    this.x = Math.max(0, Math.min(canvas.width, this.x));
                    this.y = Math.max(0, Math.min(canvas.height, this.y));
                }
                
                draw() {
                    ctx.fillStyle = 'rgba(110, 193, 228, 0.6)';
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
            
            // Create particles
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
            
            // Draw connections
            function drawConnections() {
                for (let i = 0; i < particles.length; i++) {
                    for (let j = i + 1; j < particles.length; j++) {
                        const dx = particles[i].x - particles[j].x;
                        const dy = particles[i].y - particles[j].y;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        
                        if (distance < connectionDistance) {
                            const opacity = (1 - distance / connectionDistance) * 0.3;
                            ctx.strokeStyle = `rgba(110, 193, 228, ${opacity})`;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(particles[i].x, particles[i].y);
                            ctx.lineTo(particles[j].x, particles[j].y);
                            ctx.stroke();
                        }
                    }
                }
            }
            
            // Animation loop
            function animate() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                particles.forEach(particle => {
                    particle.update();
                    particle.draw();
                });
                
                drawConnections();
                requestAnimationFrame(animate);
            }
            
            animate();
        })();

        // 2. ADVANCED TYPEWRITER EFFECT
        (function() {
            const tagline = document.querySelector('.hero-tagline');
            if (!tagline) return;
            
            const originalText = tagline.textContent;
            tagline.textContent = '';
            tagline.style.borderRight = '2px solid var(--kelley-green)';
            
            let charIndex = 0;
            
            function typeWriter() {
                if (charIndex < originalText.length) {
                    tagline.textContent += originalText.charAt(charIndex);
                    charIndex++;
                    setTimeout(typeWriter, 80 + Math.random() * 40); // Variable speed for realism
                } else {
                    // Blinking cursor for 3 seconds
                    let blinkCount = 0;
                    const blinkInterval = setInterval(() => {
                        tagline.style.borderRight = 
                            tagline.style.borderRight === '2px solid transparent' 
                                ? '2px solid var(--kelley-green)' 
                                : '2px solid transparent';
                        blinkCount++;
                        if (blinkCount > 6) {
                            clearInterval(blinkInterval);
                            tagline.style.borderRight = 'none';
                        }
                    }, 500);
                }
            }
            
            // Start typing after a brief delay
            setTimeout(typeWriter, 800);
        })();

        // 3. 3D TILT EFFECT ON CARDS
        (function() {
            const cards = document.querySelectorAll('.value-card, .metric-card, .case-study');
            
            cards.forEach(card => {
                card.classList.add('tilt-card');
                
                card.addEventListener('mousemove', function(e) {
                    const rect = this.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    const deltaX = (x - centerX) / centerX;
                    const deltaY = (y - centerY) / centerY;
                    
                    const rotateX = deltaY * 10; // Max 10 degrees
                    const rotateY = deltaX * -10;
                    
                    this.style.transform = `
                        perspective(1000px) 
                        rotateX(${rotateX}deg) 
                        rotateY(${rotateY}deg) 
                        scale3d(1.02, 1.02, 1.02)
                    `;
                    
                    // Add subtle shadow based on tilt
                    const shadowX = deltaX * 10;
                    const shadowY = deltaY * 10;
                    this.style.boxShadow = `
                        ${shadowX}px ${shadowY}px 30px rgba(26, 38, 51, 0.15),
                        ${-shadowX}px ${-shadowY}px 20px rgba(110, 193, 228, 0.1)
                    `;
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
                    this.style.boxShadow = '';
                });
            });
        })();

        console.log('🎨 Advanced animations loaded: Particle Network, Typewriter, 3D Tilt, Animated Gradient');