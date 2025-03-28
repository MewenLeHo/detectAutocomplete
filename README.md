# detectAutocomplete
A simple tool for validating the `autocomplete` attributes of HTML form elements according to the HTML specification.

## Features

- 🔍 **Comprehensive Scanning**: Analyzes all form elements (`input`, `select`, `textarea`).
- ✅ **Attribute Validation**: Checks `autocomplete` attributes against HTML standards.
- 🎯 **Visual Indicators**: Displays status for valid, invalid, and missing attributes.
- 📊 **Summary Report**: Provides a quick overview of the analysis results.

## Installation

1. Create a new bookmark in your browser
2. Copy and paste the minified version of the code as the URL.

## Usage

1. Navigate to any webpage with forms
2. Click the bookmarklet
3. Review the results:
   - 🟢 **Green**: `autocomplete` present and valid.
   - 🔴 **Red**: `autocomplete` present but invalid.
   - 🟡 **Yellow**: `autocomplete` attribute missing.
4. A popup will display the total number of detected form elements.

## Why Use This?

- **Enhance Accessibility**: Improve form usability for all users.
- **Optimize Autofill**: Ensure proper browser autofill functionality.
- **Debug Issues**: Identify and resolve form implementation problems.
- **Quality Assurance**: Conduct quick checks for form compliance.
- **No Installation Required**: Works directly in your browser without additional setup.

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

Compatible with modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Limitations

## Future Improvements

## Contribution

Feel free to contribute by submitting issues or pull requests to enhance the tool's functionality or improve documentation. Your feedback is welcome!

## Contributors

- [Mewen Le Hô](https://github.com/MewenLeHo)