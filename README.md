# detectAutocomplete

A simple tool for validating the `autocomplete` attributes of HTML form elements according to the HTML specification.

## Demo

[Check out the demo](https://mewenleho.github.io/detectAutocomplete/)

## Quick Start Guide

**For auditors**:
- Install the bookmarklet
- Visit a page with forms
- Click to validate
- Review results

**For developers**:
- Fork the repository
- Review source code
- Run test suite
- Submit improvements

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
- Track compliance issues
- Create accessibility reports

## Latest Updates

**Core Improvements**:
- Added CSV export with detailed validation data
- Enhanced data export capabilities
- Improved validation engine

**UI & Accessibility**:
- Dark/light theme with system preference detection
- Enhanced visual feedback and animations
- Improved ARIA implementation

**Architecture**:
- Centralized message system
- Improved control panel layout
- Enhanced validation reporting

## Installation & Usage

**Installation**:
- Create a new bookmark in your browser
- Copy the minified code from `detectAutocomplete.min.js`
- Paste it as the bookmark URL

**Basic Usage**:
- Navigate to any webpage with forms
- Click the bookmarklet to start validation
- Review results and error messages
- Export reports if needed

**Results Indicators**:
- <span aria-hidden="true">🟢</span> **Green**: Valid autocomplete value
- <span aria-hidden="true">🔴</span> **Red**: Invalid syntax with suggestion
- <span aria-hidden="true">🟡</span> **Yellow**: Missing attribute (optional)

**Control Panel Features**:
- Validation statistics
- Visual indicators toggle
- Theme switching
- CSV export
- Panel controls
- Validation reset

## Core Features

**Validation Engine**:
- <span aria-hidden="true">🔍</span> **Form Analysis**: Comprehensive form element scanning
- <span aria-hidden="true">✅</span> **Syntax Validation**: Advanced checking with suggestions
- <span aria-hidden="true">⚙️</span> **Multiple Validation Types**: Syntax, sections, tokens

**User Interface**:
- <span aria-hidden="true">🎯</span> **Visual Feedback**: Clear status indicators
- <span aria-hidden="true">🌓</span> **Theme System**: Automatic light/dark modes
- <span aria-hidden="true">✨</span> **Modern Design**: Responsive layout with animations

**Accessibility & Export**:
- <span aria-hidden="true">♿</span> **A11y Support**: Screen reader optimization
- <span aria-hidden="true">🌐</span> **I18n Ready**: Centralized messaging
- <span aria-hidden="true">📊</span> **Data Export**: Detailed CSV reports

## Supported Values

**Personal Information**:
- `name`, `given-name`, `family-name`
- `email`, `tel`, `url`
- `organization`, `organization-title`
- `bday`, `sex`, `language`

**Address Information**:
- `street-address`, `country`, `postal-code`
- `address-line1`, `address-line2`
- `address-level1`, `address-level2`
- `country-name`

**Payment Information**:
- `cc-name`, `cc-number`, `cc-exp`
- `cc-type`, `transaction-currency`
- `transaction-amount`

**Credentials**:
- `username`, `current-password`
- `new-password`, `one-time-code`

**Section Prefixes**:
- `shipping`: Shipping information
- `billing`: Billing details
- `home`, `work`: Contact information
- `mobile`, `fax`, `pager`: Phone numbers

[Full list of supported values →](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofilling-form-controls:-the-autocomplete-attribute)

## Technical Architecture

**Core Components**:
- **Validation Layer**:
  - Syntax and error detection
  - Section validation
  - Token processing
  - Error management

- **Interface Layer**:
  - Control panel
  - Theme management
  - Animation system
  - Visual feedback

- **Data Layer**:
  - Message handling
  - Internationalization
  - Export system
  - Metadata management

**Performance Features**:
- Optimized DOM operations
- Efficient animations
- Batched updates
- Smart data structures

**Process Flow**:
- Form detection
- Attribute analysis
- Validation processing
- Error handling
- Visual feedback
- Data export

## Validation & Error Handling

**Validation Types**:
- **Syntax Checking**:
  - Standard values
  - Case sensitivity
  - Special characters
  - Unicode support

- **Section Analysis**:
  - Prefix validation
  - Combined values
  - Token ordering
  - Format verification

**Error Management**:
- Detailed messages
- Context-specific feedback
- Correction suggestions
- Standards references

**Export Capabilities**:
- Structured reports
- Field metadata
- Validation status
- Error details

## Browser Support & Requirements

**Supported Browsers**:
- Google Chrome (latest)
- Mozilla Firefox (latest)
- Safari 14+
- Microsoft Edge (Chromium)

**Feature Support**:
- CSV export
- Theme switching
- Animations
- Flexible UI

**Requirements**:
- Modern JavaScript support
- DOM manipulation capabilities
- CSS Grid support
- Local storage (for preferences)

## Limitations & Scope

**Important note**: This is a syntax validation tool only.

**Included Features**:
- Syntax validation
- HTML5 compliance
- Error detection
- Correction suggestions
- Export capabilities

**Not Included**:
- Semantic validation
- Field type checking
- Content validation
- Business logic

**Technical Limitations**:
- Browser compatibility
- Performance constraints
- DOM manipulation limits
- Export size limits

## Future Development

**Planned Features**:
- Advanced token validation
- Enhanced section rules
- Custom validation patterns
- Performance optimizations

**Technical Roadmap**:
- Result caching
- Enhanced DOM handling
- Extended API support
- Automated testing

**Accessibility Improvements**:
- Enhanced screen reader support
- Keyboard navigation
- High contrast modes
- ARIA enhancements

## Contributing

**Development Process**:
- Fork repository
- Create feature branch
- Follow coding standards
- Add/update tests
- Submit pull request

**Testing Requirements**:
- Unit tests
- Cross-browser testing
- Accessibility testing
- Performance testing

**Documentation**:
- Code comments
- README updates
- Usage examples
- API documentation

**Quality Standards**:
- Code style compliance
- Test coverage
- Performance benchmarks
- Accessibility compliance

**Note**: Work with unminified version only. Minified version is auto-generated.

## Support & Community

**Getting Help**:
- [GitHub Issues](https://github.com/MewenLeHo/detectAutocomplete/issues)
- Documentation
- Community discussions
- Bug reporting guide

**Contributing Opportunities**:
- Code contributions
- Documentation improvements
- Translations
- Bug reports
- Feature requests

**Stay Updated**:
- Release notifications
- Changelog updates
- Feature announcements
- Community news

## Version Information

**Current Version**: 1.2.0

**Core Features**:
- Full syntax validation
- Section prefix support
- Error suggestions
- CSV export
- Theme switching
- Enhanced UI

**Recent Improvements**:
- Centralized message system
- Enhanced accessibility
- Improved data export
- System theme detection
- Performance optimizations

**Upcoming Features**:
- Token order validation
- Advanced section rules
- Enhanced error reporting
- Result caching
- DOM optimization
- Keyboard shortcuts

## Project Information

**Repository**:
- GitHub: [detectAutocomplete](https://github.com/MewenLeHo/detectAutocomplete)
- License: MIT
- Issues: [Bug Tracker](https://github.com/MewenLeHo/detectAutocomplete/issues)

**Contributors**:
- [Mewen Le Hô](https://github.com/MewenLeHo)

**Resources**:
- [HTML Specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofilling-form-controls:-the-autocomplete-attribute)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html)
- [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
# detectAutocomplete

A simple tool for validating the `autocomplete` attributes of HTML form elements according to the HTML specification.

## Demo

[Check out the demo](https://mewenleho.github.io/detectAutocomplete/)

## Quick Start Guide

**For auditors**:
- Install the bookmarklet
- Visit a page with forms
- Click to validate
- Review results

**For developers**:
- Fork the repository
- Review source code
- Run test suite
- Submit improvements

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
- Track compliance issues
- Create accessibility reports

## Latest Updates

**Core Improvements**:
- Added CSV export with detailed validation data
- Enhanced data export capabilities
- Improved validation engine

**UI & Accessibility**:
- Dark/light theme with system preference detection
- Enhanced visual feedback and animations
- Improved ARIA implementation

**Architecture**:
- Centralized message system
- Improved control panel layout
- Enhanced validation reporting

## Installation & Usage

**Installation**:
- Create a new bookmark in your browser
- Copy the minified code from `detectAutocomplete.min.js`
- Paste it as the bookmark URL

**Basic Usage**:
- Navigate to any webpage with forms
- Click the bookmarklet to start validation
- Review results and error messages
- Export reports if needed

**Results Indicators**:
- <span aria-hidden="true">🟢</span> **Green**: Valid autocomplete value
- <span aria-hidden="true">🔴</span> **Red**: Invalid syntax with suggestion
- <span aria-hidden="true">🟡</span> **Yellow**: Missing attribute (optional)

**Control Panel Features**:
- Validation statistics
- Visual indicators toggle
- Theme switching
- CSV export
- Panel controls
- Validation reset

## Core Features

**Validation Engine**:
- <span aria-hidden="true">🔍</span> **Form Analysis**: Comprehensive form element scanning
- <span aria-hidden="true">✅</span> **Syntax Validation**: Advanced checking with suggestions
- <span aria-hidden="true">⚙️</span> **Multiple Validation Types**: Syntax, sections, tokens

**User Interface**:
- <span aria-hidden="true">🎯</span> **Visual Feedback**: Clear status indicators
- <span aria-hidden="true">🌓</span> **Theme System**: Automatic light/dark modes
- <span aria-hidden="true">✨</span> **Modern Design**: Responsive layout with animations

**Accessibility & Export**:
- <span aria-hidden="true">♿</span> **A11y Support**: Screen reader optimization
- <span aria-hidden="true">🌐</span> **I18n Ready**: Centralized messaging
- <span aria-hidden="true">📊</span> **Data Export**: Detailed CSV reports

## Supported Values

**Personal Information**:
- `name`, `given-name`, `family-name`
- `email`, `tel`, `url`
- `organization`, `organization-title`
- `bday`, `sex`, `language`

**Address Information**:
- `street-address`, `country`, `postal-code`
- `address-line1`, `address-line2`
- `address-level1`, `address-level2`
- `country-name`

**Payment Information**:
- `cc-name`, `cc-number`, `cc-exp`
- `cc-type`, `transaction-currency`
- `transaction-amount`

**Credentials**:
- `username`, `current-password`
- `new-password`, `one-time-code`

**Section Prefixes**:
- `shipping`: Shipping information
- `billing`: Billing details
- `home`, `work`: Contact information
- `mobile`, `fax`, `pager`: Phone numbers

[Full list of supported values →](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofilling-form-controls:-the-autocomplete-attribute)

## Technical Architecture

**Core Components**:
- **Validation Layer**:
  - Syntax and error detection
  - Section validation
  - Token processing
  - Error management

- **Interface Layer**:
  - Control panel
  - Theme management
  - Animation system
  - Visual feedback

- **Data Layer**:
  - Message handling
  - Internationalization
  - Export system
  - Metadata management

**Performance Features**:
- Optimized DOM operations
- Efficient animations
- Batched updates
- Smart data structures

**Process Flow**:
- Form detection
- Attribute analysis
- Validation processing
- Error handling
- Visual feedback
- Data export

## Validation & Error Handling

**Validation Types**:
- **Syntax Checking**:
  - Standard values
  - Case sensitivity
  - Special characters
  - Unicode support

- **Section Analysis**:
  - Prefix validation
  - Combined values
  - Token ordering
  - Format verification

**Error Management**:
- Detailed messages
- Context-specific feedback
- Correction suggestions
- Standards references

**Export Capabilities**:
- Structured reports
- Field metadata
- Validation status
- Error details

## Browser Support & Requirements

**Supported Browsers**:
- Google Chrome (latest)
- Mozilla Firefox (latest)
- Safari 14+
- Microsoft Edge (Chromium)

**Feature Support**:
- CSV export
- Theme switching
- Animations
- Flexible UI

**Requirements**:
- Modern JavaScript support
- DOM manipulation capabilities
- CSS Grid support
- Local storage (for preferences)

## Limitations & Scope

**Included Features**:
- Syntax validation
- HTML5 compliance
- Error detection
- Correction suggestions
- Export capabilities

**Not Included**:
- Semantic validation
- Field type checking
- Content validation
- Business logic

**Technical Limitations**:
- Browser compatibility
- Performance constraints
- DOM manipulation limits
- Export size limits

## Future Development

**Planned Features**:
- Advanced token validation
- Enhanced section rules
- Custom validation patterns
- Performance optimizations

**Technical Roadmap**:
- Result caching
- Enhanced DOM handling
- Extended API support
- Automated testing

**Accessibility Improvements**:
- Enhanced screen reader support
- Keyboard navigation
- High contrast modes
- ARIA enhancements

## Contributing

Feel free to contribute by submitting issues or pull requests to enhance the tool's functionality or improve documentation. Your feedback is welcome!

**Development Process**:
- Fork repository
- Create feature branch
- Modify the main `detectAutocomplete.js` file
- Follow coding standards
- Add/update tests
- Submit pull request

**Testing Requirements**:
- Unit tests
- Cross-browser testing
- Accessibility testing
- Performance testing

**Documentation**:
- Code comments
- README updates
- Usage examples
- API documentation

**Quality Standards**:
- Code style compliance
- Test coverage
- Performance benchmarks
- Accessibility compliance

**Note**: Work with unminified version only. Minified version is auto-generated.

## Support & Community

**Getting Help**:
- [GitHub Issues](https://github.com/MewenLeHo/detectAutocomplete/issues)
- Documentation
- Community discussions
- Bug reporting guide

**Contributing Opportunities**:
- Code contributions
- Documentation improvements
- Translations
- Bug reports
- Feature requests

**Stay Updated**:
- Release notifications
- Changelog updates
- Feature announcements
- Community news

## Version Information

**Current Version**: 1.2.0

**Core Features**:
- Full syntax validation
- Section prefix support
- Error suggestions
- CSV export
- Theme switching
- Enhanced UI

**Recent Improvements**:
- Centralized message system
- Enhanced accessibility
- Improved data export
- System theme detection
- Performance optimizations

**Upcoming Features**:
- Token order validation
- Advanced section rules
- Enhanced error reporting
- Result caching
- DOM optimization
- Keyboard shortcuts

## Project Information

**Repository**:
- GitHub: [detectAutocomplete](https://github.com/MewenLeHo/detectAutocomplete)
- Issues: [Bug Tracker](https://github.com/MewenLeHo/detectAutocomplete/issues)

**Contributors**:
- [Mewen Le Hô](https://github.com/MewenLeHo)

**Resources**:
- [HTML Specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofilling-form-controls:-the-autocomplete-attribute)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html)
- [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
