# detectAutocomplete

A simple tool for validating the `autocomplete` attributes of HTML form elements according to the HTML specification.


## Demo

[Check out the demo](https://mewenleho.github.io/detectAutocomplete/)


## Quick Start Guide

**For auditors**:
1. Install the bookmarklet
2. Visit a page with forms
3. Click to validate
4. Review results

**For developers**:
1. Fork the repository
2. Review source code
3. Run test suite
4. Submit improvements


## Common Use Cases

**Accessibility audits**:
- Form compliance checking
- Autocomplete implementation review
- Error detection and reporting

**Development**:
- Form validation during development
- Quality assurance testing
- Cross-browser compatibility checks

**Documentation**:
- Generate validation reports
- Export detailed CSV audits
- Document form implementations
- Track compliance issues
- Create accessibility reports


## Latest Updates
- Added CSV export functionality for validation results
- Implemented dark/light theme toggle
- Enhanced visual feedback with animation effects
- Added comprehensive data export including validation details
- Improved control panel with flexible button layout


## Installation

1. Create a new bookmark in your browser
2. Copy the minified code provided in `detectAutocomplete.min.js`
3. Paste it as the bookmark URL


## Usage

1. Navigate to any webpage with forms

2. Click the bookmarklet to start validation:
   - The tool will scan all form elements
   - A control panel will appear
   - Results will be displayed next to form fields

3. Review the validation results:
   - <span aria-hidden="true">🟢</span> **Green**: Valid autocomplete value
   - <span aria-hidden="true">🔴</span> **Red**: Invalid syntax with correction suggestion
   - <span aria-hidden="true">🟡</span> **Yellow**: Missing attribute (optional)

4. Use the control panel features:
   - View validation statistics
   - Toggle visual indicators
   - Switch between dark/light themes
   - Export results to CSV
   - Hide/Show the control panel
   - Remove all indicators
   - Re-run validation

5. Review error messages:
   - Syntax error descriptions
   - Correction suggestions when applicable
   - Reference to HTML specifications


## Browser Compatibility

**Supported browsers**:
- Google Chrome (latest version)
- Mozilla Firefox (latest version)
- Safari 14+
- Microsoft Edge (Chromium-based)

**Note**: The bookmarklet uses modern JavaScript features. Older browser versions may not be supported.

**Enhanced features support**:
- CSV export functionality
- Theme switching capabilities
- Animation effects
- Flexible UI layout


## Best Practices

**Using the tool**:
- Clear previous results before new validation
- Review all error messages carefully
- Use control panel for better visibility
- Export results for documentation

**Implementation tips**:
- Focus on syntax correctness
- Follow HTML specifications
- Test across different browsers
- Document special cases

**Validation process**:
- Start with standard fields
- Check section implementations
- Verify complex combinations
- Document findings


## Features

- <span aria-hidden="true">🔍</span> **Comprehensive Scanning**: Analyzes all form elements (`input`, `select`, `textarea`).
- <span aria-hidden="true">✅</span> **Attribute Validation**: Checks `autocomplete` attributes against HTML standards with syntax correction suggestions.
- <span aria-hidden="true">🎯</span> **Visual Indicators**: Displays status for valid, invalid, and missing attributes.
- <span aria-hidden="true">📊</span> **Summary Report**: Provides a quick overview of the analysis results.
- <span aria-hidden="true">⚙️</span> **Validation Types**:
  - Syntax validation (format, spaces, special characters)
  - Section prefix validation
  - Token format validation
  - Syntax correction suggestions
- <span aria-hidden="true">💾</span> **Export Capabilities**: Generate detailed CSV reports of validation results
- <span aria-hidden="true">🌓</span> **Theme Support**: Toggle between light and dark themes
- <span aria-hidden="true">✨</span> **Enhanced UI**: Smooth animations and improved visual feedback

**UI Components**:
- Flexible control panel
- Theme switching
- Export functionality
- Animation effects
- Status indicators


## Validation Features

The tool now supports:

**Syntax validation**:
- Standard autocomplete values
- Space handling
- Case-sensitivity validation
- Valid special characters support
- Unicode characters validation
- Leading/trailing spaces detection

**Section validation**:
- Section-based values (shipping, billing, etc.)
- Section prefix validation
- Space handling in section prefixes

**Token validation**:
- Multiple tokens validation
- Combined values validation
- Special cases (on/off)

**Error handling**:
- Syntax error detection
- Correction suggestions for syntax errors

**Export capabilities**:
- Comprehensive CSV reports
- Detailed validation data
- Field metadata export
- Status and error reporting
- Data-details inclusion


### Supported Sections

**Standard sections**:
- `shipping`: For shipping-related fields
- `billing`: For billing information
- `home`: For home contact details
- `work`: For work-related information


### Supported Autocomplete Values

The tool validates against official HTML autocomplete attributes including:

**Personal Information**:
- `name`, `given-name`, `family-name`
- `email`, `tel`, `url`

**Address**:
- `street-address`, `country`, `postal-code`
- `address-line1`, `address-line2`

**Payment**:
- `cc-name`, `cc-number`, `cc-exp`
- `cc-type`, `transaction-currency`

**Credentials**:
- `username`, `current-password`, `new-password`

[See full list of supported values](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofilling-form-controls:-the-autocomplete-attribute)


## Error Messages

The tool provides different types of feedback:

**Syntax validation**:
- Format errors in autocomplete values
- Space and special character issues
- Case sensitivity problems
- Correction suggestions for syntax errors

**Section validation**:
- Section prefix format issues
- Section naming conventions
- Space handling in sections
- Valid section suggestions

**What's not included**:
- Semantic usage recommendations
- Field type associations
- Content appropriateness

**Export format**:
- CSV-friendly error formatting
- Detailed validation status
- Comprehensive field information
- Data-details inclusion
- Structured reporting format

## Technical Improvements

- **Validation engine**: Multi-level syntax validation system
- **Error detection**: Precise identification of syntax issues
- **Suggestion system**: Syntax correction suggestions
- **Section handling**: Dedicated section prefix validation
- **User interface**: Enhanced control panel
- **Testing**: Comprehensive test suite
- **Code structure**: Modular and maintainable architecture
- **Export system**: Comprehensive CSV export functionality
- **Theme handling**: Dynamic theme switching support
- **Animation system**: Smooth transitions and visual feedback
- **UI enhancements**: Flexible control panel layout

**New features**:
- CSV generation and download
- Theme management system
- Animation framework
- Enhanced UI components
- Flexible control panel


## Tool Architecture

**Core components**:
- Validation Engine: Handles syntax checking and error detection
- Section Handler: Manages section-based validation
- Token Parser: Processes multiple token combinations
- Error Manager: Generates contextual error messages
- UI Controller: Manages visual feedback and control panel
- Export Manager: Handles CSV generation and download
- Theme Controller: Manages theme switching and preferences
- Animation Handler: Controls UI transitions and effects

**Validation flow**:
1. Form element detection
2. Attribute parsing
3. Syntax validation
4. Section validation
5. Error processing
6. Visual feedback
7. Data export


## Performance Considerations

**DOM Optimization**:
- Efficient DOM traversal
- Minimal reflows and repaints
- DocumentFragment for batch updates
- RequestAnimationFrame for UI updates

**Data Processing**:
- Modular validation process
- Efficient CSV data generation
- Optimized data structure handling
- Memory-efficient export handling

**UI Performance**:
- Smooth animation transitions
- Optimized theme switching
- Efficient visual feedback
- Batched UI updates

**Best practices**:
- Run validation on individual pages rather than entire sites
- Clear previous results before new validation
- Use control panel for managing visual indicators
- Export results before clearing
- Save CSV reports for later analysis
- Toggle indicators for better performance on complex pages

## Limitations

**Important note**: This is a syntax validation tool only.

**What it DOES**:
- Validates autocomplete attribute syntax
- Checks against HTML5 standards
- Suggests syntax corrections
- Identifies format errors

**What it does NOT do**:
- Recommend which attributes to use
- Validate semantic field associations
- Check field content appropriateness
- Verify business logic

For proper implementation guidance, please refer to:
- [HTML Specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofilling-form-controls:-the-autocomplete-attribute)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html)


## Why Use This?

- **Enhance Accessibility**: Improve form usability for all users
- **Optimize Autofill**: Ensure proper browser autofill functionality
- **Debug Issues**: Identify and resolve form implementation problems
- **Quality Assurance**: Conduct quick checks for form compliance
- **No Installation Required**: Works directly in your browser without additional setup
- **Detailed Feedback**: Get precise syntax validation with correction suggestions
- **Professional Auditing**: Comprehensive validation for accessibility experts
- **Export Capabilities**: Generate detailed CSV reports for documentation
- **Visual Comfort**: Switch between light and dark themes
- **Professional Reporting**: Export comprehensive validation data
- **Enhanced UI**: Smooth animations and clear visual feedback


## Future Improvements
- Implement token order validation according to HTML specification
- Enhance performance with validation result caching
- Improve error reporting with more detailed explanations
- Create user documentation and usage guidelines


## How to contribute?

Feel free to contribute by submitting issues or pull requests to enhance the tool's functionality or improve documentation. Your feedback is welcome!

**Development**:
1. Fork the repository
2. Create a feature branch
3. Modify the main `detectAutocomplete.js` file
4. Add/update tests as needed
5. Submit a pull request

**Testing**:
- Run existing test cases
- Add new test cases for new features
- Test across different browsers
- Test with various form configurations

**Documentation**:
- Improve README clarity
- Add code comments
- Update usage examples
- Report issues and suggestions

**Note**: Work with the unminified version only. The minified version is automatically generated.


## Support and Community

**Get help**:
- Review existing issues on GitHub
- Check documentation
- Submit detailed bug reports

**Contribute**:
- Code improvements
- Test cases
- Documentation
- Translations

**Stay updated**:
- Watch the repository
- Check release notes
- Follow contributors


## Version History

**Current version: 1.1.0**
- Full syntax validation
- Section prefix support
- Error suggestions
- Enhanced UI
- Added CSV export functionality
- Implemented theme switching
- Enhanced UI animations
- Improved control panel
- Added comprehensive data export

**Planned updates**:

**Validation Enhancements**:
- Token order validation according to HTML specification
- Advanced section validation rules
- Custom validation patterns support

**Performance Optimization**:
- Validation result caching
- Improved DOM handling

**Documentation & Reporting**:
- Extended documentation with examples

**User Experience**:
- Advanced animation controls
- Keyboard shortcuts
- Accessibility improvements
- Enhanced visual feedback


## Contributors

- [Mewen Le Hô](https://github.com/MewenLeHo)
