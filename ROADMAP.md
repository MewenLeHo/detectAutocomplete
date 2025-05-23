# Roadmap – detectAutocomplete

This roadmap outlines the planned features and improvements for `detectAutocomplete`. Contributions and feedback are welcome through GitHub Issues or Pull Requests.

## Short-term Goals (0-3 months)

- [ ] Add an option to **automatically detect fields missing the `autocomplete` attribute**.
- [ ] Display a **completion score** or **percentage** of fields correctly annotated with `autocomplete`.
- [ ] **Improve visual feedback**:
  - Color adjustments and clearer indicators for validation status.
  - Tooltips or on-hover explanations for better accessibility.
  - Improved accessibility warnings for non-compliant fields.

## Mid-term Goals (3-6 months)

- [ ] Support **complex and edge case fields**:
  - Handle attributes like `address-line1`, `tel-extension`, and similar complex cases.
- [ ] Enhance **accessibility**:
  - **Keyboard navigation** for the UI.
  - Improve **ARIA support** for screen readers.
  - Provide **screen reader-friendly feedback** and messages.
- [ ] Add **customization options** for users to adjust validation criteria and thresholds.

## Long-term Goals (6+ months)

- [ ] **Advanced validation rules**:
  - Support for custom field types and validation patterns.
  - Improved rules for **dynamic form fields** (e.g., fields that appear based on user interaction).
- [ ] Introduce **performance optimizations** to ensure smooth validation in large forms (handling DOM complexity).

## Accessibility Improvements (Ongoing)

- [ ] **Enhanced screen reader support**: Clearer feedback and ARIA roles for all form elements.
- [ ] **Keyboard navigation**: Enable full control of the validation panel using only the keyboard.
- [ ] **High contrast modes** for better visibility in different environments.
- [ ] Improve **ARIA roles** and add appropriate landmark regions for accessibility.

## Planned Features

- **Advanced token validation**: Support for validating edge cases in field tokens (e.g., handling variations in expected input patterns).
- **Enhanced section rules**: Support for complex form structures and custom field groups.
- **Custom validation patterns**: Allow users to define their own validation patterns for `autocomplete`.
- **Performance optimizations**: Reducing the time complexity for large forms, optimizing DOM operations.
- **Internationalization (i18n)**: Added i18n support for better localization of validation feedback.

## Technical Roadmap

- **Result caching**: Store previous validation results for faster revalidation.
- **Enhanced DOM handling**: Efficient traversal and manipulation of form elements to improve performance.
- **Extended API support**: Expose an API for integration with third-party tools or for server-side validation.
- **Automated testing**: Implement comprehensive unit tests, integration tests, and performance benchmarks.
