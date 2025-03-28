javascript: (function () {
  // Constants and variables initialization
  const elements = document.querySelectorAll("input, select, textarea");
  const results = {
    valid: [],
    invalid: [],
    missing: [],
  };

  // Styles
  const style = document.createElement("style");
  style.textContent = `
    .ac-panel {
      position: fixed;
      top: 10px;
      left: 10px;
      background: #fff;
      padding: 15px;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, .2);
      z-index: 99999;
      max-width: 300px;
      font-family: -apple-system, system-ui, sans-serif;
    }
    #ac-panel-title {
      font-size: 1.5em;
    }
    .ac-stats {
      margin: 10px 0;
      padding: 10px;
      background: #f5f5f5;
      border-radius: 3px;
    }
    .ac-indicator {
      background-color: #ff0;
      color: #000;
      display: block;
      max-inline-size: fit-content;
      padding: 2px 5px;
      margin-top: 2px;
      border-radius: 3px;
      font-size: 15px;
      font-family: monospace;
      font-weight: bold;
      transition: .2s;
    }
    .ac-valid {
      background-color: #cfc;
    }
    .ac-invalid {
      background-color: #fcc;
    }
    .ac-missing {
      background-color: #ffc;
    }
    .ac-hidden {
      display: none;
    }
    .ac-btn {
      margin: 5px;
      padding: 5px 10px;
      border: none;
      border-radius: 3px;
      background: #0d6efd;
      color: #fff;
      cursor: pointer;
    }
  `;
  document.head.appendChild(style);

  // HTML5 autocomplete valid values
  const allowedValues = [
    // General purpose
    "on",
    "off",
    // Names
    "name",
    "given-name",
    "additional-name",
    "family-name",
    // Contact info
    "email",
    "tel",
    "url",
    // Address fields
    "street-address",
    "address-line1",
    "address-line2",
    "address-line3",
    "address-level1",
    "address-level2",
    "address-level3",
    "address-level4",
    "country",
    "country-name",
    "postal-code",
    // Payment info
    "cc-name",
    "cc-given-name",
    "cc-additional-name",
    "cc-family-name",
    "cc-number",
    "cc-exp",
    "cc-exp-month",
    "cc-exp-year",
    "cc-csc",
    "cc-type",
    "transaction-currency",
    "transaction-amount",
    // Personal info
    "bday",
    "bday-day",
    "bday-month",
    "bday-year",
    "sex",
    "gender",
    "organization",
    "organization-title",
    "language",
    // Login credentials
    "username",
    "new-password",
    "current-password",
    "one-time-code",
    // Phone numbers
    "tel-country-code",
    "tel-national",
    "tel-area-code",
    "tel-local",
    "tel-extension",
    "impp",
    "photo",
    // Combined values
    "shipping-name",
    "shipping-given-name",
    "shipping-family-name",
    "shipping-street-address",
    "shipping-postal-code",
    "shipping-country",
    "billing-name",
    "billing-given-name",
    "billing-family-name",
    "billing-street-address",
    "billing-postal-code",
    "billing-country",
    "home-email",
    "work-email",
    "mobile-tel",
    "home-tel",
    "work-tel",
    "fax-tel",
    "pager-tel",
  ];

  // Analyze form elements
  elements.forEach(function (element) {
    if (element.hasAttribute("autocomplete")) {
      allowedValues.includes(element.getAttribute("autocomplete"))
        ? results.valid.push(element)
        : results.invalid.push(element);
    } else {
      results.missing.push(element);
    }
  });

  // Display results panel
  const panel = document.createElement("div");
  panel.className = "ac-panel";
  panel.setAttribute("role", "region");
  panel.setAttribute("aria-labelledby", "ac-panel-title");
  panel.innerHTML = `
    <p id="ac-panel-title">detectAutocomplete</p>
    <div class="ac-stats">
      Total: ${elements.length}<br>
      Valid: ${results.valid.length}<br>
      Invalid: ${results.invalid.length}<br>
      Missing: ${results.missing.length}
    </div>
    <button class="ac-btn" id="ac-toggle">Hide/Display</button>
  `;
  document.body.appendChild(panel);

  // Add visual indicators
  const fragment = document.createDocumentFragment();
  elements.forEach(function (element) {
    const label = document.createElement("p");
    label.className = "ac-indicator";

    if (element.hasAttribute("autocomplete")) {
      const value = element.getAttribute("autocomplete");
      const isValid = allowedValues.includes(value);
      const validStatus = isValid
        ? '<span role="status">Valid</span>'
        : '<span role="alert">Invalid</span>';

      label.innerHTML = `autocomplete="${value}" ${validStatus}`;
      label.className += isValid ? " ac-valid" : " ac-invalid";
    } else {
      label.className += " ac-missing";
      label.textContent = "autocomplete missing";
    }

    fragment.appendChild(label);
    element.parentNode.insertBefore(label, element.nextSibling);
  });

  // Event handlers
  document.getElementById("ac-toggle")?.addEventListener("click", () => {
    document
      .querySelectorAll(".ac-indicator")
      .forEach((el) => el.classList.toggle("ac-hidden"));
  });
})();
