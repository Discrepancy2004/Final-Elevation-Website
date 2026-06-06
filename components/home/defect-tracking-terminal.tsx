"use client"

import { Terminal } from "@/components/ui/terminal"

export function DefectTrackingTerminal() {
  return (
    <div className="w-full py-2">
      <Terminal
        username="elevation-qa"
        commands={[
          "npm run test:regression",
          "npm run qa:log-defect --id DEF-142 --severity high",
          "npm run qa:report --sprint 24 --format summary",
        ]}
        outputs={{
          0: [
            " PASS  auth/login.test.ts",
            " PASS  checkout/payment.test.ts",
            " FAIL  cart/discount.test.ts — 1 assertion",
            "Tests: 47 passed, 1 failed, 48 total",
          ],
          1: [
            "Defect DEF-142 logged successfully.",
            "Title: Discount not applied on mobile checkout",
            "Status: Open | Priority: High | Assignee: dev-team",
          ],
          2: [
            "Sprint 24 QA Summary",
            "Defects found: 12 | Resolved: 9 | Open: 3",
            "Critical: 0 | High: 2 | Medium: 1",
            "Report exported → ./reports/sprint-24-summary.pdf",
          ],
        }}
        typingSpeed={42}
        delayBetweenCommands={1200}
        initialDelay={400}
        enableSound={false}
        className="max-w-full"
      />
    </div>
  )
}
