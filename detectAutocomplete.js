javascript: (function () {
  // Remove existing elements and styles from previous executions
  function cleanup() {
    document
      .querySelectorAll(".ac-indicator, .ac-panel")
      .forEach((el) => el.remove());
    const existingStyle = document.querySelector("#ac-styles");
    if (existingStyle) existingStyle.remove();
  }
  cleanup();

  // Create DocumentFragment for better performance
  const fragment = document.createDocumentFragment();

  // Get all form elements
  const elements = document.querySelectorAll("input, select, textarea");

  // Initialize results object
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
    .ac-stats p {
      margin: 5px 0;
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
      border-left: 4px solid #4caf50;
    }
    .ac-invalid {
      background-color: #fcc;
      border-left: 4px solid #f44336;
    }
    .ac-missing {
      background-color: #ffc;
      border-left: 4px solid #ff9800;
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
  fragment.appendChild(style);

  // Define Maps for allowed values with metadata
  const allowedValuesMap = new Map([
    // General purpose
    [
      "on",
      {
        category: "general",
        description: "Enable autocomplete",
        validation: "standalone",
      },
    ],
    [
      "off",
      {
        category: "general",
        description: "Disable autocomplete",
        validation: "standalone",
      },
    ],

    // Names
    [
      "name",
      {
        category: "names",
        description: "Full name",
        validation: "standard",
      },
    ],
    [
      "given-name",
      {
        category: "names",
        description: "First name",
        validation: "standard",
      },
    ],
    [
      "additional-name",
      {
        category: "names",
        description: "Middle name",
        validation: "standard",
      },
    ],
    [
      "family-name",
      {
        category: "names",
        description: "Last name",
        validation: "standard",
      },
    ],

    // Contact
    [
      "email",
      {
        category: "contact",
        description: "Email address",
        validation: "standard",
      },
    ],
    [
      "tel",
      {
        category: "contact",
        description: "Phone number",
        validation: "standard",
      },
    ],
    [
      "url",
      {
        category: "contact",
        description: "Website URL",
        validation: "standard",
      },
    ],

    // Address
    [
      "street-address",
      {
        category: "address",
        description: "Street address",
        validation: "standard",
      },
    ],
    [
      "country",
      {
        category: "address",
        description: "Country",
        validation: "standard",
      },
    ],
    [
      "postal-code",
      {
        category: "address",
        description: "Postal/ZIP code",
        validation: "standard",
      },
    ],

    // Payment
    [
      "cc-name",
      {
        category: "payment",
        description: "Card holder name",
        validation: "sensitive",
      },
    ],
    [
      "cc-number",
      {
        category: "payment",
        description: "Card number",
        validation: "sensitive",
      },
    ],
    [
      "cc-exp",
      {
        category: "payment",
        description: "Card expiration",
        validation: "sensitive",
      },
    ],
  ]);

  // Define Map for sections
  const allowedSectionsMap = new Map([
    [
      "shipping",
      {
        validFields: ["name", "street-address", "postal-code", "country"],
        description: "Shipping information",
      },
    ],
    [
      "billing",
      {
        validFields: ["name", "street-address", "postal-code", "country"],
        description: "Billing information",
      },
    ],
    [
      "home",
      {
        validFields: ["tel", "email"],
        description: "Home contact",
      },
    ],
    [
      "work",
      {
        validFields: ["tel", "email"],
        description: "Work contact",
      },
    ],
  ]);

  // Validate autocomplete value with enhanced rules
  function validateAutocomplete(value) {
    if (!value) return { isValid: false, message: "Empty value" };

    const parts = value.toLowerCase().split(" ");

    // Special cases: on/off
    if (["on", "off"].includes(parts[0])) {
      return {
        isValid: parts.length === 1,
        message:
          parts.length > 1
            ? "'on' and 'off' must be used alone"
            : "Valid value",
      };
    }

    // Section validation
    if (parts[0].startsWith("section-")) {
      return {
        isValid:
          parts.length >= 2 && allowedValues.includes(parts[parts.length - 1]),
        message:
          parts.length < 2
            ? "Section must be followed by a value"
            : "Valid section",
      };
    }

    // Check section consistency
    if (allowedSections.includes(parts[0])) {
      const isValid =
        parts.length >= 2 && allowedValues.includes(parts[parts.length - 1]);
      return {
        isValid,
        message: isValid
          ? "Valid combined value"
          : "Invalid section combination",
      };
    }

    // Standard value validation
    return {
      isValid: allowedValues.includes(parts[0]),
      message: allowedValues.includes(parts[0])
        ? "Valid value"
        : "Invalid value",
    };
  }

  // Analyze form elements
  elements.forEach(function (element) {
    if (element.hasAttribute("autocomplete")) {
      const value = element.getAttribute("autocomplete");
      const validation = validateAutocomplete(value);
      validation.isValid
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
      <p>Total: ${elements.length}</p>
      <p>Valid: ${results.valid.length}</p>
      <p>Invalid: ${results.invalid.length}</p>
      <p>Missing: ${results.missing.length}</p>
    </div>
    <button class="ac-btn" id="ac-toggle">Hide/Display</button>
    <button class="ac-btn" id="ac-cleanup">Remove all</button>
  `;
  fragment.appendChild(panel);

  // Add visual indicators
  elements.forEach(function (element) {
    const label = document.createElement("p");
    label.className = "ac-indicator";

    if (element.hasAttribute("autocomplete")) {
      const value = element.getAttribute("autocomplete");
      const validation = validateAutocomplete(value);
      const parts = value.split(" ");

      let details = parts.length > 1 ? ` (Combined: ${parts.join(" + ")})` : "";

      label.innerHTML = `autocomplete="${value}"
        <span role="${validation.isValid ? "status" : "alert"}">
          ${validation.isValid ? " Valid" : " Invalid"}${details}
        </span>`;
      label.setAttribute("data-details", validation.message);
      label.className += validation.isValid ? " ac-valid" : " ac-invalid";
    } else {
      label.className += " ac-missing";
      label.textContent = "autocomplete missing";
      label.setAttribute("data-details", "Autocomplete attribute recommended");
    }

    element.parentNode.insertBefore(label, element.nextSibling);
  });

  // Add complete fragment to DOM
  document.body.appendChild(fragment);

  // Add event listeners for toggle and cleanup
  document.getElementById("ac-toggle")?.addEventListener("click", () => {
    document
      .querySelectorAll(".ac-indicator")
      .forEach((el) => el.classList.toggle("ac-hidden"));
  });

  document.getElementById("ac-cleanup")?.addEventListener("click", cleanup);
})();
