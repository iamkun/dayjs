# Security Policy

## Supported Versions

Security updates are provided for the latest stable release. Users are encouraged to stay on the most recent published version.

| Version | Supported          |
| ------- | ------------------ |
| 1.x (latest) | :white_check_mark: |
| 0.x / pre-1.0 | :x: |

## Reporting a Vulnerability

Please report suspected security vulnerabilities through GitHub's **private vulnerability reporting** feature so the report is only visible to the maintainers:

https://github.com/iamkun/dayjs/security/advisories

If private vulnerability reporting is not available for this repository, please open an issue and mark it clearly as a security report without including exploit details, then maintainers will follow up privately.

Please do not disclose the vulnerability publicly until it has been triaged and a coordinated disclosure plan is agreed.

### What to include in a report

- Affected version(s)
- A minimal reproduction or description of the impact
- Any suggested fix or mitigation, if available
- Whether the issue has been disclosed elsewhere

## Disclosure Policy

- Maintainers acknowledge receipt of security reports as soon as practical.
- Reports are triaged by the maintainers and validated before any public disclosure.
- Security fixes are released through the normal release process and referenced in the changelog.

## Security Best Practices

Day.js is a zero-dependency date library that performs no network requests and does not evaluate untrusted code. When integrating Day.js, follow standard supply-chain practices: pin the dependency version, verify published package integrity, and keep the library updated to receive security fixes.
