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

  // Initialize core variables
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

  // Messages configuration
  const messages = {
    validation: {
      empty: "Empty value",
      controlChars:
        "Invalid: autocomplete value cannot contain control characters",
      htmlChars:
        "Invalid: autocomplete value cannot contain HTML special characters",
      lineBreaks: "Invalid: autocomplete value cannot contain line breaks",
      leadingSpace: "Invalid: leading or trailing spaces are not allowed",
      startHyphen: "Invalid: autocomplete value cannot start with a hyphen",
    },
    section: {
      spaceInPrefix:
        'Invalid: no space allowed in "section-" prefix (format must be "section-" immediately followed by value)',
      doubleHyphen:
        'Invalid: section prefix must have exactly one hyphen (format must be "section-")',
      emptyValue:
        "Invalid: section prefix must be followed by a value (section-billing, section-shipping, etc.)",
      badPrefix: 'Invalid: section prefix must be exactly "section-"',
      missingHyphen: "Invalid: section prefix must include a hyphen (section-)",
      quotes: "Invalid: section name cannot contain quotes",
      nonAscii: "Invalid: section name must contain only ASCII characters",
      multipleSections: "Invalid: multiple section-* prefixes are not allowed",
      wrongPlace:
        "Invalid: section-* prefix must be at the start of the autocomplete attribute",
      noSpaceAfterHyphen:
        'Invalid: "section-" must be immediately followed by a value (no spaces after the hyphen)',
    },
    status: {
      missing: "Autocomplete attribute recommended",
      notValidToken: (token) =>
        `Invalid: "${token}" is not a valid autocomplete token`,
      onOffAlone: "'on' and 'off' must be used alone",
      validValue: "Valid value",
      validCanonical: (value) =>
        `Valid value (canonical form: ${value.toLowerCase()})`,
      validSection: "Valid section",
      validSectionCanonical: (value) =>
        `Valid section (canonical form: ${value.toLowerCase()})`,
      validCombined: "Valid combined value",
      validCombinedCanonical: (value) =>
        `Valid combined value (canonical form: ${value.toLowerCase()})`,
      extraWhitespace: (canonicalForm) =>
        `Valid but contains extra whitespace (canonical form: ${canonicalForm})`,
      invalidFieldName: (token) =>
        `Invalid: "${token}" is not a valid field name`,
      mustFollowField: (token) =>
        `Invalid: "${token}" must be followed by a valid field name`,
      sectionNeedsField: (token) =>
        `Invalid: "${token}" section must be followed by a valid field (name, address, etc.)`,
      addressOnly: (token) =>
        `Invalid: ${token} can only be combined with address or contact information`,
    },
    ui: {
      panelTitle: "detectAutocomplete",
      total: (count) => `Total: ${count}`,
      valid: (count) => `Valid: ${count}`,
      invalid: (count) => `Invalid: ${count}`,
      missing: (count) => `Missing: ${count}`,
      escapeHint: "Use Esc to close panel",
      exportInfo:
        "Export a CSV file containing the results of the accessibility analysis: a list of tested items, error types found, and suggested fixes.",
    },
    buttons: {
      hideDisplay: "Hide/Display",
      close: "Close",
      darkLight: "Dark/Light",
      export: "Export to CSV",
      screenReaderLabels: {
        indicators: " autocomplete indicators",
        panel: " the panel and remove all indicators",
        mode: " mode toggle",
        results: " the autocomplete audit results",
      },
    },
    indicators: {
      valid: "Valid",
      invalid: "Invalid",
      missing: "autocomplete missing",
      combined: (parts) => `(Combined: ${parts.join(" + ")})`,
      autocompletePrefix: (value) => `autocomplete="${value}"`,
    },
    csv: {
      header:
        "Tag,Name,Type,Autocomplete,Status,Validation Message,Data Details,Value",
      noName: "no-name",
      noType: "no-type",
      empty: "empty",
      noDetails: "No details",
      filename: (date) =>
        `autocomplete-audit-${date.toISOString().slice(0, 10)}.csv`,
      missingAttribute: "Missing autocomplete attribute",
    },
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
      max-width: 250px;
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
    .ac-footer {
      display: flex;
      flex-direction: column;
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
    .ac-btn:focus {
      outline: 2px solid #0d6efd;
      outline-offset: 2px;
      box-shadow: 0 0 10px rgba(13, 110, 253, 0.25);
    }
    @media (forced-colors: active) {
      .ac-btn:focus {
        outline: 3px solid #000;
        outline-offset: 3px;
      }
    }
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(-8px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @media (prefers-reduced-motion: no-preference) {
      .ac-panel {
        animation: fadeIn 0.5s ease-out;
      }
      .ac-indicator {
        animation: fadeIn 0.3s ease-out;
      }
    }
    @media (prefers-color-scheme: dark) {
      .ac-panel {
        background: #1e1e1e;
        color: #f0f0f0;
      }
      .ac-stats {
        background: #2c2c2c;
      }
      .ac-valid {
        background-color: #4caf50;
        border-left-color: #cfc;
      }
      .ac-invalid {
        background-color: #f44336;
        border-left-color: #fcc;
      }
      .ac-missing {
        background-color: #ff9800;
        border-left-color: #ffc;
      }
    }
    body.ac-dark .ac-panel {
      background: #1e1e1e;
      color: #eee;
    }
    body.ac-dark .ac-stats {
      background: #2c2c2c;
    }
    body.ac-dark .ac-valid {
      background-color: #4caf50;
      border-left-color: #cfc;
    }
    body.ac-dark .ac-invalid {
      background-color: #f44336;
      border-left-color: #fcc;
    }
    body.ac-dark .ac-missing {
      background-color: #ff9800;
      border-left-color: #ffc;
    }
    .visually-hidden {
      border: 0 !important;
      clip: rect(1px, 1px, 1px, 1px) !important;
      -webkit-clip-path: inset(50%) !important;
        clip-path: inset(50%) !important;
      height: 1px !important;
      margin: -1px !important;
      overflow: hidden !important;
      padding: 0 !important;
      position: absolute !important;
      width: 1px !important;
      white-space: nowrap !important;
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
      { category: "names", description: "Full name", validation: "standard" },
    ],
    [
      "given-name",
      { category: "names", description: "First name", validation: "standard" },
    ],
    [
      "additional-name",
      { category: "names", description: "Middle name", validation: "standard" },
    ],
    [
      "family-name",
      { category: "names", description: "Last name", validation: "standard" },
    ],
    [
      "honorific-prefix",
      {
        category: "names",
        description: "Title prefix (Mr., Dr., etc.)",
        validation: "standard",
      },
    ],
    [
      "honorific-suffix",
      {
        category: "names",
        description: "Title suffix (Jr., PhD, etc.)",
        validation: "standard",
      },
    ],
    [
      "nickname",
      { category: "names", description: "Nickname", validation: "standard" },
    ],

    // Contact info
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
    [
      "impp",
      {
        category: "contact",
        description: "Instant messaging URL",
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
      "address-line1",
      {
        category: "address",
        description: "Address line 1",
        validation: "standard",
      },
    ],
    [
      "address-line2",
      {
        category: "address",
        description: "Address line 2",
        validation: "standard",
      },
    ],
    [
      "address-line3",
      {
        category: "address",
        description: "Address line 3",
        validation: "standard",
      },
    ],
    [
      "address-level1",
      {
        category: "address",
        description: "State/Province",
        validation: "standard",
      },
    ],
    [
      "address-level2",
      { category: "address", description: "City", validation: "standard" },
    ],
    [
      "address-level3",
      { category: "address", description: "District", validation: "standard" },
    ],
    [
      "address-level4",
      {
        category: "address",
        description: "Neighborhood",
        validation: "standard",
      },
    ],
    [
      "country",
      {
        category: "address",
        description: "Country code",
        validation: "standard",
      },
    ],
    [
      "country-name",
      {
        category: "address",
        description: "Country name",
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
        description: "Full name on card",
        validation: "sensitive",
      },
    ],
    [
      "cc-given-name",
      {
        category: "payment",
        description: "First name on card",
        validation: "sensitive",
      },
    ],
    [
      "cc-additional-name",
      {
        category: "payment",
        description: "Middle name on card",
        validation: "sensitive",
      },
    ],
    [
      "cc-family-name",
      {
        category: "payment",
        description: "Last name on card",
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
        description: "Expiration date",
        validation: "sensitive",
      },
    ],
    [
      "cc-exp-month",
      {
        category: "payment",
        description: "Expiration month",
        validation: "sensitive",
      },
    ],
    [
      "cc-exp-year",
      {
        category: "payment",
        description: "Expiration year",
        validation: "sensitive",
      },
    ],
    [
      "cc-csc",
      {
        category: "payment",
        description: "Security code",
        validation: "sensitive",
      },
    ],
    [
      "cc-type",
      {
        category: "payment",
        description: "Card type",
        validation: "sensitive",
      },
    ],
    [
      "transaction-currency",
      {
        category: "payment",
        description: "Transaction currency",
        validation: "sensitive",
      },
    ],
    [
      "transaction-amount",
      {
        category: "payment",
        description: "Transaction amount",
        validation: "sensitive",
      },
    ],

    // Personal
    [
      "bday",
      {
        category: "personal",
        description: "Full birthday",
        validation: "standard",
      },
    ],
    [
      "bday-day",
      {
        category: "personal",
        description: "Birthday day",
        validation: "standard",
      },
    ],
    [
      "bday-month",
      {
        category: "personal",
        description: "Birthday month",
        validation: "standard",
      },
    ],
    [
      "bday-year",
      {
        category: "personal",
        description: "Birthday year",
        validation: "standard",
      },
    ],
    [
      "sex",
      {
        category: "personal",
        description: "Biological sex",
        validation: "standard",
      },
    ],
    [
      "organization",
      {
        category: "personal",
        description: "Company name",
        validation: "standard",
      },
    ],
    [
      "organization-title",
      {
        category: "personal",
        description: "Job title",
        validation: "standard",
      },
    ],
    [
      "language",
      {
        category: "personal",
        description: "Preferred language",
        validation: "standard",
      },
    ],
    [
      "photo",
      {
        category: "personal",
        description: "Photo URL",
        validation: "standard",
      },
    ],

    // Credentials
    [
      "username",
      {
        category: "credentials",
        description: "Username",
        validation: "sensitive",
      },
    ],
    [
      "new-password",
      {
        category: "credentials",
        description: "New password",
        validation: "sensitive",
      },
    ],
    [
      "current-password",
      {
        category: "credentials",
        description: "Current password",
        validation: "sensitive",
      },
    ],
    [
      "one-time-code",
      {
        category: "credentials",
        description: "One-time code",
        validation: "sensitive",
      },
    ],

    // Phone details
    [
      "tel-country-code",
      {
        category: "phone",
        description: "Country code",
        validation: "standard",
      },
    ],
    [
      "tel-national",
      {
        category: "phone",
        description: "National number",
        validation: "standard",
      },
    ],
    [
      "tel-area-code",
      { category: "phone", description: "Area code", validation: "standard" },
    ],
    [
      "tel-local",
      {
        category: "phone",
        description: "Local number",
        validation: "standard",
      },
    ],
    [
      "tel-local-prefix",
      {
        category: "phone",
        description: "First part of local number",
        validation: "standard",
      },
    ],
    [
      "tel-local-suffix",
      {
        category: "phone",
        description: "Last part of local number",
        validation: "standard",
      },
    ],
    [
      "tel-extension",
      {
        category: "phone",
        description: "Extension number",
        validation: "standard",
      },
    ],
  ]);

  // Define Map for sections
  const allowedSectionsMap = new Map([
    [
      "shipping",
      {
        type: "address-contact-only",
        description: "Shipping address or contact information only",
        validFields: new Set([
          "name",
          "given-name",
          "additional-name",
          "family-name",
          "honorific-prefix",
          "honorific-suffix",
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
          "tel",
          "tel-country-code",
          "tel-national",
          "tel-area-code",
          "tel-local",
          "tel-local-prefix",
          "tel-local-suffix",
          "tel-extension",
          "email",
        ]),
      },
    ],
    [
      "billing",
      {
        type: "address-contact-only",
        description: "Billing address or contact information only",
        validFields: new Set([
          "name",
          "given-name",
          "additional-name",
          "family-name",
          "honorific-prefix",
          "honorific-suffix",
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
          "tel",
          "tel-country-code",
          "tel-national",
          "tel-area-code",
          "tel-local",
          "tel-local-prefix",
          "tel-local-suffix",
          "tel-extension",
          "email",
        ]),
      },
    ],
    [
      "home",
      {
        validFields: new Set([
          "tel",
          "tel-country-code",
          "tel-national",
          "tel-area-code",
          "tel-local",
          "tel-local-prefix",
          "tel-local-suffix",
          "tel-extension",
          "email",
          "impp",
        ]),
      },
    ],
    [
      "work",
      {
        validFields: new Set([
          "tel",
          "tel-country-code",
          "tel-national",
          "tel-area-code",
          "tel-local",
          "tel-local-prefix",
          "tel-local-suffix",
          "tel-extension",
          "email",
          "impp",
        ]),
      },
    ],
    [
      "mobile",
      {
        validFields: new Set([
          "tel",
          "tel-country-code",
          "tel-national",
          "tel-area-code",
          "tel-local",
          "tel-local-prefix",
          "tel-local-suffix",
          "tel-extension",
        ]),
      },
    ],
    [
      "fax",
      {
        validFields: new Set([
          "tel",
          "tel-country-code",
          "tel-national",
          "tel-area-code",
          "tel-local",
          "tel-local-prefix",
          "tel-local-suffix",
          "tel-extension",
        ]),
      },
    ],
    [
      "pager",
      {
        validFields: new Set([
          "tel",
          "tel-country-code",
          "tel-national",
          "tel-area-code",
          "tel-local",
          "tel-local-prefix",
          "tel-local-suffix",
          "tel-extension",
        ]),
      },
    ],
  ]);

  // Check for non-ASCII characters in string (returns true if found)
  function containsNonASCII(str) {
    return /[^\x00-\x7F]/.test(str);
  }

  // Check for any tabs or multiple spaces within the string
  function hasExtraWhitespace(str) {
    return /[ ]{2,}|\t/.test(str);
  }

  function validateAutocomplete(value) {
    // Check for empty value
    if (!value) return { isValid: false, message: messages.validation.empty };

    // Check for control characters
    if (value.match(/[\x00-\x1F\x7F]/)) {
      return { isValid: false, message: messages.validation.controlChars };
    }

    // Check for HTML special characters (encoded or not)
    if (value.match(/[<>&]|&lt;|&gt;|&amp;/)) {
      return { isValid: false, message: messages.validation.htmlChars };
    }

    // Check for newlines in value
    if (value.includes("\n") || value.includes("\r")) {
      return { isValid: false, message: messages.validation.lineBreaks };
    }

    // Check for leading/trailing spaces
    if (value.trim() !== value) {
      return { isValid: false, message: messages.validation.leadingSpace };
    }

    // Check for value starting with hyphen
    if (value.startsWith("-")) {
      return { isValid: false, message: messages.validation.startHyphen };
    }

    // Check raw string for section format issues before any splitting/normalization
    const rawValue = value.toLowerCase();

    // Check for space between "section" and "-" (section -billing)
    if (rawValue.match(/section [- ]/)) {
      return { isValid: false, message: messages.section.spaceInPrefix };
    }

    // Check for double hyphen in section (section--billing)
    if (rawValue.includes("section--")) {
      return { isValid: false, message: messages.section.doubleHyphen };
    }

    // Check for empty section value (section- )
    if (rawValue.includes("section- ") || rawValue.includes("section-\t")) {
      return { isValid: false, message: messages.section.emptyValue };
    }

    // Check for invalid variations of the section prefix
    const hasInvalidSectionPrefix = value
      .toLowerCase()
      .split(" ")
      .some(
        (part) =>
          (part.startsWith("sect-") || part.startsWith("sections-")) &&
          !part.startsWith("section-")
      );

    if (hasInvalidSectionPrefix) {
      return {
        isValid: false,
        message: messages.section.badPrefix,
        suggestion: value.replace(/(sect|sections)-/, "section-"),
      };
    }

    // Check for section without hyphen
    const hasSectionWithoutHyphen = value
      .toLowerCase()
      .split(" ")
      .some(
        (part) =>
          part.startsWith("section") &&
          part.length > 7 &&
          part.charAt(7) !== "-"
      );

    if (hasSectionWithoutHyphen) {
      return {
        isValid: false,
        message: messages.section.missingHyphen,
        suggestion: value.replace("section", "section-"),
      };
    }

    // Check for non-canonical case
    const hasNonCanonicalCase = value !== value.toLowerCase();

    // Split and clean empty tokens
    const parts = value
      .toLowerCase()
      .split(/[ \t]+/)
      .filter(Boolean);
    const firstToken = parts[0];

    // Check for multiple sections
    const sections = parts.filter((part) => part.startsWith("section-"));
    if (sections.length > 1) {
      return { isValid: false, message: messages.section.multipleSections };
    }

    // Check for section- tokens in wrong position
    const sectionTokens = parts.filter((part) => part.startsWith("section-"));
    if (sectionTokens.length > 0 && !parts[0].startsWith("section-")) {
      return {
        isValid: false,
        message: messages.section.wrongPlace,
        suggestion: `${sectionTokens[0]} ${parts
          .filter((part) => !part.startsWith("section-"))
          .join(" ")}`,
      };
    }

    // Validate first token position
    if (
      !allowedSectionsMap.has(firstToken) &&
      !(firstToken.startsWith("section-") && firstToken.length > 8) &&
      !allowedValuesMap.has(firstToken) &&
      !["on", "off"].includes(firstToken)
    ) {
      if (firstToken.startsWith("section")) {
        return { isValid: false, message: messages.section.noSpaceAfterHyphen };
      }
      return {
        isValid: false,
        message: messages.status.notValidToken(firstToken),
      };
    }

    // Special cases: on/off
    if (["on", "off"].includes(parts[0])) {
      return {
        isValid: parts.length === 1,
        message:
          parts.length > 1
            ? messages.status.onOffAlone
            : hasNonCanonicalCase
            ? messages.status.validCanonical(value)
            : messages.status.validValue,
      };
    }

    // Check for multiple sections
    const standardSections = parts.filter((part) =>
      allowedSectionsMap.has(part)
    );
    if (standardSections.length > 1) {
      return { isValid: false, message: messages.section.multipleSections };
    }

    // Section validation
    if (parts[0].startsWith("section-")) {
      // Check for quotes in section name
      if (parts[0].includes('"') || parts[0].includes("'")) {
        return { isValid: false, message: messages.section.quotes };
      }

      // Check for non-ASCII characters in section name
      if (containsNonASCII(parts[0])) {
        return { isValid: false, message: messages.section.nonAscii };
      }

      // Check if the last token is a valid field name
      const lastToken = parts[parts.length - 1];
      const isValid = parts.length >= 2 && allowedValuesMap.has(lastToken);

      // Check for multiple whitespace characters
      const hasExtraSpaces = hasExtraWhitespace(value);
      const canonicalForm = parts.join(" ");

      return {
        isValid,
        message:
          parts.length < 2
            ? messages.status.mustFollowField(parts[0])
            : !isValid
            ? messages.status.invalidFieldName(lastToken)
            : hasExtraSpaces
            ? messages.status.extraWhitespace(canonicalForm)
            : hasNonCanonicalCase
            ? messages.status.validSectionCanonical(value)
            : messages.status.validSection,
      };
    }

    // Check section consistency
    if (allowedSectionsMap.has(parts[0])) {
      const section = allowedSectionsMap.get(parts[0]);
      const isValidSection =
        parts.length >= 2 && section.validFields.has(parts[parts.length - 1]);
      return {
        isValid: isValidSection,
        message:
          parts.length < 2
            ? messages.status.sectionNeedsField(parts[0])
            : isValidSection
            ? hasNonCanonicalCase
              ? messages.status.validCombinedCanonical(value)
              : messages.status.validCombined
            : messages.status.addressOnly(parts[0]),
      };
    }

    // Standard value validation
    const isValid = allowedValuesMap.has(parts[0]);
    return {
      isValid,
      message: isValid
        ? hasNonCanonicalCase
          ? messages.status.validCanonical(value)
          : messages.status.validValue
        : messages.status.notValidToken(parts[0]),
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
  panel.setAttribute("role", "dialog");
  panel.setAttribute("aria-modal", "true");
  panel.setAttribute("aria-labelledby", "ac-panel-title");
  panel.innerHTML = `
  <p id="ac-panel-title">${messages.ui.panelTitle}</p>
  <div class="ac-stats">
    <p>${messages.ui.total(elements.length)}</p>
    <p>${messages.ui.valid(results.valid.length)}</p>
    <p>${messages.ui.invalid(results.invalid.length)}</p>
    <p>${messages.ui.missing(results.missing.length)}</p>
  </div>
  <div class="ac-footer">
    <button class="ac-btn" id="ac-toggle">
      ${messages.buttons.hideDisplay}
      <span class="visually-hidden">${
        messages.buttons.screenReaderLabels.indicators
      }</span>
    </button>
    <button class="ac-btn" id="ac-cleanup">
      ${messages.buttons.close}
      <span class="visually-hidden">${
        messages.buttons.screenReaderLabels.panel
      }</span>
    </button>
    <button class="ac-btn" id="ac-theme">
      ${messages.buttons.darkLight}
      <span class="visually-hidden">${
        messages.buttons.screenReaderLabels.mode
      }</span>
    </button>
    <button class="ac-btn" id="ac-export" aria-describedby="exportInfo">
      ${messages.buttons.export}
      <span class="visually-hidden">${
        messages.buttons.screenReaderLabels.results
      }</span>
    </button>
  </div>
  <p id="exportInfo" class="visually-hidden">
    ${messages.ui.exportInfo}
  </p>
  <p>
    <small>${messages.ui.escapeHint}</small>
  </p>
`;
  fragment.appendChild(panel);

  // Add visual indicators
  requestAnimationFrame(() => {
    elements.forEach(function (element) {
      const label = document.createElement("p");
      label.className = "ac-indicator";

      if (element.hasAttribute("autocomplete")) {
        const value = element.getAttribute("autocomplete");
        const validation = validateAutocomplete(value);
        const parts = value.toLowerCase().split(" ").filter(Boolean);

        // Create separate elements for better control
        const valueSpan = document.createElement("span");
        valueSpan.textContent = messages.indicators.autocompletePrefix(value);

        const statusSpan = document.createElement("span");
        statusSpan.setAttribute(
          "role",
          validation.isValid ? "status" : "alert"
        );
        statusSpan.textContent = validation.isValid
          ? ` ${messages.indicators.valid}`
          : ` ${messages.indicators.invalid}`;

        if (parts.length > 1) {
          statusSpan.textContent += ` ${messages.indicators.combined(parts)}`;
        }

        // Assemble elements
        label.appendChild(valueSpan);
        label.appendChild(statusSpan);

        // Add additional attributes
        label.setAttribute("data-details", validation.message);
        label.className += validation.isValid ? " ac-valid" : " ac-invalid";
      } else {
        label.textContent = messages.indicators.missing;
        label.className += " ac-missing";
        label.setAttribute("data-details", messages.status.missing);
      }

      element.parentNode.insertBefore(label, element.nextSibling);
    });
  });

  // Export to CSV
  function exportToCSV() {
    // CSV header with all columns including data-details
    const header = messages.csv.header + "\n";

    const csv =
      header +
      Array.from(elements)
        .map((el) => {
          // Get autocomplete attribute or mark as missing
          const autocomplete = el.getAttribute("autocomplete") || "missing";

          // Validate autocomplete value if present
          const validation =
            autocomplete !== "missing"
              ? validateAutocomplete(autocomplete)
              : { isValid: false, message: messages.csv.missingAttribute };

          // Set status based on validation result
          const status = validation.isValid
            ? messages.indicators.valid
            : messages.indicators.invalid;

          // Find the associated indicator element to get data-details
          const indicator = el.nextElementSibling;
          const dataDetails =
            indicator && indicator.classList.contains("ac-indicator")
              ? (indicator.getAttribute("data-details") || "").replace(
                  /,/g,
                  ";"
                )
              : messages.csv.noDetails;

          // Return array of values, joined by commas
          return [
            el.tagName.toLowerCase(), // HTML tag (input, select, etc.)
            el.name || messages.csv.noName, // Field name attribute
            el.type || messages.csv.noType, // Field type attribute
            autocomplete, // Autocomplete value
            status, // Validation status
            validation.message.replace(/,/g, ";"), // Validation message (commas replaced)
            dataDetails, // Data-details content
            el.value || messages.csv.empty, // Current field value
          ].join(",");
        })
        .join("\n");

    // Add BOM for UTF-8 encoding
    const bom = "\uFEFF";

    // Create and trigger download
    const blob = new Blob([bom + csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = messages.csv.filename(new Date());
    a.click();

    // Cleanup
    URL.revokeObjectURL(url);
  }

  // Add complete fragment to DOM
  requestAnimationFrame(() => {
    document.body.insertBefore(fragment, document.body.firstChild);
    const panel = document.querySelector(".ac-panel");

    // Focus
    if (panel) {
      const firstButton = panel.querySelector("button");
      if (firstButton) {
        firstButton.focus();
      }

      // Escape shortcut
      panel.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          cleanup();
          document.activeElement?.blur();
        }
      });
    }

    // Add event listeners after elements are in DOM
    // Initialize states
    let isIndicatorsVisible = true;
    let isDarkMode = false;

    // Handle indicators toggle
    const toggleButton = document.getElementById("ac-toggle");
    if (toggleButton) {
      toggleButton.setAttribute("aria-pressed", "true"); // Initial state
      toggleButton.addEventListener("click", () => {
        isIndicatorsVisible = !isIndicatorsVisible;
        toggleButton.setAttribute(
          "aria-pressed",
          isIndicatorsVisible ? "true" : "false"
        );

        requestAnimationFrame(() => {
          document
            .querySelectorAll(".ac-indicator")
            .forEach((el) => el.classList.toggle("ac-hidden"));
        });
      });
    }

    // Handle theme toggle
    const themeButton = document.getElementById("ac-theme");
    if (themeButton) {
      themeButton.setAttribute("aria-pressed", "false"); // Initial state
      themeButton.addEventListener("click", () => {
        isDarkMode = !isDarkMode;
        themeButton.setAttribute("aria-pressed", isDarkMode ? "true" : "false");

        requestAnimationFrame(() => {
          document.body.classList.toggle("ac-dark");
        });
      });
    }

    // Handle export button
    const exportButton = document.getElementById("ac-export");
    if (exportButton) {
      exportButton.addEventListener("click", exportToCSV);
    }

    // Handle cleanup button
    const cleanupButton = document.getElementById("ac-cleanup");
    if (cleanupButton) {
      cleanupButton.addEventListener("click", cleanup);
    }
  });
})();
