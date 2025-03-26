javascript:(function(){
  // Constants and variables initialization
  const elements = document.querySelectorAll('input, select, textarea');
  const resultsValid = [];
  const resultsInvalidOrMissing = [];
  const totalFormElements = elements.length;

  // HTML5 autocomplete valid values
  const allowedValues = [
    // General purpose
    'on', 'off',
    // Names
    'name', 'given-name', 'additional-name', 'family-name',
    // Contact info
    'email', 'tel', 'url',
    // Address fields
    'street-address', 'address-line1', 'address-line2', 'address-line3',
    'address-level1', 'address-level2', 'address-level3', 'address-level4',
    'country', 'country-name', 'postal-code',
    // Payment info
    'cc-name', 'cc-given-name', 'cc-additional-name', 'cc-family-name',
    'cc-number', 'cc-exp', 'cc-exp-month', 'cc-exp-year', 'cc-csc',
    'cc-type', 'transaction-currency', 'transaction-amount',
    // Personal info
    'bday', 'bday-day', 'bday-month', 'bday-year',
    'sex', 'gender', 'organization', 'organization-title', 'language',
    // Login credentials
    'username', 'new-password', 'current-password', 'one-time-code',
    // Phone numbers
    'tel-country-code', 'tel-national', 'tel-area-code',
    'tel-local', 'tel-extension', 'impp', 'photo',
    // Combined values
    'shipping-name', 'shipping-given-name', 'shipping-family-name',
    'shipping-street-address', 'shipping-postal-code', 'shipping-country',
    'billing-name', 'billing-given-name', 'billing-family-name',
    'billing-street-address', 'billing-postal-code', 'billing-country',
    'home-email', 'work-email', 'mobile-tel', 'home-tel', 'work-tel',
    'fax-tel', 'pager-tel'
  ];

  // Analyze form elements
  elements.forEach(function(element) {
    if (element.hasAttribute('autocomplete')) {
      let autocompleteValue = element.getAttribute('autocomplete');
      let isValid = allowedValues.includes(autocompleteValue) ? 'valid' : 'invalid';
      resultsValid.push({
        element: element,
        autocomplete: autocompleteValue,
        valid: isValid
      });
    } else {
      resultsInvalidOrMissing.push({
        element: element,
        autocomplete: '[null]',
        valid: '[missing]'
      });
    }
  });

  // Display results summary
  alert(`${totalFormElements} form elements detected.\n${resultsValid.length} elements with autocomplete attribute.`);

  // Add visual indicators
  elements.forEach(function(element) {
    const label = document.createElement('p');
    label.style.cssText = 'background:#ff0;color:#000;display:inline-block;padding:2px 5px;margin-top:2px;border-radius:3px;font-size:15px;font-family:monospace;font-weight:bold';

    if(element.hasAttribute('autocomplete')) {
      const value = element.getAttribute('autocomplete');
      const isValid = allowedValues.includes(value) ? '✓' : '✗';
      label.textContent = `autocomplete="${value}" ${isValid}`;
      label.style.backgroundColor = isValid === '✓' ? '#cfc' : '#fcc';
    } else {
      label.textContent = '[autocomplete] missing';
      label.style.backgroundColor = '#ffc';
    }

    element.parentNode.insertBefore(label, element.nextSibling);
  });
})();
