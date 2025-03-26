# detectAutocomplete
A simple tool to validate HTML form elements' autocomplete attributes according to the HTML specification.

## Features

- 🔍 Scans all form elements (`input`, `select`, `textarea`).
- ✅ Validates `autocomplete` attributes against HTML standards
- 🎯 Visual indicators for valid, invalid, and missing attributes
- 📊 Quick summary of form elements analysis

## Installation

1. Create a new bookmark in your browser
2. Copy and paste the minified version of the code as the URL.

## Usage

1. Navigate to any webpage with forms
2. Click the bookmarklet
3. Review the results:
   - 🟢 Green: autocomplete present and valid
   - 🔴 Red: autocomplete present but invalid
   - 🟡 Yellow: missing autocomplete
4. A popup will show you the total number of form elements detected

## Why Use This?

- Improve form accessibility
- Ensure proper browser autofill functionality
- Debug form implementation issues
- Quick quality assurance checks
- No installation required - works directly in browser

## Supported Autocomplete Values

The tool validates against official HTML autocomplete attributes including:

### Personal Information
- `name`, `given-name`, `family-name`
- `email`, `tel`, `url`

### Address
- `street-address`, `country`, `postal-code`
- `address-line1`, `address-line2`

### Payment
- `cc-name`, `cc-number`, `cc-exp`
- `cc-type`, `transaction-currency`

### Credentials
- `username`, `current-password`, `new-password`

[See full list of supported values](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofilling-form-controls:-the-autocomplete-attribute)

## Browser Compatibility

Works with modern browsers:
- Chrome
- Firefox
- Safari
- Edge