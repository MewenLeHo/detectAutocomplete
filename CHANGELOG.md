# Changelog

All notable changes to this project will be documented in this file. This project follows the [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) principles and uses [Semantic Versioning](https://semver.org/).

## [Unreleased]

### Added
- **CSV Export**: Added a new feature to export validation results in a CSV format with detailed data.
- **Dark/Light Theme Support**: Theme switching based on system preference, improving accessibility and user experience.

### Changed
- **Accessibility Improvements**: Enhanced support for keyboard navigation and ARIA implementation, improving accessibility for screen readers.
- **UI Enhancements**: Reworked the control panel layout for better usability across devices.
- **Validation Engine**: Improved the validation engine to handle more complex field types and edge cases.

### Fixed
- **UI Glitches**: Fixed minor UI glitches in the control panel layout on Safari and Edge.
- **Cross-Browser Compatibility**: Resolved issues with validation results not displaying properly in certain browsers.

### Removed
- **Legacy IE Support**: Removed support for Internet Explorer versions below IE11 due to lack of modern JavaScript support.

## [1.3.2] – 2025-05-18

### Added
- **CSV Export**: Introduced the ability to export validation results as CSV files, making it easier to share and analyze audit data.
- **System Theme Detection**: Automatic detection of the system theme (light/dark mode) to improve the UI experience.

### Changed
- **Control Panel Layout**: Refined the UI design for the control panel, improving the layout and accessibility.
- **Performance Optimizations**: Enhanced performance for DOM manipulation, resulting in faster form analysis.

### Fixed
- **Safari and Edge Layout Fixes**: Fixed minor visual bugs in the control panel layout for Safari and Edge browsers.
- **Validation Feedback**: Fixed issues where validation feedback was not properly shown on certain forms.

### Removed
- **Deprecated Methods**: Removed outdated methods that were causing compatibility issues with modern browsers.

## [1.3.1] – 2025-05-10

### Added
- **Payment Field Support**: Introduced support for payment-related fields such as `cc-name`, `cc-number`, `cc-exp`, and `transaction-amount`.
- **Enhanced Validation Engine**: Improved validation logic for edge cases in address and contact information fields.

### Changed
- **Refined Validation Engine**: Further optimized the validation engine to handle more complex input fields and provide more accurate results.
- **UI Enhancements**: Improved visual feedback for invalid fields with clearer indicators and messages.

### Fixed
- **CSV Export Fix**: Fixed issues with exporting invalid data formats in CSV reports.
- **Form Detection**: Fixed bug where certain complex forms were not detected correctly.

## [1.3.0] – 2025-04-30

### Added
- **Initial Validation Engine**: Launched the first version of the validation engine to detect and analyze `autocomplete` attributes in form fields.
- **UI Control Panel**: Added a basic UI for users to interact with validation results.

### Changed
- **Performance Optimization**: Reduced the initial loading time by optimizing JavaScript execution and minimizing unnecessary DOM manipulations.

### Fixed
- **Validation Issues**: Fixed bugs related to the detection of standard form input fields like `email` and `tel`.
