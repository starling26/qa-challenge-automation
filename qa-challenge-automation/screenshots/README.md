# 🚀 GitHub Actions Workflows - Comprehensive CI/CD Suite

This project includes a comprehensive set of GitHub Actions workflows for automating testing, bug evidence collection, performance, and security.

## 📋 Available Workflows

### 1. 🧪 E2E Testing Suite (`e2e-tests.yml`)
**Trigger**: Push, PR, manual  
**Description**: Main end-to-end testing pipeline with parallel execution across multiple browsers and platforms.

**Features**:
- ✅ Parallel testing on Chromium, Firefox, WebKit
- 📱 Mobile testing (Chrome and Safari)
- 🖥️ Multi-OS testing (Ubuntu, Windows, macOS)
- 📊 Interactive HTML reports
- 📸 Automatic screenshots on failures
- 🔗 Automatic deploy to GitHub Pages
- 📈 Integrated performance metrics

**Usage**:
```bash
# Run manually
gh workflow run e2e-tests.yml

# With specific parameters
gh workflow run e2e-tests.yml -f test_category=contact-form -f browsers=chromium
```

### 2. 🐛 Bug Evidence Capture (`bug-evidence.yml`)
**Trigger**: Manual, automatically after failures  
**Description**: Automatic evidence capture for failing tests.

**Features**:
- 📸 Automatic screenshots on failures
- 🎥 Execution videos (when available)
- 📋 Detailed evidence reports
- 🔄 Consolidation of evidence by bug type
- 📊 Master report of identified bugs
- 🎯 Automatic failure categorization

**Tests with automatic evidence**:
- TC08: Phone validation
- TC03: Email validation
- TC_AUTO_013: Login with invalid credentials
- TC_AUTO_018: Transfer with insufficient funds

### 3. ⚡ Performance Testing (`performance.yml`)
**Trigger**: Weekly (Sundays), manual  
**Description**: Performance testing with different worker configurations.

**Features**:
- 📊 Tests with 1, 3, and 5 parallel workers
- ⏱️ Execution time measurements
- 🏆 Identification of optimal configuration
- 📈 Performance comparison across configurations
- 🎯 Automated recommendations for CI/CD
- 🔥 Stress, load, and endurance tests

**Test types**:
- **Standard**: Normal performance testing
- **Stress**: 20 tests with 10 repetitions
- **Load**: 50 parallel tests
- **Endurance**: Continuous testing for 2 hours

### 4. 🔄 Regression Testing (`regression.yml`)
**Trigger**: Push, PR, manual  
**Description**: Full regression testing suite with change analysis.

**Features**:
- 🔍 Automatic analysis of changed files
- 🎯 Dynamic scope based on changes
- 🖥️ Cross-platform testing (Ubuntu, Windows, macOS)
- 🌐 Full cross-browser testing
- 📊 Detailed regression reports
- 💬 Automatic comments on PRs
- ❌ Workflow fails if regression detected

**Available scopes**:
- **Smoke**: Basic critical tests (TC01, TC02, TC03)
- **Critical**: Main system tests
- **Recent**: Only new tests (TC_AUTO_*)
- **Full**: Full regression suite

### 5. 🔒 Security Testing (`security.yml`)
**Trigger**: Weekly (Mondays), manual  
**Description**: Basic security testing and vulnerability analysis.

**Features**:
- 🔒 XSS (Cross-Site Scripting) testing
- 💉 SQL Injection testing
- ✅ Input sanitization validation
- 🛡️ Security headers analysis
- 🔐 HTTPS enforcement verification
- 📊 Vulnerability reports
- 🎯 Security recommendations

**Security test types**:
- **XSS**: 10+ different XSS payloads
- **Injection**: 10+ SQL injection payloads
- **Validation**: Buffer overflow, path traversal, etc.
- **Headers**: Security headers analysis

## 🚀 Configuration and Usage

### Required Environment Variables
```yaml
env:
  BASE_URL: https://parabank.parasoft.com/parabank
```

### Project Dependencies
- Node.js 18+
- Playwright
- Tests in TypeScript

### Artifacts Structure

Each workflow generates organized artifacts:

```
artifacts/
├── test-results-{browser}/          # Results by browser
├── performance-results-{workers}/   # Performance results
├── regression-results-{os}-{browser}/ # Regression results
├── security-results-{type}/         # Security results
├── bug-evidence-{test}/             # Bug evidence
└── master-reports/                  # Consolidated reports
```

## 📊 Reports and Evidence

### Interactive HTML Reports
- Accessible via GitHub Pages
- Navigation by test categories
- Integrated screenshots
- Performance metrics

### Bug Evidence
- Automatic screenshots on failures
- Videos when available
- Detailed execution logs
- Full error context

### Status Badges
Workflows generate automatic badges:
- Performance: `Performance-{time}s-{color}`
- Regression: `Regression-{percentage}%-{color}`
- Security: `Security-{score}-{color}`

## 🔧 Customization

### Add New Tests
1. Create a test in `/tests/`
2. Follow the naming convention `TC##`
3. Workflows will detect them automatically

### Modify Triggers
Edit the `on:` sections in each workflow:
```yaml
on:
  schedule:
    - cron: '0 6 * * 1'  # Monday 6:00 AM
  workflow_dispatch:     # Manual
  push:
    branches: [main]     # On push to main
```

### Configure Notifications
Add notification steps:
```yaml
- name: 📧 Notify on failure
  if: failure()
  uses: actions/slack@v1
  # ... configuration
```

## 🎯 Best Practices

### For Development
1. Use the `e2e-tests.yml` workflow on PRs
2. Review automatic bug evidence
3. Monitor performance metrics

### For CI/CD
1. Configure `regression.yml` on the main branch
2. Use `performance.yml` results to optimize
3. Regularly review `security.yml` reports

### For Maintenance
1. Archive artifacts after 30–90 days
2. Update security payloads periodically
3. Optimize worker configuration based on performance

## 📈 Monitoring and Metrics

### Key KPIs
- **Success Rate**: Percentage of passing tests
- **Performance Baseline**: Standard execution time
- **Security Score**: Detected vulnerabilities
- **Regression Detection**: Newly introduced failures

### Automatic Alerts
- Regression test failures
- Performance degradation > 20%
- New security vulnerabilities
- Test coverage < 80%

## 🔗 Useful Links

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Playwright Documentation](https://playwright.dev/)
- [ParaBank Application](https://parabank.parasoft.com/parabank)
- [Project Documentation](./documentation/)

## 🤝 Contributing

1. Fork the project
2. Create a feature branch
3. Add/modify tests as needed
4. Ensure workflows pass
5. Create a Pull Request

Workflows will automatically:
- Run regression tests
- Capture failure evidence
- Comment on the PR with results
- Block merge if regressions are detected

---

**Note**: All workflows are designed to fail gracefully and provide maximum information for debugging and continuous improvement.

