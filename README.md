# detectAutocomplete
A simple tool for validating the `autocomplete` attributes of HTML form elements according to the HTML specification.

## Latest Updates
- Implemented Map-based validation for improved performance
- Added support for section-based validation (e.g., 'shipping', 'billing')
- Enhanced validation logic with detailed metadata
- Improved visual feedback and accessibility features
- Added cleanup functionality to remove previous results

## Features

- <span aria-hidden="true">🔍</span> **Comprehensive Scanning**: Analyzes all form elements (`input`, `select`, `textarea`).
- <span aria-hidden="true">✅</span> **Attribute Validation**: Checks `autocomplete` attributes against HTML standards.
- <span aria-hidden="true">🎯</span> **Visual Indicators**: Displays status for valid, invalid, and missing attributes.
- <span aria-hidden="true">📊</span> **Summary Report**: Provides a quick overview of the analysis results.

## Installation

1. Create a new bookmark in your browser
2. Copy the minified code provided in `detectAutocomplete.min.js`
3. Paste it as the bookmark URL (must start with `javascript:`)

## Usage

1. Navigate to any webpage with forms
2. Click the bookmarklet
3. Review the results:
   - <span aria-hidden="true">🟢</span> **Green**: Valid `autocomplete` value
   - <span aria-hidden="true">🔴</span> **Red**: Invalid or incorrect value
   - <span aria-hidden="true">🟡</span> **Yellow**: Missing attribute
4. Use the control panel to:
   - View statistics
   - Toggle indicators visibility
   - Remove all indicators

## Validation Features

The tool now supports:
- Standard autocomplete values
- Section-based values (shipping, billing, etc.)
- Combined values validation
- Special cases (on/off)

### Supported Sections
- `shipping`: For shipping-related fields
- `billing`: For billing information
- `home`: For home contact details
- `work`: For work-related information

### S## Supported Autocomplete Values

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

## Technical Improvements

- **Map-based Validation**: Using `Map` for efficient value lookup
- **Performance**: Optimized DOM operations with `requestAnimationFrame`
- **Accessibility**: Enhanced ARIA attributes and roles
- **Error Handling**: Improved validation feedback
- **Code Organization**: Better structure and maintainability

## Why Use This?

- **Enhance Accessibility**: Improve form usability for all users.
- **Optimize Autofill**: Ensure proper browser autofill functionality.
- **Debug Issues**: Identify and resolve form implementation problems.
- **Quality Assurance**: Conduct quick checks for form compliance.
- **No Installation Required**: Works directly in your browser without additional setup.

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