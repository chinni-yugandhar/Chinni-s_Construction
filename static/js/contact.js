// ===== Contact / Enquiry Form Handler (Web3Forms) =====

function initForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    e.stopPropagation();

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    const submitBtn = form.querySelector('#submitBtn');
    const originalText = submitBtn.innerHTML;
    const messageBox = form.querySelector('.form-message');

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Sending...';

    const formData = new FormData(form);
    const payload = {};
    formData.forEach(function (value, key) { payload[key] = value; });

    // If no email provided, use a placeholder so Web3Forms accepts
    if (!payload.email) payload.email = 'not-provided@chinniconstruction.com';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (result.success) {
        messageBox.className = 'form-message show success';
        messageBox.innerHTML = '<i class="bi bi-check-circle me-1"></i> Thank you! Your message has been sent. We will contact you soon.';
        form.reset();
        form.classList.remove('was-validated');
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (err) {
      messageBox.className = 'form-message show error';
      messageBox.innerHTML = '<i class="bi bi-exclamation-circle me-1"></i> Sorry, something went wrong. Please call or WhatsApp us directly.';
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  initForm('contactForm');
  initForm('enquiryForm');
});
