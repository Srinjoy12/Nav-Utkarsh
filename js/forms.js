/* ===================================================
   Nav Utkarsh — Form Handling JavaScript
   Validation, Submission, Character Counters
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --- Character Counters ---
  document.querySelectorAll('.form-textarea[data-maxlength]').forEach(textarea => {
    const maxLength = parseInt(textarea.getAttribute('data-maxlength'));
    const counter = textarea.parentElement.querySelector('.char-counter');
    
    if (counter) {
      const updateCounter = () => {
        const remaining = maxLength - textarea.value.length;
        counter.textContent = `${textarea.value.length} / ${maxLength}`;
        
        counter.classList.remove('warning', 'error');
        if (remaining <= 50 && remaining > 0) {
          counter.classList.add('warning');
        } else if (remaining <= 0) {
          counter.classList.add('error');
        }
      };
      
      textarea.addEventListener('input', updateCounter);
      updateCounter();
    }
  });

  // --- Form Validation ---
  function validateField(field) {
    const group = field.closest('.form-group');
    if (!group) return true;

    const isRequired = field.hasAttribute('required');
    let isValid = true;

    if (isRequired && !field.value.trim()) {
      isValid = false;
    }

    if (field.type === 'email' && field.value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      isValid = emailRegex.test(field.value);
    }

    if (isValid) {
      group.classList.remove('error');
      if (field.value.trim()) group.classList.add('success');
    } else {
      group.classList.add('error');
      group.classList.remove('success');
    }

    return isValid;
  }

  // Add blur validation to all form inputs
  document.querySelectorAll('.form-input, .form-textarea, .form-select').forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      const group = field.closest('.form-group');
      if (group && group.classList.contains('error')) {
        validateField(field);
      }
    });
  });

  // --- Form Submission Handler ---
  document.querySelectorAll('form[data-form-type]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Validate all required fields
      let isValid = true;
      form.querySelectorAll('[required]').forEach(field => {
        if (!validateField(field)) {
          isValid = false;
        }
      });

      if (!isValid) {
        // Scroll to first error
        const firstError = form.querySelector('.form-group.error');
        if (firstError) {
          firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
      }

      // Collect form data
      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => {
        if (data[key]) {
          if (Array.isArray(data[key])) {
            data[key].push(value);
          } else {
            data[key] = [data[key], value];
          }
        } else {
          data[key] = value;
        }
      });

      // Add metadata
      data._formType = form.getAttribute('data-form-type');
      data._submittedAt = new Date().toISOString();

      // Store in localStorage
      const storageKey = 'navutkarsh_' + data._formType;
      const existingData = JSON.parse(localStorage.getItem(storageKey) || '[]');
      existingData.push(data);
      localStorage.setItem(storageKey, JSON.stringify(existingData));

      // Show success message
      const successEl = form.parentElement.querySelector('.form-success');
      if (successEl) {
        form.style.display = 'none';
        successEl.classList.add('show');
        
        // Scroll to success message
        successEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      // Disable submit button
      const submitBtn = form.querySelector('[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitted!';
      }

      console.log(`Form submitted (${data._formType}):`, data);
    });
  });

  // --- Multi-step form (for survey) ---
  const multiStepForm = document.querySelector('.multi-step-form');
  
  if (multiStepForm) {
    const steps = multiStepForm.querySelectorAll('.form-step');
    const progressSteps = document.querySelectorAll('.form-progress__step');
    let currentStep = 0;

    function showStep(index) {
      steps.forEach((step, i) => {
        step.style.display = i === index ? 'block' : 'none';
      });

      progressSteps.forEach((step, i) => {
        step.classList.remove('active', 'done');
        if (i < index) step.classList.add('done');
        if (i === index) step.classList.add('active');
      });

      // Scroll to top of form
      multiStepForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Next buttons
    multiStepForm.querySelectorAll('.btn-next').forEach(btn => {
      btn.addEventListener('click', () => {
        // Validate current step
        let isValid = true;
        const currentStepEl = steps[currentStep];
        currentStepEl.querySelectorAll('[required]').forEach(field => {
          if (!validateField(field)) isValid = false;
        });

        if (isValid && currentStep < steps.length - 1) {
          currentStep++;
          showStep(currentStep);
        }
      });
    });

    // Previous buttons
    multiStepForm.querySelectorAll('.btn-prev').forEach(btn => {
      btn.addEventListener('click', () => {
        if (currentStep > 0) {
          currentStep--;
          showStep(currentStep);
        }
      });
    });

    // Initialize
    showStep(0);
  }

});
