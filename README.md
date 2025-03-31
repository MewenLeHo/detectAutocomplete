# detectAutocomplete
A simple tool for validating the `autocomplete` attributes of HTML form elements according to the HTML specification.

## Latest Updates
- Added support for combined values (e.g., 'shipping street-address')
- Enhanced validation feedback with detailed metadata
- Improved visual indicators and tooltips
- Added documentation about tool limitations

## Features

- <span aria-hidden="true">🔍</span> **Comprehensive Scanning**: Analyzes all form elements (`input`, `select`, `textarea`).
- <span aria-hidden="true">✅</span> **Attribute Validation**: Checks `autocomplete` attributes against HTML standards.
- <span aria-hidden="true">🎯</span> **Visual Indicators**: Displays status for valid, invalid, and missing attributes.
- <span aria-hidden="true">📊</span> **Summary Report**: Provides a quick overview of the analysis results.

## Installation

1. Create a new bookmark in your browser
2. Copy and paste the minified version of the code as the URL.

## Usage

1. Navigate to any webpage with forms
2. Click the bookmarklet
3. Review the results:
   - <span aria-hidden="true">🟢</span> **Green**: `autocomplete` present and valid.
   - <span aria-hidden="true">🔴</span> **Red**: `autocomplete` present but invalid.
   - <span aria-hidden="true">🟡</span> **Yellow**: `autocomplete` attribute missing.
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
**Important Note**: This tool performs syntax validation only. Specifically:
- It checks if autocomplete values are syntactically valid according to HTML5 standards
- It does NOT verify if valid values are used appropriately for their intended purpose
- It does NOT make suggestions for proper attribute usage
- It does NOT validate semantic correctness of field associations

For proper implementation guidance, please refer to:
- [HTML Specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofilling-form-controls:-the-autocomplete-attribute)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html)

## Future Improvements
- Using Map for allowed values to improve performance
- Enhance accessibility features
- Cleaning and reformating

## Contribution

Feel free to contribute by submitting issues or pull requests to enhance the tool's functionality or improve documentation. Your feedback is welcome!

## How to contribute?

1. Fork the repository
2. Modify the main `detectAutocomplete.js` file
3. Submit a pull request

**Note**: The minified version will be automatically generated during the build process - you only need to work with the main JavaScript file.

## Contributors

- [Mewen Le Hô](https://github.com/MewenLeHo)