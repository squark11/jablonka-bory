'use strict';
class CookieBanner {
  constructor() {
    this.root = document.getElementById('gdpr--cookie-policy-root');
    this.allowBtn = document.querySelector('.gdpr--cookie-accept');
    this.declineBtn = document.querySelector('.gdpr--cookie-decline');

    // Sprawdzenie lokalnej decyzji o cookies
    const cookiesAllowed = localStorage.getItem('cookies_allowed');
    if (!cookiesAllowed || cookiesAllowed === 'false') {
      this.root.classList.remove('hidden', 'gone');
    }

    this.allowCookies = this.allowCookies.bind(this);
    this.declineCookies = this.declineCookies.bind(this);

    if (this.allowBtn) this.allowBtn.addEventListener('click', this.allowCookies, false);
    if (this.declineBtn) this.declineBtn.addEventListener('click', this.declineCookies, false);
  }

  // Akceptacja cookies
  allowCookies() {
    localStorage.setItem('cookies_allowed', 'true');
    this.sendConsentToServer(true); // Wysyłanie decyzji do WordPress
    this.hideBanner();
  }

  // Odrzucenie cookies
  declineCookies() {
    localStorage.setItem('cookies_allowed', 'false');
    this.sendConsentToServer(false); // Wysyłanie decyzji do WordPress
    this.hideBanner();
  }

  // Ukrywanie banera
  hideBanner() {
    this.root.classList.add('hidden');
    setTimeout(() => {
      this.root.classList.add('gone');
    }, 800);
  }

  // Wysyłanie decyzji do WordPress (AJAX)
  sendConsentToServer(allowed) {
    fetch('/wp-admin/admin-ajax.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `action=save_cookie_consent&cookies_allowed=${allowed}`,
    }).catch((err) => console.error('Błąd przesyłania decyzji o cookies:', err));
  }
}

// Inicjalizacja banera
document.addEventListener('DOMContentLoaded', () => {
  new CookieBanner();
});
